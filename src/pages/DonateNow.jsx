// src/pages/DonateNow.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, X as XIcon } from "lucide-react";
import Layout from "../components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function DonateNow() {
  // === CONFIGURATION ===
  const donationConfig = {
    "one-time": { amounts: [3000, 6000, 12000, 18000], default: 3000, min: 300 },
    monthly: { amounts: [800, 1000, 1500, 2000], default: 800, min: 600 },
  };

  // state
  const [frequency, setFrequency] = useState("one-time");
  const [citizenship, setCitizenship] = useState("indian");
  const currentConfig = donationConfig[frequency];

  const [selectedAmount, setSelectedAmount] = useState(currentConfig.default);
  const [customAmount, setCustomAmount] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    pan: "",
    mobile: "",
    dob: "",
    email: "",
    referral: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // helpers
  const effectiveAmount = () => {
    const custom = Number((customAmount || "").toString().replace(/[^\d]/g, ""));
    if (customAmount !== "") return custom;
    return Number(selectedAmount || 0);
  };

  const handleFrequencyChange = (newFreq) => {
    setFrequency(newFreq);
    setSelectedAmount(donationConfig[newFreq].default);
    setCustomAmount("");
    setErrors((e) => ({ ...e, amount: undefined }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleAmountClick = (val) => {
    setSelectedAmount(val);
    setCustomAmount("");
    setErrors((e) => ({ ...e, amount: undefined }));
  };

  const handleCustomAmountChange = (e) => {
    const v = e.target.value.replace(/[^\d]/g, "");
    setCustomAmount(v);
    setSelectedAmount(null);
    setErrors((er) => ({ ...er, amount: undefined }));
  };

  const validate = () => {
    const errs = {};
    const required = ["firstName", "lastName", "address", "city", "state", "postal", "pan", "mobile", "dob", "email"];
    required.forEach((k) => {
      if (!form[k]?.trim()) errs[k] = "Required";
    });

    const amt = effectiveAmount();
    if (!amt || amt < currentConfig.min) {
      errs.amount = `Minimum donation for ${frequency} is ₹ ${currentConfig.min}`;
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 700);
  };

  return (
    <Layout>
      <main className="bg-white text-ink font-sans min-h-screen">
        {/* ===== HERO ===== */}
        <section className="relative h-screen w-full overflow-hidden">
          <img
            src="/src/assets/images/donate-hero.jpg"
            alt="Smiling young girl - Donate"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(ev) => {
              ev.currentTarget.src = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1";
            }}
          />

          {/* ⬇️ Same tint as the carousel */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl text-white"
            >
              <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
                Be a changemaker
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
                Spark a bright future.
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90">
                Empower the future of India — support life skills education, education enhancement and livelihood
                skilling for children and youth. Your donation helps them break the cycle of poverty.
              </p>
              <div className="mt-6">
                <motion.a
                  href="#donation-form"
                  className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Donate Now <ArrowRight size={16} />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="bg-white px-4 py-3 rounded-md shadow-sm">
            <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
              Home / Donate Now
            </nav>
          </div>
        </div>

        {/* ===== MAIN: TWO COLUMN ===== */}
        <section className="py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 gap-8">
            {/* LEFT: CONTENT */}
            <motion.div
              className=""
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-black">
                Empower the Future of India with Magic Bus
              </h2>

              <div className="mt-5 text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Imagine a world where every young person has access to education and the opportunity to reach their
                  full potential. This is the world that Magic Bus is striving to create. With your support, we can make
                  this a reality.
                </p>

                <p>
                  Your contribution will help us give young people the tools they need to succeed. Through our
                  programmes, we empower young people with <strong>life skills education</strong>,{" "}
                  <strong>education enhancement</strong>, and <strong>livelihood skilling</strong> to equip them to
                  break out of poverty and build a better life for themselves and their families.
                </p>

                <p>
                  Every donation can make a difference in a young person's life. Donate today and help us create a more
                  just and equitable society for all.
                </p>

                {/* Legal / disclaimer */}
                <div className="mt-4 p-4 rounded-lg bg-yellow-50 border-l-4 border-brand-yellow/70">
                  <p className="text-sm text-brand-red font-semibold">
                    All donations to Magic Bus are eligible for <strong>50% tax exemption under Section 80G</strong> of
                    the Income Tax Act.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Magic Bus is a non-profit organisation registered as <em>Magic Bus India Foundation</em> under
                    Section 25 of the Companies Act 1956.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.aside
              id="donation-form"
              className="bg-brand-yellow/5 rounded-2xl p-5 md:p-6 lg:p-7 shadow-soft-lg border border-brand-yellow/20 lg:sticky lg:top-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {/* header strip */}
              <div className="bg-brand-yellow text-brand-black p-4 rounded-lg mb-5 text-center">
                <div className="text-sm md:text-base font-bold">50% Tax Exemption Under Section 80G*</div>
                <div className="text-xs text-gray-800 mt-1">*Only Applicable for Indian Citizens</div>
              </div>

              {/* frequency toggle */}
              <div className="mb-5">
                <div className="inline-flex w-full rounded-full bg-white border p-1 shadow-sm" role="tablist">
                  <button
                    type="button"
                    onClick={() => handleFrequencyChange("one-time")}
                    role="tab"
                    aria-selected={frequency === "one-time"}
                    className={`flex-1 px-4 py-2 rounded-full text-sm font-bold transition ${frequency === "one-time" ? "bg-brand-red text-white shadow" : "text-gray-700"
                      }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFrequencyChange("monthly")}
                    role="tab"
                    aria-selected={frequency === "monthly"}
                    className={`flex-1 px-4 py-2 rounded-full text-sm font-bold transition ${frequency === "monthly" ? "bg-brand-red text-white shadow" : "text-gray-700"
                      }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* citizenship */}
              <div className="mb-5 flex flex-col sm:flex-row gap-3 sm:items-center">
                <label className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="citizenship"
                    className="h-4 w-4 accent-brand-red"
                    checked={citizenship === "indian"}
                    onChange={() => setCitizenship("indian")}
                  />
                  <span>I am an Indian citizen</span>
                </label>
                <label className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="citizenship"
                    className="h-4 w-4 accent-brand-red"
                    checked={citizenship === "non-indian"}
                    onChange={() => setCitizenship("non-indian")}
                  />
                  <span>I am not an Indian citizen</span>
                </label>
              </div>

              {/* amounts */}
              <div className="mb-5">
                <div className="text-sm font-semibold mb-2">Choose an amount</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {currentConfig.amounts.map((amt) => {
                    const isSelected = selectedAmount === amt && customAmount === "";
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handleAmountClick(amt)}
                        className={`py-3 px-2 rounded-lg text-sm font-bold border flex items-center justify-center gap-2 transition
                        ${isSelected
                            ? "bg-brand-red text-white border-brand-red shadow"
                            : "bg-white text-gray-800 border-gray-200 hover:border-brand-red/50"
                          }`}
                        aria-pressed={isSelected}
                      >
                        <span>₹ {amt.toLocaleString()}</span>
                      </button>
                    );
                  })}
                </div>

                {/* custom amount */}
                <div className="mt-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder={`Min. ${currentConfig.min}`}
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className={`w-full pl-8 pr-3 py-3 rounded-lg border text-sm font-medium focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none ${customAmount !== "" ? "border-brand-yellow bg-yellow-50" : "border-gray-200"
                        }`}
                      aria-label="Custom amount"
                    />
                  </div>
                  {errors.amount && <p className="text-xs text-brand-red mt-1 font-medium">{errors.amount}</p>}
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Total to be charged:</strong> ₹ {effectiveAmount().toLocaleString()}
                  </p>
                </div>
              </div>

              {/* form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field
                    name="firstName"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                  />
                  <Field
                    name="lastName"
                    placeholder="Last Name *"
                    value={form.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                  />

                  <TextArea
                    name="address"
                    placeholder="Address *"
                    rows={2}
                    value={form.address}
                    onChange={handleChange}
                    error={errors.address}
                    className="sm:col-span-2"
                  />

                  <Field name="city" placeholder="City *" value={form.city} onChange={handleChange} error={errors.city} />
                  <Field name="state" placeholder="State *" value={form.state} onChange={handleChange} error={errors.state} />
                  <Field
                    name="postal"
                    placeholder="Postal code *"
                    value={form.postal}
                    onChange={handleChange}
                    error={errors.postal}
                  />
                  <Field name="pan" placeholder="PAN NUMBER *" value={form.pan} onChange={handleChange} error={errors.pan} />
                  <Field
                    name="mobile"
                    placeholder="Mobile *"
                    value={form.mobile}
                    onChange={handleChange}
                    error={errors.mobile}
                  />
                  <Field
                    name="dob"
                    type="date"
                    placeholder="DATE OF BIRTH *"
                    value={form.dob}
                    onChange={handleChange}
                    error={errors.dob}
                  />
                  <Field
                    name="email"
                    placeholder="Email Id *"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    className="sm:col-span-2"
                  />

                  <div className="sm:col-span-2">
                    <select
                      name="referral"
                      value={form.referral}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border bg-white border-gray-200 text-sm"
                      aria-label="How did you know about us?"
                    >
                      <option value="">How did you know about us?</option>
                      <option>Social Media</option>
                      <option>Search</option>
                      <option>Friend / Family</option>
                      <option>Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-red text-white text-base font-bold shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={!submitting ? { scale: 1.02 } : {}}
                  whileTap={!submitting ? { scale: 0.98 } : {}}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {submitting ? "Processing…" : "DONATE NOW"} <ArrowRight size={16} />
                  </span>
                  {!submitting && (
                    <motion.div
                      className="absolute inset-0 bg-red-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              </form>
            </motion.aside>
          </div>
        </section>

        {/* ===== SUCCESS TOAST ===== */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed right-6 bottom-6 z-50 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 border"
            role="status"
          >
            <CheckCircle className="text-brand-green w-6 h-6" />
            <div>
              <div className="font-semibold">Thank you!</div>
              <div className="text-sm text-gray-600">
                Your donation of ₹{effectiveAmount().toLocaleString()} is being processed.
              </div>
            </div>
            <button onClick={() => setSuccess(false)} className="ml-2 p-2 rounded-md hover:bg-gray-100">
              <XIcon size={16} />
            </button>
          </motion.div>
        )}
      </main>
    </Layout>
  );
}

/* ---------- Small field components ---------- */
function Field({ name, value, onChange, placeholder, error, type = "text", className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="sr-only">{placeholder}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-md border bg-white text-sm ${error ? "border-brand-red" : "border-gray-200"
          }`}
      />
      {error && <span className="text-xs text-brand-red mt-1 block">Required</span>}
    </label>
  );
}

function TextArea({ name, value, onChange, placeholder, rows = 3, error, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="sr-only">{placeholder}</span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-md border bg-white text-sm ${error ? "border-brand-red" : "border-gray-200"
          }`}
      />
      {error && <span className="text-xs text-brand-red mt-1 block">Required</span>}
    </label>
  );
}
