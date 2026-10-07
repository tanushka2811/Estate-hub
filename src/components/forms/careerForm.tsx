import { Upload, X } from "lucide-react";
import { useState } from "react";
import { careerApi } from "../../features/career/api.career";
import { Link } from "react-router-dom";

export function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    portfolio: "",
    resume: null as File | null,
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateAndSetFile = (file: File) => {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const allowedExtensions = ["pdf", "doc", "docx"];
    const allowedMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const isAllowedType =
      allowedMimeTypes.includes(file.type) ||
      (fileExtension && allowedExtensions.includes(fileExtension));

    if (!isAllowedType) {
      alert("Please upload a PDF, DOC, or DOCX file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size should not exceed 5 MB.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    validateAndSetFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    validateAndSetFile(file);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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

    if (!formData.phoneNumber.trim()) {
      alert("Please enter your phone number.");
      return;
    }
    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    let formattedPortfolio = formData.portfolio.trim();
    if (formattedPortfolio && !/^https?:\/\//i.test(formattedPortfolio)) {
      formattedPortfolio = `https://${formattedPortfolio}`;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid phone number. Only numbers, spaces, dashes, parentheses and a leading '+' are allowed.");
      return;
    }

    const sanitizedPhone = formData.phoneNumber.replace(/[\s-()]/g, "");
    if (sanitizedPhone.length < 10 || sanitizedPhone.length > 15) {
      alert("Please enter a valid phone number (between 10 and 15 digits).");
      return;
    }

    try {
      const response = await careerApi.create({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: sanitizedPhone,
        portfolio: formattedPortfolio || undefined,
        resume: formData.resume,
      });

      console.log(response);
      setShowPopup(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        portfolio: "",
        resume: null,
      });
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Failed to submit the application. Please try again.");
    }
  };

  return (
    <section className="bg-[#F9FAFB] py-16 px-6 md:px-12 relative">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gradient-to-b from-[#FAF9F6] to-[#F5F3EF] rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg p-6 sm:p-8 text-center relative">
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-serif text-[#1E3557] mb-3">
              Application Received Successfully!
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base mb-6 leading-relaxed">
              We’ve received your application. Our team will review your details and get in touch with you soon.
            </p>
            <Link
              to="/"
              type="button"
              onClick={() => setShowPopup(false)}
              className="bg-[#002349] text-white px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#1E3557] transition-all duration-300 cursor-pointer"
            >
              Close
            </Link>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
        {/* Left Info Panel */}
        <div className="bg-[#0B1E3F] text-white rounded-xl p-8 flex flex-col justify-between h-full lg:-ml-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              Let’s start the <br /> conversation
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed">
              We’re always looking for thoughtful individuals who value
              craftsmanship, attention to detail, and take pride in creating
              meaningful work that contributes to something bigger.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-9">
            <div className="bg-[#142A52] rounded-md p-6">
              <h4 className="text-sm font-semibold mb-1 text-white">Thoughtful review</h4>
              <p className="text-xs text-gray-300">
                Every application is reviewed with care.
              </p>
            </div>
            <div className="bg-[#142A52] rounded-md p-6">
              <h4 className="text-sm font-semibold mb-1 text-white">Clear communication</h4>
              <p className="text-xs text-gray-300">
                We aim to respond respectfully.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#4A5568] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Priya Mehta"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1E3557]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#4A5568] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="priya@email.com"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1E3557]"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#4A5568] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  pattern="^\+?[0-9\s\-()]{10,20}$"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1E3557]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#4A5568] mb-2">
                  Portfolio Link (optional)
                </label>
                <input
                  type="text"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://yourportfolio.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1E3557]"
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm text-[#4A5568] mb-2">
                Resume <span className="text-red-500">*</span>
              </label>

              <label htmlFor="resume">
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="border border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-[#1E3557] transition-all"
                >
                  <Upload className="w-6 h-6 text-[#1E3557] mx-auto mb-2" />

                  <p className="text-sm text-[#4A5568]">
                    {formData.resume
                      ? formData.resume.name
                      : "Click to upload or drag & drop"}
                  </p>

                  <p className="text-xs text-gray-400">
                    PDF, DOC, DOCX — max 5 MB
                  </p>
                </div>
              </label>

              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Note */}
            <p className="text-xs text-[#4A5568]">
              Your information is secure and will only be used for recruitment
              purposes.
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#1E3557] text-white rounded-md py-3 text-sm font-medium hover:bg-[#2A4A6F] transition-all cursor-pointer"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}