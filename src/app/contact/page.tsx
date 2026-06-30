"use client";

import React, { useState } from "react";
import { Sparkles, Mail, Phone, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      business,
      industry,
      website,
      phone,
      email,
      budget,
      timeline,
      message,
    };

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "http://localhost:5678/webhook-test/new-lead";
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      alert("Lead submitted successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-32 space-y-16">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Mail className="w-4 h-4 text-electric-cyan" />
          <span className="text-xs font-space font-medium tracking-wider text-gray uppercase">GET IN TOUCH</span>
        </div>
        <h1 className="font-space font-extrabold text-4xl md:text-6xl text-white leading-tight">
          Let&apos;s Build Your <span className="gradient-text-blue-cyan">Next Platform.</span>
        </h1>
        <p className="text-gray text-lg leading-relaxed">
          Reach out today to discuss custom storefront layout setups, n8n automations, or maps configurations.
        </p>
      </section>

      {/* Grid: Details & Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card p-8 border-white/5 space-y-6">
            <h3 className="font-space text-lg font-bold text-white">Contact Information</h3>
            <div className="space-y-4 text-xs text-gray">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-4 h-4 text-electric-cyan" />
                </div>
                <span>kamathambhuvanesh@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-4 h-4 text-electric-cyan" />
                </div>
                <span>+91 7382112779</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-4 h-4 text-electric-cyan" />
                </div>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 border-white/10 bg-slate-900/10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 glass-input text-sm text-white"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3.5 glass-input text-sm text-white"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">BUSINESS NAME</label>
                    <input
                      type="text"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="Acme Inc"
                      className="w-full px-4 py-3.5 glass-input text-sm text-white"
                    />
                  </div>
                  {/* Industry */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">INDUSTRY</label>
                    <input
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. E-commerce, SaaS, Healthcare"
                      className="w-full px-4 py-3.5 glass-input text-sm text-white"
                    />
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">WEBSITE</label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3.5 glass-input text-sm text-white"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">PHONE</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 glass-input text-sm text-white"
                    />
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">BUDGET</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3.5 bg-slate-950 text-white border border-white/10 rounded-lg text-sm focus:outline-none focus:border-electric-cyan"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="Less than ₹10,000">Less than ₹10,000</option>
                      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                    </select>
                  </div>
                  {/* Timeline */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">TIMELINE</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3.5 bg-slate-950 text-white border border-white/10 rounded-lg text-sm focus:outline-none focus:border-electric-cyan"
                    >
                      <option value="">Select Timeline</option>
                      <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                      <option value="1-2 Months">1-2 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="6+ Months / Flexible">6+ Months / Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] font-space text-gray uppercase block tracking-wider">MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your objectives, target timeline, or pain points..."
                    className="w-full px-4 py-3.5 glass-input text-sm text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-electric-cyan to-primary-blue text-black font-space text-xs font-bold rounded-lg hover:opacity-90 transition-opacity uppercase tracking-widest flex items-center justify-center space-x-2"
                >
                  <span>🚀 Get Free Consultation</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                <h3 className="font-space text-lg font-bold text-white uppercase tracking-wider">
                  Inquiry Dispatched
                </h3>
                <p className="text-xs text-gray max-w-md mx-auto leading-relaxed">
                  Thank you, {name}. Your details have been qualified and logged to our CRM. A senior engineer will review your inquiry and connect via email.
                </p>
              </div>
            )}
          </div>
        </div>

      </section>

    </div>
  );
}
