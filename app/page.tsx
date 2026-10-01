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
      "Custom kitchen renovations designed around function, craftsmanship, and refined finishes.",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Beautiful bathroom transformations completed with precision and attention to every detail.",
  },
  {
    title: "Custom Cabinets",
    description:
      "Custom cabinetry and built-ins designed to elevate your space while maximizing functionality.",
  },
  {
    title: "Wallpaper Installation",
    description:
      "Professional wallpaper installation with clean alignment, crisp edges, and polished finishes.",
  },
  {
    title: "Flooring",
    description:
      "Professional flooring installation that gives your space a clean, finished appearance.",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Careful preparation and quality painting for smooth, durable, professional results.",
  },
  {
    title: "Complete Home Renovations",
    description:
      "Complete renovations that bring multiple spaces together with craftsmanship and consistency.",
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

    return `mailto:info@chamillionremodeling.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  return (
    <div className="min-h-screen bg-[#050806] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#c99a3d]/30 bg-[#050806]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          <a href="#" className="flex items-center">
            <Image
              src="/Luxurious Chameleon Remodeling Logo.jpg"
              alt="Chamillion Remodeling"
              width={300}
              height={130}
              className="h-16 w-auto object-contain sm:h-20"
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.15em] md:flex">
            <a className="transition hover:text-[#e2bd68]" href="#">
              Home
            </a>

            <a
              className="transition hover:text-[#e2bd68]"
              href="#services"
            >
              Services
            </a>

            <a className="transition hover:text-[#e2bd68]" href="#work">
              Our Work
            </a>

            <a className="transition hover:text-[#e2bd68]" href="#about">
              About
            </a>

            <a className="transition hover:text-[#e2bd68]" href="#contact">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsEstimateOpen(true)}
            className="gold-outline-button px-4 py-3 text-xs font-bold uppercase tracking-wider sm:px-5"
          >
            Request Estimate
          </button>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="relative min-h-[720px] overflow-hidden bg-[#050806]">

          <Image
            src="/D9EDB019-0B72-4A52-AE14-843D5BF27DF1.jpeg"
            alt="Chamillion Remodeling completed kitchen project"
            fill
            className="object-cover opacity-35"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#020403] via-[#06150f]/95 to-[#06150f]/50" />

          {/* subtle architectural grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,154,61,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(201,154,61,.09) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">

            <div className="max-w-4xl">

              <div className="mb-7 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.32em] text-[#e2bd68]">
                <span className="h-px w-12 bg-[#c99a3d]" />
                Residential / Commercial
              </div>

              <h1 className="luxury-heading text-5xl font-semibold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
                Transforming
                <br />
                <span className="gold-text">Spaces.</span>
                <br />
                Building Dreams.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                Quality remodeling and refined finishes backed by craftsmanship,
                experience, and attention to detail.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-[#e2bd68]">
                <span className="text-xl">◇</span>
                Fully Insured For Your Peace Of Mind
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button
                  type="button"
                  onClick={() => setIsEstimateOpen(true)}
                  className="gold-button px-8 py-4 text-sm font-bold uppercase tracking-wide"
                >
                  Request An Estimate →
                </button>

                <a
                  href="#work"
                  className="gold-outline-button px-8 py-4 text-center text-sm font-bold uppercase tracking-wide"
                >
                  View Our Work
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* GOLD DIVIDER */}
        <div className="gold-line" />

        {/* TRUST BAR */}
        <section className="bg-[#071d15]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#c99a3d]/20 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">

            {[
              ["13+ Years", "Hands-On Experience"],
              ["Fully Insured", "For Your Peace Of Mind"],
              ["Dallas–Fort Worth", "Residential & Commercial"],
            ].map(([title, text]) => (
              <div key={title} className="px-6 py-8 text-center">

                <div className="luxury-heading text-xl text-[#e2bd68]">
                  {title}
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/50">
                  {text}
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="blueprint-bg px-4 py-24 sm:px-6 lg:px-8"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd68]">
                Our Services
              </p>

              <h2 className="luxury-heading mt-5 text-4xl sm:text-6xl">
                Craftsmanship For
                <span className="gold-text"> Every Space.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/60">
                From individual upgrades to complete renovations, every project
                receives the same attention to craftsmanship and detail.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="luxury-card group p-7 transition duration-300 hover:-translate-y-1 hover:border-[#e2bd68]"
                >

                  <div className="mb-6 text-xs font-bold tracking-[0.2em] text-[#c99a3d]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="luxury-heading text-2xl text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsEstimateOpen(true)}
                    className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#e2bd68]"
                  >
                    Request Estimate →
                  </button>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section
          id="work"
          className="bg-[#050806] px-4 py-24 sm:px-6 lg:px-8"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.5fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd68]">
                See The Transformation
              </p>

              <h2 className="luxury-heading mt-5 text-4xl leading-tight sm:text-6xl">
                The Difference
                <span className="gold-text block">Is In The Details.</span>
              </h2>

              <p className="mt-7 max-w-md leading-8 text-white/60">
                Drag the slider to see how thoughtful preparation,
                craftsmanship, and finishing details transform a space.
              </p>

            </div>

            <div className="border border-[#c99a3d]/60 bg-[#071d15] p-2">

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

              <div className="flex items-center justify-between px-4 py-5">

                <span className="luxury-heading text-lg">
                  {featuredComparison.title}
                </span>

                <button
                  onClick={() => setIsEstimateOpen(true)}
                  className="text-xs font-bold uppercase tracking-wide text-[#e2bd68]"
                >
                  Request Estimate →
                </button>

              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="bg-[#071d15] px-4 py-24 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd68]">
                Our Work
              </p>

              <h2 className="luxury-heading mt-5 text-4xl sm:text-6xl">
                See The Quality
                <span className="gold-text"> Behind Our Work.</span>
              </h2>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {finishedProjects.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="group overflow-hidden border border-[#c99a3d]/25 bg-[#050806]"
                >

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  </div>

                  <div className="border-t border-[#c99a3d]/30 px-6 py-5">

                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#c99a3d]">
                      Chamillion Remodeling
                    </p>

                    <h3 className="luxury-heading mt-2 text-xl">
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
          className="blueprint-bg px-4 py-24 sm:px-6 lg:px-8"
        >

          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd68]">
                About Chamillion Remodeling
              </p>

              <h2 className="luxury-heading mt-5 text-4xl leading-tight sm:text-6xl">
                Integrity.
                <br />
                Quality Craftsmanship.
                <span className="gold-text block">Organization.</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
                For more than 13 years, Chamillion Remodeling has helped
                homeowners transform their spaces through quality
                craftsmanship, careful preparation, and attention to detail.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-white/55">
                From complete renovations to painting and specialty finishes,
                our goal is simple: deliver work we are proud to put our name
                on and that you will be proud to have in your home.
              </p>

              <div className="mt-8 border-l-2 border-[#c99a3d] pl-5">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e2bd68]">
                  Fully Insured
                </p>

                <p className="mt-2 text-sm text-white/55">
                  Professional protection for your peace of mind.
                </p>

              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border border-[#c99a3d]">

              <Image
                src="/IMG_6691.jpeg"
                alt="Completed Chamillion Remodeling project"
                fill
                className="object-cover"
              />

            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="bg-[#050806] px-4 py-24 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd68]">
                The Chamillion Standard
              </p>

              <h2 className="luxury-heading mt-5 text-4xl sm:text-5xl">
                Why Choose Chamillion Remodeling?
              </h2>

            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-[#c99a3d]/25 bg-[#c99a3d]/25 md:grid-cols-4">

              {[
                [
                  "13+ Years Experience",
                  "Hands-on remodeling experience with attention to detail from start to finish.",
                ],
                [
                  "Quality Craftsmanship",
                  "Proper preparation, precise installation, and refined finishes.",
                ],
                [
                  "Clear Communication",
                  "We keep you informed from the initial estimate through project completion.",
                ],
                [
                  "Respect For Your Property",
                  "We protect surrounding areas and maintain an organized, professional worksite.",
                ],
              ].map(([title, text]) => (

                <div key={title} className="bg-[#071d15] p-8">

                  <h3 className="luxury-heading text-xl text-[#e2bd68]">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {text}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="blueprint-bg px-4 py-24 sm:px-6 lg:px-8"
        >

          <div className="mx-auto max-w-5xl border border-[#c99a3d]/60 bg-[#050806]/90 px-6 py-16 text-center sm:px-12">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd68]">
              Start Your Project
            </p>

            <h2 className="luxury-heading mt-5 text-4xl sm:text-6xl">
              Ready To Transform
              <span className="gold-text"> Your Space?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-white/60">
              Tell us about your project and schedule an on-site estimate with
              Chamillion Remodeling.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <button
                type="button"
                onClick={() => setIsEstimateOpen(true)}
                className="gold-button px-8 py-4 text-sm font-bold uppercase"
              >
                Request An Estimate →
              </button>

              <a
                href="tel:2142889423"
                className="gold-outline-button px-8 py-4 text-sm font-bold uppercase"
              >
                Call (214) 288-9423
              </a>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#c99a3d]/25 bg-[#020403] px-4 py-14 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

          <div>

            <Image
              src="/Luxurious Chameleon Remodeling Logo.jpg"
              alt="Chamillion Remodeling"
              width={350}
              height={150}
              className="h-auto w-64 object-contain"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Transforming spaces through integrity, quality craftsmanship,
              and organization.
            </p>

          </div>

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2bd68]">
              Explore
            </h3>

            <div className="mt-5 grid gap-3 text-sm text-white/55">
              <a href="#">Home</a>
              <a href="#services">Services</a>
              <a href="#work">Our Work</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>

          </div>

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2bd68]">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/55">
              <p>(214) 288-9423</p>
              <p>info@chamillionremodeling.com</p>
              <p>chamillionremodeling.com</p>
              <p>Serving Dallas–Fort Worth & surrounding areas</p>
              <p className="pt-2 font-semibold text-[#e2bd68]">
                Fully Insured
              </p>
            </div>

          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/30">
          © {new Date().getFullYear()} Chamillion Remodeling. All Rights Reserved.
        </div>

      </footer>

      {/* MOBILE CALL BUTTON */}
      <a
        href="tel:2142889423"
        className="gold-button fixed bottom-5 right-5 z-40 px-6 py-3 text-sm font-bold md:hidden"
      >
        Call Now
      </a>

      {/* ESTIMATE MODAL */}
      {isEstimateOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#c99a3d] bg-[#f5f1e7] text-[#111111] shadow-2xl">

            <div className="flex items-start justify-between gap-4 border-b border-[#c99a3d]/30 bg-[#071d15] px-5 py-5 text-white sm:px-8">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2bd68]">
                  Request An Estimate
                </p>

                <h3 className="luxury-heading mt-2 text-3xl">
                  Tell us about your project.
                </h3>

              </div>

              <button
                type="button"
                onClick={() => setIsEstimateOpen(false)}
                className="border border-[#c99a3d] px-3 py-1 text-sm"
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
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c99a3d]"
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
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c99a3d]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Best Time For A Call
                  </label>

                  <input
                    type="text"
                    value={form.callbackTime}
                    onChange={(e) =>
                      updateForm("callbackTime", e.target.value)
                    }
                    placeholder="Example: Weekdays after 5 PM"
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c99a3d]"
                  />
                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Service Needed
                  </label>

                  <select
                    value={form.service}
                    onChange={(e) => updateForm("service", e.target.value)}
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c99a3d]"
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
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c99a3d]"
                  />

                </div>
              </div>

              <div className="mt-6 border border-[#c99a3d]/30 bg-white p-4 text-sm leading-6 text-zinc-600">
                When you continue, your email app will open with this
                information filled in and ready to send.
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                <a
                  href={emailHref}
                  className="gold-button inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase"
                >
                  Continue To Email
                </a>

                <button
                  type="button"
                  onClick={() => setIsEstimateOpen(false)}
                  className="inline-flex items-center justify-center border border-[#071d15] px-6 py-3 text-sm font-bold uppercase text-[#071d15]"
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
