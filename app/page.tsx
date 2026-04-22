"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const services = [
  {
    number: "01",
    title: "Kitchen Remodeling",
    description: "Custom kitchen upgrades built for better flow, storage, and everyday use.",
    highlight: "Built for functionality & flow",
  },
  {
    number: "02",
    title: "Bathroom Remodeling",
    description: "Bathroom remodels finished with clean detail, durability, and a polished look.",
    highlight: "Clean finishes that last",
  },
  {
    number: "03",
    title: "Floor Installation",
    description: "Professional flooring installation that improves the feel, style, and value of your home.",
    highlight: "Precision installation",
  },
  {
    number: "04",
    title: "Interior & Exterior Painting",
    description: "High-quality painting that refreshes and protects your home inside and out.",
    highlight: "Smooth, even finishes",
  },
];

const transformations = [
  {
    title: "Kitchen Remodel",
    before: "/IMG_0169.jpeg",
    after: "/D9EDB019-0B72-4A52-AE14-843D5BF27DF1.jpeg",
  },
  {
    title: "Bathroom Remodel",
    before: "/before-tub.jpg",
    after: "/after-bathroom.jpg",
  },
  {
    title: "Shower Finish",
    before: "/before-bathroom.jpg",
    after: "/after-shower.jpg",
  },
  {
    title: "Vanity Installation",
    before: "/before-vanity.jpg",
    after: "/after-vanity.jpg",
  },
];

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
            Book Estimate
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div className="order-2 flex flex-col justify-center lg:order-1">
        
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f8a67]">
  13+ Years of Experience <span className="mx-2 text-zinc-400">*</span> Fully Insured <span className="mx-2 text-zinc-400">*</span> DFW Metroplex
</p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
              Quality remodeling with a clean, polished finish
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
              Chamillion Remodeling helps homeowners upgrade their spaces with
              dependable workmanship, clear communication, and results that look
              finished the right way.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsEstimateOpen(true)}
                className="inline-flex items-center justify-center rounded-full bg-[#7C9A6D] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6b875d]"
              >
                Schedule an Estimate
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium transition hover:bg-zinc-100"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="w-full max-w-[360px] rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:max-w-[430px] lg:max-w-[500px]">
              <Image
                src="/icon.png"
                alt="Chamillion Remodeling Logo"
                width={500}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8"
        >
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C9A6D] sm:text-sm">
              Services
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Remodeling services built around quality and detail
            </h2>

            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
  Thoughtful upgrades, clean finishes, and dependable workmanship for homeowners who want their space done right.
            </p>  
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4ed] text-sm font-bold text-[#6f8f6b] transition group-hover:bg-[#6f8f6b] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-zinc-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-[15px]">
                  {service.description}
                </p>

                <div className="mt-5 text-sm font-medium text-[#6f8a67]">
  {service.highlight}
</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C9A6D] sm:text-sm">
                Portfolio
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Recent transformations with a clean finished look
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
                A closer look at the spaces we’ve upgraded with detail-focused
                work, polished finishes, and a result that feels complete.
              </p>
            </div>

            <div className="md:text-right">
              <div className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
                Designed to grow with future projects
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {transformations.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
              >
                <div className="flex flex-col gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C9A6D]">
                      Featured Project
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-900 sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                      Clean Finish
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                      Detail Focused
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="border-b border-zinc-200 sm:border-b-0 sm:border-r">
                    <div className="relative overflow-hidden bg-zinc-100">
                      <div className="absolute left-4 top-4 z-10">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-700 shadow-sm backdrop-blur">
                          {project.title === "Vanity Installation"
                            ? "Plan"
                            : "Before"}
                        </span>
                      </div>

                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={project.before}
                          alt={`${project.title} before`}
                          width={1400}
                          height={1000}
                          className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
                            project.title === "Vanity Installation"
                              ? "object-contain p-5"
                              : "object-cover"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative overflow-hidden bg-zinc-100">
                      <div className="absolute left-4 top-4 z-10">
                        <span className="rounded-full bg-[#7C9A6D]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-sm backdrop-blur">
                          After
                        </span>
                      </div>

                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={project.after}
                          alt={`${project.title} after`}
                          width={1400}
                          height={1000}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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