import React from 'react';


const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h1>Privacy Policy</h1>
        <p className="p1 mt-4 max-w-2xl mx-auto">Your privacy is our priority. This document outlines how we handle your personal data.</p>
      </div>
      
      <div className="max-w-4xl mx-auto py-24 px-4 prose prose-blue">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#001529] mb-4">1. Data Collection</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us when you inquire about a property, sign up for our newsletter, or fill out a contact form. This may include your name, email address, phone number, and preferences.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#001529] mb-4">2. Use of Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Your data is used to provide the services you request, communicate updates about projects, and improve our website experience. We do not sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#001529] mb-4">3. Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
