export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      location,
      contactMethod,
      callbackTime,
      service,
      details,
    } = body;

    if (!name || !phone || !service || !details) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const escapeHtml = (value: string = "") =>
      value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Chamillion Website <estimates@chamillionremodeling.com>",
        to: ["info@chamillionremodeling.com"],
        reply_to: email || undefined,
        subject: `NEW ESTIMATE REQUEST — ${service}`,
        html: `
          <div style="font-family:Arial,sans-serif;background:#071d15;padding:30px;color:#ffffff;">
            
            <div style="max-width:650px;margin:auto;background:#050806;border:1px solid #c99a3d;padding:32px;">
              
              <p style="color:#e2bd68;font-size:12px;font-weight:bold;letter-spacing:2px;margin:0 0 10px;">
                CHAMILLION REMODELING
              </p>

              <h1 style="font-family:Georgia,serif;color:#ffffff;margin:0 0 8px;">
                New Estimate Request
              </h1>

              <p style="color:#aaaaaa;margin:0 0 30px;">
                A customer submitted an estimate request through chamillionremodeling.com.
              </p>

              <table style="width:100%;border-collapse:collapse;color:#ffffff;">
                
                <tr>
                  <td style="padding:12px 0;color:#e2bd68;width:180px;">Name</td>
                  <td>${escapeHtml(name)}</td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#e2bd68;">Phone</td>
                  <td>${escapeHtml(phone)}</td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#e2bd68;">Email</td>
                  <td>${escapeHtml(email || "Not provided")}</td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#e2bd68;">Project Location</td>
                  <td>${escapeHtml(location || "Not provided")}</td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#e2bd68;">Service</td>
                  <td>${escapeHtml(service)}</td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#e2bd68;">Preferred Contact</td>
                  <td>${escapeHtml(contactMethod || "Not specified")}</td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#e2bd68;">Best Time To Contact</td>
                  <td>${escapeHtml(callbackTime || "Not specified")}</td>
                </tr>

              </table>

              <div style="margin-top:25px;border-top:1px solid #c99a3d;padding-top:25px;">
                
                <p style="color:#e2bd68;font-weight:bold;margin-bottom:10px;">
                  PROJECT DESCRIPTION
                </p>

                <p style="color:#dddddd;line-height:1.7;white-space:pre-wrap;">
                  ${escapeHtml(details)}
                </p>

              </div>

              <div style="margin-top:30px;padding-top:20px;border-top:1px solid #333;color:#777;font-size:12px;">
                Submitted through ChamillionRemodeling.com
              </div>

            </div>
          </div>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend error:", resendData);

      return Response.json(
        { error: "We couldn't send your request. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Estimate request received.",
    });
  } catch (error) {
    console.error("Estimate submission error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
