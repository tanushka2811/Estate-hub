import { useState } from "react";
import { investApi } from "../../features/invest/api.invest";
import { X } from "lucide-react"
import { Link } from "react-router-dom";


export default function InvestorForm() {

   const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    investmentRange: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = formData.fullName.trim();
    if (fullName.length < 2) {
      alert("Name must be at least 2 characters.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    const sanitizedPhone = formData.phoneNumber.replace(/[\s-()]/g, "");
    if (sanitizedPhone.length < 10 || sanitizedPhone.length > 15) {
      alert("Please enter a valid phone number (between 10 and 15 digits).");
      return;
    }

    const country = formData.country.trim();
    if (!country) {
      alert("Country is required.");
      return;
    }

    const investmentRange = formData.investmentRange.trim();
    if (!investmentRange) {
      alert("Investment range is required.");
      return;
    }

    const message = formData.message.trim();
    if (message.length < 5) {
      alert("Message must be at least 5 characters.");
      return;
    }

    try {
      await investApi.create({
        fullName,
        email: formData.email.trim(),
        phoneNumber: sanitizedPhone,
        country,
        investmentRange,
        message,
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        country: "",
        investmentRange: "",
        message: "",
      });
      setShowPopup(true);
    } catch (error) {
  const err = error as Error;
  console.error(err);
  alert(err.message || "Failed to submit the form. Please try again.");
}
  };
  return (
    <div className="bg-white font-sans relative ">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gradient-to-b from-[#FAF9F6] to-[#F5F3EF] rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg p-6 sm:p-8 text-center relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-serif text-[#1E3557] mb-3">
Application Received Successfully!            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base mb-6 leading-relaxed">
              We’ve received your details. Our team will review your application and get in touch to assist you with the next steps in your investment journey.
            </p>
            <Link
            to="/"
              onClick={() => setShowPopup(false)}
              className="bg-[#002349] text-white px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#1E3557] transition-all duration-300"
            >
              Back to home
            </Link>
          </div>
        </div>
      )}


      <section className="bg-[#F6F7F9] py-7 sm:py-16 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Info Panel */}
          <div className="bg-[#0B1E3F] text-white rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 text-white">
                Let’s start your <br /> investment journey
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-8 leading-relaxed">
                We work with investors who are looking for clear, reliable, and
                long-term investment opportunities. Our goal is to keep everything
                simple, transparent, and easy to understand.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4  h-[270px] md:h-[300px] lg:h-[360px]">
              <div className="bg-[#142A52] rounded-md p-4">
                <h4 className="text-sm font-semibold mb-1 text-white">Careful review</h4>
                <p className="text-xs text-gray-300">
                  Every application is checked properly
                </p>
              </div>
              <div className="bg-[#142A52] rounded-md p-4">
                <h4 className="text-sm font-semibold mb-1 text-white">Simple process</h4>
                <p className="text-xs text-gray-300">
                  Easy and guided at every step
                </p>
              </div>
              <div className="bg-[#142A52] rounded-md p-4">
                <h4 className="text-sm font-semibold mb-1 text-white">Clear communication</h4>
                <p className="text-xs text-gray-300">
                  We keep you informed at all times
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8" id="investor-form">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#4A5568] mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Shivan Verma"
                    required
                    minLength={3}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#1E3557]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4A5568] mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#1E3557]"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-6">
  {/* Mobile Number */}
  <div>
    <label className="block text-sm text-[#4A5568] mb-2">Mobile Number *</label>
    <div className="flex gap-2">
      <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#1E3557]">
        <option>🇮🇳 +91</option>
      </select>
      <input
        type="tel"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        placeholder="9818107223"
        required
        pattern="^[0-9]{10}$"
        maxLength={10}
        inputMode="numeric"
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#1E3557]"
      />
    </div>
  </div>

  {/* Country */}
  <div>
    <label className="block text-sm text-[#4A5568] mb-2">Country *</label>
    <select
      value={formData.country}
      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
      required
      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#1E3557] bg-white"
    >
      <option value="">Select Country</option>
      <option>India</option>
      <option>USA</option>
      <option>UK</option>
    </select>
  </div>
</div>

              {/* Row 3 */}
              <div>
                <label className="block text-sm text-[#4A5568] mb-2">Investment Range *</label>
                <select
                  value={formData.investmentRange}
                  onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#1E3557] bg-white"
                >
                  <option value="">Select Range</option>
                  <option>₹10L - ₹50L</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr+</option>
                </select>
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-sm text-[#4A5568] mb-2">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your investment goals"
                  rows={4}
                  required
                  minLength={5}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#1E3557]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"        
   className="w-full bg-[#1E3557] text-white rounded-md py-3 text-sm font-medium hover:bg-[#2A4A6F] transition-all"
  >
    Submit Application
  </button>
</div>
</form>
</div>
</div>
</section>
</div>

)};