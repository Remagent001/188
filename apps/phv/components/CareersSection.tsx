"use client";

import { useState } from "react";

type Role = "stylist" | "frontdesk";

export function CareersSection() {
  const [activeRole, setActiveRole] = useState<Role>("stylist");
  const [submitted, setSubmitted] = useState(false);
  const [stylistForm, setStylistForm] = useState({
    name: "", email: "", phone: "", licensed: "", twoYearsExp: "", experience: "",
  });
  const [frontDeskForm, setFrontDeskForm] = useState({
    name: "", email: "", phone: "", salonExp: "", experience: "",
  });

  function handleStylistSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire to form backend
    setSubmitted(true);
  }

  function handleFrontDeskSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire to form backend
    setSubmitted(true);
  }

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Join the Team</p>
          <h2 className="text-[#212934] text-3xl sm:text-4xl font-bold">Careers at 18|8</h2>
          <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
          <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto">
            Want to walk into a positive and exciting work environment, help people be their best,
            and build a rewarding career? We're looking for fashion-forward, energetic, charismatic
            and professional individuals to join our team.
          </p>
        </div>

        {/* Role tabs */}
        <div className="flex border-b border-gray-200 mb-10">
          <button
            onClick={() => { setActiveRole("stylist"); setSubmitted(false); }}
            className={`px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors border-b-2 -mb-px ${
              activeRole === "stylist"
                ? "border-[#aa0000] text-[#aa0000]"
                : "border-transparent text-gray-400 hover:text-[#212934]"
            }`}
          >
            Hairstylist & Barber
          </button>
          <button
            onClick={() => { setActiveRole("frontdesk"); setSubmitted(false); }}
            className={`px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors border-b-2 -mb-px ${
              activeRole === "frontdesk"
                ? "border-[#aa0000] text-[#aa0000]"
                : "border-transparent text-gray-400 hover:text-[#212934]"
            }`}
          >
            Front Desk (DOFI)
          </button>
        </div>

        {submitted ? (
          <div className="bg-[#aa0000]/10 border border-[#aa0000]/30 p-8 text-center text-[#aa0000]">
            <p className="font-semibold text-lg mb-2">Application Received!</p>
            <p className="text-sm">Thank you for your interest in joining 18|8. We'll be in touch soon.</p>
          </div>
        ) : (
          <>
            {activeRole === "stylist" && (
              <div className="space-y-8">
                <div className="bg-[#f5f5f5] border border-gray-200 p-6">
                  <h3 className="text-[#212934] font-semibold mb-2">Hairstylists & Barbers — Full Time</h3>
                  <ul className="text-gray-500 text-sm space-y-1.5 mt-3">
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
                      <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">{label} *</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={stylistForm[key as keyof typeof stylistForm]}
                        onChange={(e) => setStylistForm({ ...stylistForm, [key]: e.target.value })}
                        className="w-full bg-white border border-gray-300 text-[#212934] text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                      Are you a licensed cosmetologist or barber? *
                    </label>
                    <select
                      required
                      value={stylistForm.licensed}
                      onChange={(e) => setStylistForm({ ...stylistForm, licensed: e.target.value })}
                      className="w-full bg-white border border-gray-300 text-[#212934] text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="yes-cosmetologist">Yes, Licensed Cosmetologist</option>
                      <option value="yes-barber">Yes, Licensed Barber</option>
                      <option value="yes-both">Yes, Both</option>
                      <option value="no">Not yet licensed</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                      How many years experience do you have cutting hair? *
                    </label>
                    <select
                      required
                      value={stylistForm.twoYearsExp}
                      onChange={(e) => setStylistForm({ ...stylistForm, twoYearsExp: e.target.value })}
                      className="w-full bg-white border border-gray-300 text-[#212934] text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="less-than-2">Less than 2</option>
                      <option value="3-to-5">3 to 5</option>
                      <option value="more-than-5">More than 5</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                      Relevant Work Experience
                    </label>
                    <textarea
                      rows={4}
                      value={stylistForm.experience}
                      onChange={(e) => setStylistForm({ ...stylistForm, experience: e.target.value })}
                      className="w-full bg-white border border-gray-300 text-[#212934] text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors resize-none"
                      placeholder="Tell us about your experience..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#aa0000] hover:bg-[#880000] text-white font-bold uppercase tracking-widest py-4 text-sm transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            )}

            {activeRole === "frontdesk" && (
              <div className="space-y-8">
                <div className="bg-[#f5f5f5] border border-gray-200 p-6">
                  <h3 className="text-[#212934] font-semibold mb-2">Front Desk Receptionist (DOFI — Director of First Impression)</h3>
                  <ul className="text-gray-500 text-sm space-y-1.5 mt-3">
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
                      <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">{label} *</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={frontDeskForm[key as keyof typeof frontDeskForm]}
                        onChange={(e) => setFrontDeskForm({ ...frontDeskForm, [key]: e.target.value })}
                        className="w-full bg-white border border-gray-300 text-[#212934] text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                      Have you worked in a salon before? *
                    </label>
                    <select
                      required
                      value={frontDeskForm.salonExp}
                      onChange={(e) => setFrontDeskForm({ ...frontDeskForm, salonExp: e.target.value })}
                      className="w-full bg-white border border-gray-300 text-[#212934] text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                      Relevant Work Experience
                    </label>
                    <textarea
                      rows={4}
                      value={frontDeskForm.experience}
                      onChange={(e) => setFrontDeskForm({ ...frontDeskForm, experience: e.target.value })}
                      className="w-full bg-white border border-gray-300 text-[#212934] text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#aa0000] hover:bg-[#880000] text-white font-bold uppercase tracking-widest py-4 text-sm transition-colors"
                  >
                    Submit Application
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
