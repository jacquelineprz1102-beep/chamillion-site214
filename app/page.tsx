"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Thoughtful kitchen upgrades designed for better flow, function, and everyday living.",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Beautiful bathroom renovations finished with precision, durability, and attention to detail.",
  },
  {
    title: "Flooring",
    description:
      "Professional flooring installation that brings a polished, finished look to your home.",
  },
  {
    title: "Wallpaper Installation",
    description:
      "Detailed wallpaper installation with clean alignment, crisp edges, and refined finishes.",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Quality painting and preparation for clean, even, long-lasting finishes.",
  },
];

const finishedProjects = [
  {
    title: "Kitchen Remodel",
    image: "/D9EDB019-0B72-4A52-AE14-843D5BF27DF1.jpeg",
  },
  {
    title: "Bathroom Remodel",
    image: "/Bathroom.jpg",
  },
  {
    title: "Living Room Remodel",
    image: "/IMG_6693.jpeg",
  },
  {
    title: "Custom Vanity Installation",
    image: "/after-vanity.jpg",
  },
  {
    title: "Wallpaper Installation",
    image: "/Vanity.PNG",
  },
];

const featuredComparison = {
  title: "Exterior Painting Transformation",
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
    const subject = `Estimate Request - ${
      form.service || "Website Inquiry"
    }`;

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
    <div className="min-h-screen bg-[var(--warm-white)] text-[var(--black)]">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#c49a3a]/30 bg-[#0b2a1e]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center">
            <Image
              src="/icon.png"
              alt="Chamillion Remodeling"
              width={220}
              height={90}
              className="h-16 w-auto object-contain sm:h-20"
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a className="transition hover:text-[#c49a3a]" href="#">
              Home
            </a>
            <a
              className="transition hover:text-[#c49a3a]"
              href="#services"
            >
              Services
            </a>
            <a className="transition hover:text-[#c49a3a]" href="#work">
              Our Work
            </a>
            <a className="transition hover:text-[#c49a3a]" href="#about">
              About Us
            </a>
            <a
              className="transition hover:text-[#c49a3a]"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsEstimateOpen(true)}
            className="border border-[#c49a3a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f4c65d] transition hover:bg-[#c49a3a] hover:text-[#111111] sm:px-5 sm:py-3"
          >
            Request Estimate
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-[680px] overflow-hidden bg-[#0b2a1e] text-white">
          <Image
            src="/D9EDB019-0B72-4A52-AE14-843D5BF27DF1.jpeg"
            alt="Chamillion Remodeling completed kitchen project"
            fill
            className="object-cover opacity-50"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061b13]/95 via-[#0b2a1e]/75 to-black/20" />

          <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#d6aa48]">
                <span className="h-px w-10 bg-[#c49a3a]" />
                Dallas–Fort Worth
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Quality
                <br />
                Remodeling.
                <br />
                <span className="text-[#c49a3a]">Built To Last.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
                High-quality remodeling and interior finishes built with
                integrity, precision, and care.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsEstimateOpen(true)}
                  className="bg-[#c49a3a] px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#111111] transition hover:bg-[#dab45b]"
                >
                  Request an Estimate →
                </button>

                <a
                  href="#work"
                  className="border border-[#c49a3a] bg-[#0b2a1e]/60 px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#123b2a]"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-[#c49a3a]/25 bg-[#071d15] text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#c49a3a]/20 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            {[
              ["13+ Years Experience", "Skilled. Reliable. Trusted."],
              ["Quality Craftsmanship", "Attention to detail in every step."],
              ["Fully Insured", "Your home is in good hands."],
            ].map(([title, text]) => (
              <div key={title} className="px-6 py-7 text-center">
                <div className="text-sm font-bold uppercase tracking-wide text-[#d6aa48]">
                  {title}
                </div>
                <div className="mt-2 text-sm text-white/65">{text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="bg-[#123b2a] px-4 py-20 text-white sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6aa48]">
                Our Services
              </p>

              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Complete Remodeling.
                <span className="text-[#d6aa48]">
                  {" "}
                  Exceptional Results.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group border border-[#c49a3a]/45 bg-[#0b2a1e] p-6 transition hover:-translate-y-1 hover:border-[#c49a3a]"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#c49a3a] text-lg font-bold text-[#d6aa48]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-bold uppercase leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/65">
                    {service.description}
                  </p>

                  <div className="mt-6 text-xs font-bold uppercase tracking-wide text-[#d6aa48]">
                    Learn More →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <section
          id="work"
          className="bg-[#071d15] px-4 py-20 text-white sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.6fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6aa48]">
                See The Difference
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Thoughtful Improvements.
                <span className="block text-[#c49a3a]">
                  Transformative Results.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-white/65">
                From small updates to complete renovations, we take pride in
                the details that make the biggest impact.
              </p>
            </div>

            <div className="border border-[#c49a3a] bg-[#0b2a1e] p-2">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={featuredComparison.before}
                    alt="Before remodel"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={featuredComparison.after}
                    alt="After remodel"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                }
                className="aspect-[4/5] w-full sm:aspect-[16/9]"
              />

              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-sm font-semibold">
                  {featuredComparison.title}
                </span>

                <button
                  onClick={() => setIsEstimateOpen(true)}
                  className="text-xs font-bold uppercase tracking-wide text-[#d6aa48]"
                >
                  Request Estimate →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="bg-[var(--warm-white)] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#92722e]">
                Our Work
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-[#111111] sm:text-5xl">
                Finished Projects
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {finishedProjects.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="group overflow-hidden bg-[#0b2a1e]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="border-t border-[#c49a3a]/50 px-5 py-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#d6aa48]">
                      Chamillion Remodeling
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="bg-[#123b2a] px-4 py-20 text-white sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6aa48]">
                About Chamillion Remodeling
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Built on craftsmanship.
                <span className="block text-[#d6aa48]">
                  Defined by the details.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                For more than 13 years, Chamillion Remodeling has helped
                homeowners transform their spaces through quality
                craftsmanship, careful preparation, and attention to detail.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-white/65">
                From complete renovations to painting and specialty finishes,
                our goal is simple: deliver work we are proud to put our name
                on and that you will be proud to have in your home.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border border-[#c49a3a]">
              <Image
                src="/IMG_6691.jpeg"
                alt="Completed Chamillion Remodeling project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-[#071d15] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#d6aa48]">
              Why Choose Chamillion Remodeling?
            </p>

            <div className="mt-10 grid gap-px overflow-hidden border border-[#c49a3a]/30 bg-[#c49a3a]/30 md:grid-cols-4">
              {[
                [
                  "Experience You Can Count On",
                  "13+ years of hands-on remodeling experience with attention to detail from start to finish.",
                ],
                [
                  "Quality Craftsmanship",
                  "We take pride in proper preparation, precise installation, and refined finishes.",
                ],
                [
                  "Clear Communication",
                  "We keep homeowners informed throughout the project, from estimate through completion.",
                ],
                [
                  "Respect For Your Home",
                  "We protect surrounding areas and maintain an organized, professional worksite.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="bg-[#0b2a1e] p-7">
                  <h3 className="text-lg font-bold uppercase text-[#d6aa48]">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/65">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-[#c49a3a]/50 bg-black/25 p-6 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">
                  Don&apos;t just take our word for it.
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#d6aa48]">
                  See our work.
                </p>
              </div>

              <a
                href="#work"
                className="mt-5 inline-block border border-[#c49a3a] px-6 py-3 text-sm font-bold uppercase text-[#d6aa48] transition hover:bg-[#c49a3a] hover:text-black sm:mt-0"
              >
                View Our Projects →
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="contact"
          className="bg-[var(--warm-white)] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-5xl border border-[#c49a3a] bg-[#123b2a] px-6 py-14 text-center text-white sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6aa48]">
              Start Your Project
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Ready To Transform
              <span className="text-[#d6aa48]"> Your Home?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
              Tell us about your project and schedule an on-site estimate with
              Chamillion Remodeling.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsEstimateOpen(true)}
                className="bg-[#c49a3a] px-8 py-4 text-sm font-bold uppercase text-black transition hover:bg-[#dab45b]"
              >
                Request an Estimate →
              </button>

              <a
                href="tel:2142889423"
                className="border border-[#c49a3a] px-8 py-4 text-sm font-bold uppercase text-white"
              >
                Call (214) 288-9423
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#c49a3a]/30 bg-[#050c09] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/icon.png"
              alt="Chamillion Remodeling"
              width={230}
              height={100}
              className="h-auto w-56 object-contain"
            />

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
              Quality craftsmanship, clear communication, and refined finishes
              you can trust.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#d6aa48]">
              Quick Links
            </h3>

            <div className="mt-4 grid gap-2 text-sm text-white/65">
              <a href="#">Home</a>
              <a href="#services">Services</a>
              <a href="#work">Our Work</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#d6aa48]">
              Contact
            </h3>

            <div className="mt-4 space-y-2 text-sm text-white/65">
              <p>(214) 288-9423</p>
              <p>chamillionremodeling214@outlook.com</p>
              <p>chamillionremodeling.com</p>
              <p>Serving Dallas–Fort Worth & surrounding areas</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">
          © {new Date().getFullYear()} Chamillion Remodeling. All Rights
          Reserved.
        </div>
      </footer>

      {/* MOBILE CALL BUTTON */}
      <a
        href="tel:2142889423"
        className="fixed bottom-5 right-5 z-40 bg-[#c49a3a] px-6 py-3 text-sm font-bold text-black shadow-xl md:hidden"
      >
        Call Now
      </a>

      {/* ESTIMATE MODAL */}
      {isEstimateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#c49a3a] bg-[#f7f5ef] shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[#c49a3a]/30 bg-[#123b2a] px-5 py-5 text-white sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6aa48]">
                  Request an Estimate
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Tell us about your project
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsEstimateOpen(false)}
                className="border border-[#c49a3a] px-3 py-1 text-sm text-white"
              >
                Close
              </button>
            </div>

            <div className="px-5 py-6 sm:px-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>

                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c49a3a]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="Best number to reach you"
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c49a3a]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Best Time for a Call
                  </label>

                  <input
                    type="text"
                    value={form.callbackTime}
                    onChange={(e) =>
                      updateForm("callbackTime", e.target.value)
                    }
                    placeholder="Example: Weekdays after 5 PM"
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c49a3a]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Service Needed
                  </label>

                  <select
                    value={form.service}
                    onChange={(e) => updateForm("service", e.target.value)}
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c49a3a]"
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
                  <label className="mb-2 block text-sm font-medium">
                    Brief Project Description
                  </label>

                  <textarea
                    value={form.details}
                    onChange={(e) => updateForm("details", e.target.value)}
                    placeholder="Tell us what you're wanting done"
                    rows={5}
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c49a3a]"
                  />
                </div>
              </div>

              <div className="mt-6 border border-[#c49a3a]/30 bg-white p-4 text-sm leading-6 text-zinc-600">
                When you continue, your email app will open with this
                information filled in and ready to send.
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center bg-[#c49a3a] px-6 py-3 text-sm font-bold uppercase text-black"
                >
                  Continue to Email
                </a>

                <button
                  type="button"
                  onClick={() => setIsEstimateOpen(false)}
                  className="inline-flex items-center justify-center border border-[#123b2a] px-6 py-3 text-sm font-bold uppercase text-[#123b2a]"
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