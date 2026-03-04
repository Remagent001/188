"use client";

import { useState } from "react";

type Role = "stylist" | "frontdesk";

interface CareersSectionProps {
  accessKey: string;
  siteLabel?: string;
}

export function CareersSection({ accessKey, siteLabel }: CareersSectionProps) {
  const [activeRole, setActiveRole] = useState<Role>("stylist");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stylistForm, setStylistForm] = useState({
    name: "", email: "", phone: "", licensed: "", yearsExp: "", experience: "",
  });
  const [frontDeskForm, setFrontDeskForm] = useState({
    name: "", email: "", phone: "", salonExp: "", experience: "",
  });

  async function handleStylistSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Stylist/Barber Application${siteLabel ? ` — ${siteLabel}` : ""}`,
          from_name: stylistForm.name,
          name: stylistForm.name,
          email: stylistForm.email,
          phone: stylistForm.phone,
          licensed: stylistForm.licensed,
          years_of_experience: stylistForm.yearsExp,
          experience: stylistForm.experience,
          role: "Hairstylist / Barber",
          location: siteLabel ?? "",
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  async function handleFrontDeskSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Front Desk Application${siteLabel ? ` — ${siteLabel}` : ""}`,
          from_name: frontDeskForm.name,
          name: frontDeskForm.name,
          email: frontDeskForm.email,
          phone: frontDeskForm.phone,
          salon_experience: frontDeskForm.salonExp,
          experience: frontDeskForm.experience,
          role: "Front Desk (DOFI)",
          location: siteLabel ?? "",
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Join the Team</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Careers at 18|8</h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
          <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto">
            Want to walk into a positive and exciting work environment, help people be their best,
            and build a rewarding career? We're looking for fashion-forward, energetic, charismatic
            and professional individuals to join our team.
          </p>
        </div>

        {/* Role tabs */}
        <div className="flex border-b border-white/10 mb-10">
          <button
            onClick={() => { setActiveRole("stylist"); setSubmitted(false); }}
            className={`px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors border-b-2 -mb-px ${
              activeRole === "stylist"
                ? "border-[#c9a96e] text-[#c9a96e]"
                : "border-transparent text-white/40 hover:text-white"
            }`}
          >
            Hairstylist & Barber
          </button>
          <button
            onClick={() => { setActiveRole("frontdesk"); setSubmitted(false); }}
            className={`px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors border-b-2 -mb-px ${
              activeRole === "frontdesk"
                ? "border-[#c9a96e] text-[#c9a96e]"
                : "border-transparent text-white/40 hover:text-white"
            }`}
          >
            Front Desk (DOFI)
          </button>
        </div>

        {submitted ? (
          <div className="bg-[#c9a96e]/10 border border-[#c9a96e]/30 p-8 text-center text-[#c9a96e]">
            <p className="font-semibold text-lg mb-2">Application Received!</p>
            <p className="text-sm">Thank you for your interest in joining 18|8. We'll be in touch soon.</p>
          </div>
        ) : (
          <>
            {activeRole === "stylist" && (
              <div className="space-y-8">
                <div className="bg-[#111] border border-white/5 p-6">
                  <h3 className="text-white font-semibold mb-2">Hairstylists & Barbers — Full Time</h3>
                  <ul className="text-white/50 text-sm space-y-1.5 mt-3">
                    <li>✓ Commission, bonuses, and competitive benefits</li>
                    <li>✓ Career advancement and promotion opportunities</li>
                    <li>✓ Ongoing education and training</li>
                    <li>✓ Marketing support to grow your clientele</li>
                    <li>✓ 3+ years behind-the-chair experience preferred</li>
                  </ul>
                </div>
                <form onSubmit={handleStylistSubmit} className="space-y-5">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "(000) 000-0000" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{label} *</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={stylistForm[key as keyof typeof stylistForm]}
                        onChange={(e) => setStylistForm({ ...stylistForm, [key]: e.target.value })}
                        className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a96e] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                      Are you a licensed cosmetologist or barber? *
                    </label>
                    <select
                      required
                      value={stylistForm.licensed}
                      onChange={(e) => setStylistForm({ ...stylistForm, licensed: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a96e] transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="yes-cosmetologist">Yes, Licensed Cosmetologist</option>
                      <option value="yes-barber">Yes, Licensed Barber</option>
                      <option value="no">Not yet licensed</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                      How much experience do you have cutting hair? *
                    </label>
                    <select
                      required
                      value={stylistForm.yearsExp}
                      onChange={(e) => setStylistForm({ ...stylistForm, yearsExp: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a96e] transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="less-than-2">Less than 2 years</option>
                      <option value="3-5">3 – 5 years</option>
                      <option value="more-than-5">More than 5 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                      Relevant Work Experience
                    </label>
                    <textarea
                      rows={4}
                      value={stylistForm.experience}
                      onChange={(e) => setStylistForm({ ...stylistForm, experience: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a96e] transition-colors resize-none"
                      placeholder="Tell us about your experience..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c9a96e] hover:bg-[#b8924f] text-black font-bold uppercase tracking-widest py-4 text-sm transition-colors disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </div>
            )}

            {activeRole === "frontdesk" && (
              <div className="space-y-8">
                <div className="bg-[#111] border border-white/5 p-6">
                  <h3 className="text-white font-semibold mb-2">Front Desk Receptionist (DOFI — Director of First Impression)</h3>
                  <ul className="text-white/50 text-sm space-y-1.5 mt-3">
                    <li>✓ Drive retail and membership sales</li>
                    <li>✓ Deliver exceptional hospitality and customer service</li>
                    <li>✓ Support stylists in reaching their daily potential</li>
                    <li>✓ Manage salon performance metrics</li>
                    <li>✓ Professional salon operations experience preferred</li>
                  </ul>
                </div>
                <form onSubmit={handleFrontDeskSubmit} className="space-y-5">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "(000) 000-0000" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{label} *</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={frontDeskForm[key as keyof typeof frontDeskForm]}
                        onChange={(e) => setFrontDeskForm({ ...frontDeskForm, [key]: e.target.value })}
                        className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a96e] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                      Have you worked in a salon before? *
                    </label>
                    <select
                      required
                      value={frontDeskForm.salonExp}
                      onChange={(e) => setFrontDeskForm({ ...frontDeskForm, salonExp: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a96e] transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                      Relevant Work Experience
                    </label>
                    <textarea
                      rows={4}
                      value={frontDeskForm.experience}
                      onChange={(e) => setFrontDeskForm({ ...frontDeskForm, experience: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a96e] transition-colors resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c9a96e] hover:bg-[#b8924f] text-black font-bold uppercase tracking-widest py-4 text-sm transition-colors disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
