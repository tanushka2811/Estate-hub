import React from 'react';


const TermsConditions: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h1>Terms & Conditions</h1>
        <p className="p1 mt-4 max-w-2xl mx-auto">The legal framework for using our services and visiting our website.</p>
      </div>
      
      <div className="max-w-4xl mx-auto py-24 px-4 prose prose-blue">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#001529] mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#001529] mb-4">2. Use License</h2>
            <p className="text-gray-600 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on Estate-Hubs' website for personal, non-commercial transitory viewing only.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#001529] mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              The materials on this website are provided "as is". Estate-Hubs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
