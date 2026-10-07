import {  X } from "lucide-react";
import { useState } from "react";
import { contactApi } from "../../features/contact/api.contact";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
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

    const location = formData.location.trim();
    if (!location) {
      alert("Location is required.");
      return;
    }

    const message = formData.message.trim();
    if (message.length < 5) {
      alert("Message must be at least 5 characters.");
      return;
    }

    try {
      await contactApi.create({
        fullName,
        email: formData.email.trim(),
        phoneNumber: sanitizedPhone,
        location,
        message,
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        location: "",
        message: "",
      });
      setShowPopup(true); // show popup after success
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Failed to submit. Please try again.");
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
              Thank You for Contacting Us!
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base mb-6 leading-relaxed">
              We’ve received your message and our team will respond to you as soon as possible.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#002349] text-white px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#1E3557] transition-all duration-300"
            >
              Back to home
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
<section className="bg-white py-10 px-6 md:px-12 lg:px-15 min-h-screen flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
           <h3 className="text-[#1E3557] max-w-5xl font-serif text-lg lg:text-xl mb-6">
              Tell us about your situation.
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm lg:text-base text-[#4A5568] mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Sachin Kashyap"
                    required
                    minLength={3}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 lg:py-3 focus:outline-none focus:border-[#1E3557]"
                  />
                </div>
                <div>
                  <label className="block text-sm lg:text-base text-[#4A5568] mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Sachinkashyap@gmail.com"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 lg:py-3 focus:outline-none focus:border-[#1E3557]"
                  />
                </div>
              </div>

              
<div className="grid grid-cols-1 gap-6 lg:gap-8">
  {/* Phone Number */}
  <div className="flex flex-col w-full">
    <label className="block text-sm lg:text-base text-[#4A5568] mb-2">
      Phone Number *
    </label>
    <div className="flex gap-2 w-full">
      <div className="w-24 md:w-28 lg:w-32 flex-shrink-0">
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#1E3557]">
          <option>🇮🇳 +91</option>
        </select>
      </div>
      <input
        type="tel"
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
        placeholder="9818107223"
        required
        pattern="^[0-9]{10}$"
        maxLength={10}
        inputMode="numeric"
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 lg:py-3 focus:outline-none focus:border-[#1E3557] min-w-0"
      />
    </div>
  </div>

  {/* Location */}
  <div className="flex flex-col w-full">
    <label className="block text-sm lg:text-base text-[#4A5568] mb-2">
      Location (City / State) *
    </label>
    <input
      type="text"
      value={formData.location}
      onChange={(e) =>
        setFormData({ ...formData, location: e.target.value })
      }
      placeholder="Delhi"
      required
      className="w-full border border-gray-300 rounded-md px-4 py-2 lg:py-3 focus:outline-none focus:border-[#1E3557]"
    />
  </div>
    


</div>


                

              {/* Message */}
              <div>
                <label className="block text-sm lg:text-base text-[#4A5568] mb-2">
                  Describe your situation *
                </label>
                <textarea
                  placeholder="Tell us more about how we can support you..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                  minLength={10}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 lg:py-3 focus:outline-none focus:border-[#1E3557]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1E3557] text-white rounded-md py-3 lg:py-4 text-sm lg:text-base font-medium hover:bg-[#2A4A6F] transition-all"
                >
                  Submit Request
                </button>
              </div>
              <p className="text-xs lg:text-sm text-[#4A5568] text-center mt-2">
                Your information is secure and strictly confidential.
              </p>
            </form>
          </div>
        
      </section>

      
    </div>
  );
}
