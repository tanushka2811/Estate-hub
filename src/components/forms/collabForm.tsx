import { useState } from "react";
import { collabApi } from "../../features/collab/api.collab";
import { X } from "lucide-react"
import { Link } from "react-router-dom"
export default function CollabForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    plotSize: "",
    landType: "",
    landLocation: "",
    details: "",
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

    const plotSize = formData.plotSize.trim();
    if (!plotSize) {
      alert("Plot size is required.");
      return;
    }

    const landType = formData.landType.trim();
    if (!landType) {
      alert("Land type is required.");
      return;
    }

    const landLocation = formData.landLocation.trim();
    if (landLocation.length < 3) {
      alert("Land location must be at least 3 characters.");
      return;
    }

    try {
      await collabApi.create({
        fullName,
        email: formData.email.trim(),
        phoneNumber: sanitizedPhone,
        country,
        plotSize,
        landType,
        landLocation,
        additionalDetails: formData.details,
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        country: "",
        plotSize: "",
        landType: "",
        landLocation: "",
        details: "",
      });
      setShowPopup(true);
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Something went wrong. Please try again.");
    }
  };
  return (
    <div className="bg-white font-sans relative">
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
              Application Received Successfully
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base mb-6 leading-relaxed">
              Thank you for sharing your details with us. Our team will carefully review your submission and connect with you to explore the collaboration further.
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

      {/* Form */}
      <section className="bg-[#F9FAFB] py-12 sm:py-16 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-3 sm:mb-4">
              Start Your Land Collaboration Journey
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto mb-0 text-xs sm:text-sm md:text-base leading-relaxed">
              Share your land details and our team will connect with you to explore a secure,
              transparent, and profitable development partnership.
            </p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-[#1E3557] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your full name"
                required
                minLength={3}
                className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#E3B873] focus:outline-none"
              />
            </div>

            {/* Email & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#1E3557] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#E3B873] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#1E3557] mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="Enter mobile number"
                  required
                  pattern="^[0-9]{10}$"
                  maxLength={10}
                  inputMode="numeric"
                  className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#E3B873] focus:outline-none"
                />
              </div>
            </div>

            {/* Country & Plot Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#1E3557] mb-2">
                  Country *
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#E3B873] focus:outline-none bg-white"
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#1E3557] mb-2">
                  Plot Size *
                </label>
                <input
                  type="text"
                  value={formData.plotSize}
                  onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                  placeholder="e.g., 200 sq yards"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#E3B873] focus:outline-none"
                />
              </div>
            </div>

            {/* Land Type & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#1E3557] mb-2">
                  Land Type *
                </label>
                <select
                  value={formData.landType}
                  onChange={(e) => setFormData({ ...formData, landType: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#E3B873] focus:outline-none bg-white"
                >
                  <option value="">Select Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Agricultural</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#1E3557] mb-2">
                  Land Location *
                </label>
                <input
                  type="text"
                  value={formData.landLocation}
                  onChange={(e) => setFormData({ ...formData, landLocation: e.target.value })}
                  placeholder="Area, City, State"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#E3B873] focus:outline-none"
                />
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-[#1E3557] mb-2">
                Additional Details
              </label>
              <textarea
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Share any additional information about your land, ownership status, or development plans"
                className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#E3B873] focus:outline-none focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#002349] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#1E3557] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>

  )
};
