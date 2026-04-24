"use client";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import Image from "next/image";
import { useMemo, useState } from "react";

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Custom kitchen upgrades built for better flow, storage, and everyday use.",
    highlight: "Built for functionality & flow",
  },
  {
    title: "Bathroom Remodeling",
    description: "Bathroom remodels finished with clean detail, durability, and a polished look.",
    highlight: "Clean finishes that last",
  },
  {
    title: "Floor Installation",
    description: "Professional flooring installation that improves the feel, style, and value of your home.",
    highlight: "Precision installation",
  },
  {
   title: "Wallpaper Installation",
  description: "Expert wallpaper installation with seamless alignment, crisp edges, and a flawless finish that elevates your space.",
  highlight: "Clean alignment & premium finish"
},
  {
    title: "Interior & Exterior Painting",
    description: "High-quality painting that refreshes and protects your home inside and out.",
    highlight: "Smooth, even finishes",
  },
];

const finishedProjects = [
  {
    title: "Kitchen Remodel",
    image: "/D9EDB019-0B72-4A52-AE14-843D5BF27DF1.jpeg",
  },
  {
    title: "Patio Remodel",
    image: "/Patio1.heic",
  },
  {
    title: "Bathroom Remodel",
    image: "/Bathroom.jpg",
  },
  {
    title: "Wallpaper Installation",
    image: "/Vanity.PNG",
  },
  {
    title: "Custom Vanity Installation",
    image: "/after-vanity.jpg",
  },
  {
    title: "Living Room Remodel",
    image: "/IMG_6693.jpeg",
  },
  {
    title: "Wallpaper Installation",
    image: "/IMG_6686.HEIC",
  },
  {
    title: "Wallpaper Installation",
    image: "/IMG_6694.HEIC",
  },
  {
    title: "Wallpaper Installation",
    image: "/IMG_6215.heic",
  },
]
const featuredComparison = {
  title: "Exterior Painting Before & After",
  before: "/03FCD776-A733-4AA9-8777-D0250FBA959F.HEIC",
  after: "/69EB0A22-B0E0-4070-86E8-C5DDB406E53A.HEIC",
};
export default function Home() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    callbackTime: "",
    service: "",
    details: "",
  });

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const emailHref = useMemo(() => {
    const subject = `Estimate Request - ${form.service || "Website Inquiry"}`;

    const body = [
      "Hello Chamillion Remodeling,",
      "",
      "I would like to schedule an estimate.",
      "",
      `Name: ${form.name || "-"}`,
      `Phone Number: ${form.phone || "-"}`,
      `Best Time for a Call: ${form.callbackTime || "-"}`,
      `Service Needed: ${form.service || "-"}`,
      "",
      "Project Brief:",
      form.details || "-",
    ].join("\n");

    return `mailto:chamillionremodeling214@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src="/icon.png"
              alt="Chamillion Remodeling Logo"
              width={52}
              height={52}
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              priority
            />
            <div className="truncate text-[11px] font-semibold tracking-[0.16em] sm:text-sm md:text-base">
              CHAMILLION REMODELING LLC
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsEstimateOpen(true)}
            className="shrink-0 rounded-full bg-[#7C9A6D] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6b875d]"
          >
            <a
  href="tel:2142889423"
  className="hidden sm:inline-flex items-center text-sm font-medium text-zinc-700 hover:text-[#7C9A6D] mr-4"
>
  (214) 288-9423
</a>
            Book Estimate
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#f6f8f5]">
  <div className="absolute right-0 top-0 h-full w-1/3 bg-[#e8efe5]" />

  <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
    <div>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#7C9A6D]">
        13+ Years of Experience • Fully Insured
      </p>

      <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
        Quality remodeling with a clean, polished finish.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
        Chamillion Remodeling helps Dallas homeowners upgrade their spaces with dependable workmanship, clear communication, and finishes that look done right.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setIsEstimateOpen(true)}
          className="rounded-full bg-[#7C9A6D] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#6b875d]"
        >
          Schedule an Estimate
        </button>

        <a
          href="tel:2142889423"
          className="rounded-full border border-zinc-300 bg-white px-7 py-3 text-center text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
        >
          Call (214) 288-9423
        </a>
      </div>

      <div className="mt-8 inline-flex rounded-full border border-[#dfe7dc] bg-white px-5 py-3 text-sm text-[#1f3d2b] shadow-sm">
        Serving Dallas and nearby areas • Pricing may vary by location
      </div>
    </div>

    <div className="relative">
      <div className="absolute -left-6 -top-6 h-32 w-32 rounded-[28px] bg-[#7C9A6D]/20" />
      <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-[32px] bg-[#7C9A6D]/20" />

      <div className="relative overflow-hidden rounded-[34px] border border-white bg-white p-4 shadow-2xl">
        <Image
          src="/icon.png"
          alt="Chamillion Remodeling"
          width={700}
          height={700}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </div>
  </div>
</section>

        <section
  id="services"
  className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
>
  <div className="mb-10 text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C9A6D]">
      Services
    </p>

    <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl">
      Remodeling services built around quality and detail
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600">
      Clean finishes, dependable workmanship, and thoughtful upgrades for homeowners who want the job done right.
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((service) => (
      <div
        key={service.title}
        className="rounded-[22px] border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="mb-4 h-1 w-12 rounded-full bg-[#7C9A6D]" />

        <h3 className="text-lg font-semibold text-zinc-900">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          {service.description}
        </p>

        <p className="mt-4 text-sm font-medium text-[#6f8a67]">
          {service.highlight}
        </p>
      </div>
    ))}
  </div>
</section>
<section className="bg-[#f6f8f5] py-20 px-6">
  <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 items-center">

    {/* LEFT SIDE - TEXT */}
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-[#7C9A6D] font-semibold">
        About Us
      </p>

      <h2 className="mt-3 text-4xl font-bold text-zinc-900 leading-tight">
        Built on quality, finished with precision
      </h2>

      <p className="mt-6 text-zinc-600 leading-7">
        At Chamillion Remodeling, we specialize in transforming homes with clean finishes, thoughtful design, and attention to detail.
      </p>

      <p className="mt-4 text-zinc-600 leading-7">
        From the first walkthrough to the final touches, every project is handled with care, clear communication, and a commitment to doing it right.
      </p>

      {/* FEATURES */}
      <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-xl bg-white p-4 shadow-sm border">
          ✔ Clean, detailed finishes
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border">
          ✔ Reliable & professional
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border">
          ✔ Clear communication
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border">
          ✔ Fully insured
        </div>
      </div>
    </div>

    {/* RIGHT SIDE - VISUAL BLOCK */}
    <div className="relative">
      <div className="absolute -top-6 -left-6 h-32 w-32 bg-[#7C9A6D] rounded-2xl opacity-20"></div>
      <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[#7C9A6D] rounded-2xl opacity-20"></div>

      <div className="relative overflow-hidden rounded-[28px] shadow-xl border">
        <Image
          src="/IMG_6691.jpeg"  // you can change this to your best project photo
          alt="Remodeling project"
          width={800}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

  </div>
</section>
       <section className="bg-[#f6f8f5] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7C9A6D]">
          Before & After
        </p>

        <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl">
          See the difference quality work makes
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          Drag the slider to compare the original space with the completed finish.
        </p>
      </div>

      <div className="rounded-2xl border border-[#dfe7dc] bg-white px-5 py-4 text-sm text-zinc-600 shadow-sm">
        <span className="font-semibold text-[#1f3d2b]">Tip:</span> Slide left or right to compare.
      </div>
    </div>

    <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-3 shadow-xl sm:p-5">
      <div className="mb-3 flex justify-between px-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        <span>Before</span>
        <span>After</span>
      </div>

      <div className="overflow-hidden rounded-[24px] bg-zinc-100">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={featuredComparison.before}
              alt="Before remodel"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={featuredComparison.after}
              alt="After remodel"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          }
          className="aspect-[4/5] w-full sm:aspect-[16/9] max-h-[560px]"
        />
      </div>

      <div className="flex flex-col gap-3 px-2 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-zinc-900">
            {featuredComparison.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            Interactive project comparison.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsEstimateOpen(true)}
          className="rounded-full bg-[#7C9A6D] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6b875d]"
        >
          Schedule an Estimate
        </button>
      </div>
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-stone-50 py-16 sm:py-20">
  <div className="absolute left-0 top-0 h-full w-10 bg-[#7C9A6D] sm:w-16 lg:w-24" />
  <div className="absolute right-0 top-0 h-full w-10 bg-[#7C9A6D] sm:w-16 lg:w-24" />

  <div className="relative mx-auto w-full max-w-7xl px-14 sm:px-24 lg:px-36">
    <div className="mb-10 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7c9a6d]">
        Portfolio
      </p>

      <h2 className="mt-3 text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl">
        Finished Projects
      </h2>

      <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
        Swipe through completed projects with clean finishes and quality detail.
      </p>
    </div>

    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-4 pb-10 pt-6">
      {finishedProjects.map((project) => (
        <div
          key={project.title}
          className="min-w-[82%] snap-center overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-xl transition-transform duration-300 hover:scale-105 sm:min-w-[62%] lg:min-w-[45%]"
        >
          <div className="relative w-full aspect-[4/5] bg-zinc-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-stone-50 px-4 py-16">
  <div className="mx-auto max-w-4xl rounded-[28px] border border-zinc-200 bg-white p-6 text-center shadow-sm sm:p-10">
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C9A6D]">
      Client Reviews
    </p>

    <h2 className="mt-3 text-3xl font-semibold text-zinc-900">
      Worked with us? Leave a review
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
      Reviews are added after completed projects. If you’ve worked with us, we’d appreciate your feedback.
    </p>

    <a
      href="mailto:chamillionremodeling214@outlook.com?subject=Client Review for Chamillion Remodeling&body=Name:%0AProject completed:%0ARating:%0AReview:%0A"
      className="mt-6 inline-flex rounded-full bg-[#7C9A6D] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6b875d]"
    >
      Submit a Review
    </a>
  </div>
</section>
        <section id="contact" className="bg-zinc-900 py-14 text-white md:py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
                Free Estimate
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Tell us when we can come by for an estimate
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-300">
                Reach out to discuss your project, the service you need, and the
                best time for us to call you.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsEstimateOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
            >
              Start Estimate Request
            </button>
          </div>
        </section>
</main>

    <main>
      {/* all your sections */}
    </main>

    {/* 👇 ADD IT HERE */}
    <a
      href="tel:2142889423"
      className="sm:hidden fixed bottom-5 right-5 z-50 rounded-full bg-[#7C9A6D] px-6 py-3 text-sm font-semibold text-white shadow-xl hover:bg-[#6b875d] transition"
    >
      Call Now
    </a>
);
{isEstimateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-zinc-200 px-5 py-5 sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C9A6D] sm:text-sm">
                  Schedule an Estimate
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-zinc-900">
                  Tell us about your project
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsEstimateOpen(false)}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 transition hover:bg-zinc-100"
              >
                Close
              </button>
            </div>

            <div className="px-5 py-6 sm:px-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[#7C9A6D]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="Best number to reach you"
                    className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[#7C9A6D]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Best Time for a Call
                  </label>
                  <input
                    type="text"
                    value={form.callbackTime}
                    onChange={(e) => updateForm("callbackTime", e.target.value)}
                    placeholder="Example: Weekdays after 5 PM"
                    className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[#7C9A6D]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => updateForm("service", e.target.value)}
                    className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7C9A6D]"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Brief Project Description
                  </label>
                  <textarea
                    value={form.details}
                    onChange={(e) => updateForm("details", e.target.value)}
                    placeholder="Tell us what you’re wanting done"
                    rows={5}
                    className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[#7C9A6D]"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-stone-50 p-4 text-sm leading-6 text-zinc-600">
                When you continue, your email app will open with all of this
                information filled in and ready to send to{" "}
                <span className="font-medium text-zinc-900">
                  chamillionremodeling214@outlook.com
                </span>
                .
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center rounded-full bg-[#7C9A6D] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6b875d]"
                >
                  Continue to Email
                </a>

                <button
                  type="button"
                  onClick={() => setIsEstimateOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
            )}
    </div>
  );
}