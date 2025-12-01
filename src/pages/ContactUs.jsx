import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Building2,
  Users,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { contactFAQ } from "../components/Home/faqItems";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

// ---------- Modernized Contact Cards Section ----------
function ContactSection() {
  const contactCards = [
    {
      icon: Building2,
      title: "Headquarters",
      subtitle: "Magic Bus India Foundation",
      details: [
        {
          text: "3rd Floor, Reliable Plaza, Thane Belapur Road, Airoli, Navi Mumbai – 400708",
        },
      ],
      color: "bg-brand-yellow/10 border-brand-yellow/30",
    },
    {
      icon: Users,
      title: "CSR & Employee Volunteering",
      subtitle: "Partnership Opportunities",
      details: [
        { icon: Mail, text: "csr@magicbusindia.org", href: "mailto:csr@magicbusindia.org" },
        { icon: Phone, text: "8976720830", href: "tel:8976720830" },
        { icon: MessageCircle, text: "WhatsApp: 8976720830", href: "https://wa.me/918976720830" },
      ],
      color: "bg-brand-green/10 border-brand-green/30",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      subtitle: "Join Our Team",
      details: [
        { icon: Mail, text: "careers@magicbusindia.org", href: "mailto:careers@magicbusindia.org" },
      ],
      color: "bg-brand-blue/10 border-brand-blue/30",
    },
    {
      icon: HelpCircle,
      title: "General Inquiries",
      subtitle: "We're Here to Help",
      details: [
        { icon: Mail, text: "info@magicbusindia.org", href: "mailto:info@magicbusindia.org" },
        { icon: Phone, text: "022 62434848", href: "tel:02262434848" },
      ],
      color: "bg-brand-red/10 border-brand-red/30",
    },
  ];

  return (
    <section id="contact-details" className="py-20 bg-gradient-to-b from-white to-brand-yellow/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            We're here to answer your questions and explore how we can work together to create lasting change.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`${card.color} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <card.icon className="w-6 h-6 text-ink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {card.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {detail.icon && (
                      <detail.icon className="w-4 h-4 text-ink/60 mt-1 flex-shrink-0" />
                    )}
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-ink/80 hover:text-brand-red font-medium transition-colors"
                      >
                        {detail.text}
                      </a>
                    ) : (
                      <p className="text-ink/80 leading-relaxed">{detail.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-brand-yellow/20">
          <div className="grid lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-brand-yellow/20 to-brand-red/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-2">
                    Visit Us
                  </h3>
                  <p className="text-ink/70">
                    Located in the heart of Navi Mumbai
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-ink/80">
                <div>
                  <p className="font-semibold text-ink mb-1">Address</p>
                  <p className="text-sm leading-relaxed">
                    3rd Floor, Reliable Plaza<br />
                    Thane Belapur Road, Airoli<br />
                    Navi Mumbai – 400708
                  </p>
                </div>

                <div className="pt-4 border-t border-ink/10">
                  <p className="text-sm text-ink/70 mb-3">
                    Office Hours: Monday - Friday, 9:00 AM - 6:00 PM
                  </p>
                  <a
                    href="https://www.google.com/maps?q=Magic+Bus+India+Foundation+Reliable+Plaza+Airoli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-red hover:text-brand-yellow font-medium text-sm transition-colors"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 h-[400px] lg:h-auto">
              <iframe
                title="Magic Bus India Foundation HQ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.89924623094!2d73.00182797448515!3d19.159635382062607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf8c31dca0b3%3A0x9c7a4414f4533c19!2sReliable%20Plaza!5e0!3m2!1sen!2sin!4v1706709912234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-brand-red to-brand-yellow rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Make an Impact?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Whether you're interested in partnerships, volunteering, or simply learning more about our work — we'd love to hear from you.
          </p>
          <a
            href="mailto:info@magicbusindia.org"
            className="px-8 py-3 bg-white text-brand-red font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-md"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ContactUs() {
  return (
    <Layout>
      <main className="bg-white text-ink font-sans">
        {/* ===== HERO (same as Donate) ===== */}
        <section className="relative h-screen w-full overflow-hidden">
          <img
            src="src/assets/images/contact-hero.jpg"
            alt="Contact Us Hero"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="max-w-3xl text-white"
            >
              <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
                Get in touch
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
                Let’s connect.
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90">
                Partnerships, volunteering, careers or general enquiries — we’re here to help. Reach out and our team will get back to you.
              </p>
              <div className="mt-6">
                <motion.a
                  href="#contact-details"
                  className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View contact details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-brand-red"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== BREADCRUMB ===== */}
        <section className="py-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-sm text-gray-500">
            Home / Contact Us
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <ContactSection />

        {/* ===== FAQ ===== */}
        <FAQSection
          title="Need More Information?"
          subtitle="Get quick answers to common questions about donations, volunteering, and partnerships."
          items={contactFAQ}
        />
      </main>
    </Layout>
  );
}
