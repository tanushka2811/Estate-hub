export const faqCategories = [
  'Residential', 
  'Commercial', 
  'institutional', 
  'Factory', 
  'Villas', 
  'Agriculture', 
  'Farmhouse'
];

export const faqData: Record<string, { question: string; answer: string }[]> = {
  'Residential': [
    { question: "Are all Estate-hub residential projects RERA registered?", answer: "Yes, all our residential projects are 100% RERA registered, ensuring complete safety for home buyers." },
    { question: "What amenities are provided in your residential projects?", answer: "Our projects include premium amenities like smart home automation, swimming pools, high-end gymnasiums, and 24/7 security." },
    { question: "Do you offer ready-to-move-in apartments?", answer: "We have both under-construction and ready-to-move-in options across various prime locations in Delhi NCR." },
    { question: "Can I customize the interiors of my apartment?", answer: "Yes, we offer flexible interior customization options during the early stages of construction to suit your lifestyle." },
    { question: "What is the typical maintenance cost for your residential units?", answer: "Maintenance costs vary by project but are calculated transparently based on the amenities and services provided." },
    { question: "Is home loan assistance available for residential buyers?", answer: "Absolutely. We have partnerships with top banks to facilitate quick and easy home loan processing." }
  ],
  'Commercial': [
    { question: "Do you provide office spaces for startups?", answer: "Yes, we offer a range of commercial spaces from small startup offices to large corporate headquarters." },
    { question: "Are your commercial buildings LEED certified?", answer: "Many of our new commercial developments are designed with sustainability in mind and follow green building standards." },
    { question: "What is the security system like in commercial projects?", answer: "We provide multi-tier security, including biometric access, 24/7 CCTV surveillance, and professional security staff." },
    { question: "Is there sufficient parking for employees and visitors?", answer: "Yes, our commercial projects feature multi-level basement parking to accommodate high volumes of traffic." },
    { question: "Do you offer retail spaces in your commercial buildings?", answer: "Yes, most of our commercial projects have dedicated ground and first floors for premium retail outlets." },
    { question: "Are the commercial units available for lease or purchase?", answer: "We offer flexible options for both outright purchase and long-term leasing for our commercial clients." }
  ],
  'institutional': [
    { question: "Do you build educational institutions?", answer: "Yes, we specialize in building state-of-the-art schools, colleges, and training centers with modern infrastructure." },
    { question: "What kind of institutional projects have you completed?", answer: "We have experience in developing research centers, health clinics, and government institutional buildings." },
    { question: "Do your institutional designs follow safety regulations?", answer: "All our institutional projects strictly adhere to national safety, fire, and accessibility standards." },
    { question: "Can you provide custom layouts for specialized labs?", answer: "Yes, we design specialized laboratories and research facilities according to specific technical requirements." },
    { question: "Is campus landscaping included in institutional projects?", answer: "We provide comprehensive landscaping and outdoor facility planning for all our institutional developments." },
    { question: "Do you offer maintenance for institutional buildings?", answer: "Yes, we provide dedicated facility management and maintenance services for all institutional projects we deliver." }
  ],
  'Factory': [
    { question: "Can you build customized industrial sheds?", answer: "Yes, we provide end-to-end solutions for customized factory layouts and heavy-duty industrial sheds." },
    { question: "Do your factory designs include waste management systems?", answer: "Sustainability is key; we incorporate efficient waste and effluent management systems in our industrial designs." },
    { question: "What is the typical construction timeline for a factory?", answer: "Construction timelines vary based on size and complexity, but we specialize in rapid industrial development methods." },
    { question: "Do you help with industrial zoning and permits?", answer: "Our legal and liaison team handles all necessary industrial zoning approvals and environmental permits." },
    { question: "Are your industrial designs earthquake-resistant?", answer: "All our industrial structures are engineered to be earthquake-resistant according to IS codes and safety standards." },
    { question: "Do you provide fire safety systems for factories?", answer: "We install advanced fire detection, suppression, and automated sprinkler systems in all our factory projects." }
  ],
  'Villas': [
    { question: "What makes your luxury villas unique?", answer: "Our villas feature private pools, landscaped gardens, and personalized architecture that blends luxury with nature." },
    { question: "Are the villas part of a gated community?", answer: "Yes, all our villa projects are part of secure, gated communities with 24/7 concierge services." },
    { question: "Can I customize the architectural style of my villa?", answer: "We offer several architectural themes, and you can work with our design team to personalize your villa's layout." },
    { question: "What smart home features are included in the villas?", answer: "Our villas come with integrated smart lighting, climate control, and advanced security systems as standard." },
    { question: "Do you offer interior design services for villas?", answer: "Yes, we have an in-house luxury interior design team to help you create your dream living space." },
    { question: "Is there a private recreational area in the villa projects?", answer: "Most of our villa projects include private clubhouses, walking tracks, and exclusive wellness centers." }
  ],
  'Agriculture': [
    { question: "Do you help in developing smart farmhouses?", answer: "Yes, we integrate AI and smart technology into agricultural estates for efficient farm management." },
    { question: "Is legal assistance provided for agricultural land purchase?", answer: "Our legal team ensures that all land acquisitions are clear of encumbrances and legally sound." },
    { question: "Do you offer soil testing and irrigation planning?", answer: "Yes, as part of our land development services, we provide soil analysis and efficient water management systems." },
    { question: "Can agricultural land be converted for residential use?", answer: "We provide consultation on the legalities of land conversion (CLU) based on local state laws and master plans." },
    { question: "Do you provide fencing and security for large estates?", answer: "We offer perimeter fencing, gated access, and AI-powered surveillance systems for large agricultural lands." },
    { question: "Can I build multiple structures on agricultural land?", answer: "Building permissions depend on the local zoning laws, and we help you navigate the permissible built-up area regulations." }
  ],
  'Farmhouse': [
    { question: "What size options are available for farmhouses?", answer: "We offer various plot sizes ranging from 1 acre to 5 acres, depending on the location and project." },
    { question: "Are farmhouses equipped with power backup?", answer: "Yes, all our farmhouse developments come with robust power backup and sustainable energy options like solar." },
    { question: "Do you provide organic farming setups with farmhouses?", answer: "Yes, we can design and implement organic vegetable patches and fruit orchards within your farmhouse estate." },
    { question: "What is the security like for remote farmhouse locations?", answer: "We provide 24/7 centralized security monitoring and rapid response teams for all our farmhouse communities." },
    { question: "Is there a central clubhouse facility available?", answer: "Most of our farmhouse projects feature a central community hub with recreational and social facilities." },
    { question: "How is the water supply managed in farmhouses?", answer: "We implement specialized rainwater harvesting and deep borewell systems to ensure consistent water supply." }
  ]
};
