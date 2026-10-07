import {
    Home,
    Dumbbell,
    TreePine,
    Baby,
    ShieldCheck,
    Car,
    MapPin,
    Pencil,
    Hammer,
    HeartHandshake,
} from "lucide-react";

export const portfolioData = [
    // 1. Residential
    {
        id: 1,
        title: "Aaru Heights,Residentail Project",
        location: "Delhi NCR",
        type: "Residential",
        status: "Completed",
        description: "3 & 4 BHK premium apartments with panoramic views and top-tier amenities.",
        image: "/images/office-hero.png",
        category: "Residential",
        gallery: ["/images/office-hero.png", "/images/office-hero.png", "/images/residential_hero.png","/images/office-hero.png"],
        about: {
            concept: "Premium residential development with modern layouts thoughtfully designed to maximize natural light and ventilation.Each unit blends functionality with elegance, offering.",
            vision: "Combining comfort with long-term value, the residences are crafted to balance everyday ease with enduring quality. Spacious interiors, efficient layouts, and premium finishes ensure a refined living experience.",
            details: {
                projectSize: "2.5 Acres",
                totalUnits: "120+",
                configuration: "3 & 4 BHK",
                floors: "15",
                completionYear: "2026",
                delivery: "On Time",
            },
        },
        amenities: [
            { icon: Home, title: "Clubhouse", description: "A dedicated space for indoor activities, community interaction, and social gatherings." },
            { icon: Dumbbell, title: "Gym", description: "Modern fitness equipment to support daily workouts and a healthy lifestyle." },
            { icon: TreePine, title: "Gardens", description: "Well-maintained green areas designed for relaxation and outdoor comfort." },
            { icon: Baby, title: "Play Area", description: "Safe and engaging space for kids to play and enjoy within the community." },
            { icon: ShieldCheck, title: "24/7 Security", description: "Continuous monitoring and controlled access to ensure resident safety." },
            { icon: Car, title: "Parking", description: "Planned parking spaces for residents with easy access and convenience." },
        ],
        developmentApproach: [
            { icon: MapPin, step: "STEP 01", title: "Land Acquisition", description: "Strategic location selection." },
            { icon: Pencil, step: "STEP 02", title: "Planning & Design", description: "Efficient modern layouts." },
            { icon: Hammer, step: "STEP 03", title: "Construction", description: "Strict quality checks." },
            { icon: HeartHandshake, step: "STEP 04", title: "Delivery", description: "Seamless handover." },
        ],
        timeline: [
            { year: "2023", title: "Planning", description: "Efficient layouts and design clarity." },
            { year: "2024", title: "Construction Started", description: "Foundation & structure work." },
            { year: "2025", title: "Structural Completion", description: "Key phases completed." },
            { year: "2026", title: "Delivered", description: "Final finishing and handover." },
        ],
        relatedProjects: [
            { id: 2, title: "Skyline Plaza", description: "Commercial hub with retail and office spaces.", location: "Gurugram", type: "Commercial", image: "/images/skyline-plaza.jpg" },
            { id: 3, title: "TechPark One", description: "Institutional project for IT and startups.", location: "Noida", type: "Institutional", image: "/images/techpark-one.jpg" },
        ],
    },

    // 2. Commercial
    {
        id: 2,
        title: "Skyline Plaza",
        location: "Gurugram",
        type: "Commercial",
        status: "Ongoing",
        description: "A commercial hub planned for retail and office spaces with strong connectivity.",
        image: "/images/skyline-plaza.jpg",
        category: "Commercial",
        gallery: ["/images/gallery-office.jpg", "/images/gallery-retail.jpg"],
        about: {
            concept: "Modern commercial hub with retail and office spaces.",
            vision: "Creating a vibrant business ecosystem.",
            details: {
                projectSize: "5 Acres",
                totalUnits: "200+",
                configuration: "Retail + Office",
                floors: "20",
                completionYear: "2027",
                delivery: "On Schedule",
            },
        },
        amenities: [
            { icon: Home, title: "Retail Spaces", description: "Premium shops and showrooms." },
            { icon: Dumbbell, title: "Fitness Center", description: "Corporate wellness facilities." },
            { icon: ShieldCheck, title: "Security", description: "24/7 monitoring and access control." },
        ],
        developmentApproach: [
            { icon: MapPin, step: "STEP 01", title: "Site Selection", description: "Prime location in Gurugram." },
            { icon: Pencil, step: "STEP 02", title: "Design", description: "Mixed-use commercial layouts." },
            { icon: Hammer, step: "STEP 03", title: "Construction", description: "High-rise development." },
            { icon: HeartHandshake, step: "STEP 04", title: "Delivery", description: "Retail and office handover." },
        ],
        timeline: [
            { year: "2024", title: "Planning", description: "Design and approvals." },
            { year: "2025", title: "Construction Started", description: "Foundation and structure." },
            { year: "2026", title: "Structural Completion", description: "High-rise completed." },
            { year: "2027", title: "Delivery", description: "Retail and office spaces ready." },
        ],
        relatedProjects: [
            { id: 1, title: "Aaru Heights", description: "Residential project.", location: "Delhi NCR", type: "Residential", image: "/images/aaru-heights.jpg" },
        ],
    },

    // 3. Institutional
    {
        id: 3,
        title: "TechPark One",
        location: "Noida",
        type: "Institutional",
        status: "Ongoing",
        description: "Grade A office spaces designed for IT and startups, with advanced infrastructure.",
        image: "/images/techpark-one.jpg",
        category: "Institutional",
        gallery: ["/images/gallery-tech.jpg", "/images/gallery-campus.jpg"],
        about: {
            concept: "Institutional campus for IT and startups.",
            vision: "Supporting innovation and entrepreneurship.",
            details: {
                projectSize: "10 Acres",
                totalUnits: "50+",
                configuration: "Office Spaces",
                floors: "12",
                completionYear: "2028",
                delivery: "Planned",
            },
        },
        amenities: [
            { icon: Home, title: "Conference Halls", description: "Modern meeting spaces." },
            { icon: Dumbbell, title: "Fitness Center", description: "Employee wellness facilities." },
            { icon: ShieldCheck, title: "Security", description: "24/7 monitoring." },
        ],
        developmentApproach: [
            { icon: MapPin, step: "STEP 01", title: "Site Acquisition", description: "Strategic location in Noida." },
            { icon: Pencil, step: "STEP 02", title: "Design", description: "Efficient office layouts." },
            { icon: Hammer, step: "STEP 03", title: "Construction", description: "Quality infrastructure." },
            { icon: HeartHandshake, step: "STEP 04", title: "Delivery", description: "Office handover." },
        ],
        timeline: [
            { year: "2025", title: "Planning", description: "Design and approvals." },
            { year: "2026", title: "Construction Started", description: "Foundation and structure." },
            { year: "2027", title: "Structural Completion", description: "Campus completed." },
            { year: "2028", title: "Delivery", description: "Office spaces ready." },
        ],
        relatedProjects: [
            { id: 2, title: "Skyline Plaza", description: "Commercial hub.", location: "Gurugram", type: "Commercial", image: "/images/skyline-plaza.jpg" },
        ],
    },

    // 4. Institutional
    {
        id: 4,
        title: "Knowledge Hub",
        location: "Delhi NCR",
        type: "Institutional",
        status: "Planned",
        description: "Institutional campus with modern facilities for education and research.",
        image: "/images/knowledge-hub.jpg",
        category: "Institutional",
        gallery: ["/images/gallery-library.jpg", "/images/gallery-campus2.jpg"],
        about: {
            concept: "Educational and research hub.",
            vision: "Advancing knowledge and innovation.",
            details: {
                projectSize: "15 Acres",
                totalUnits: "N/A",
                configuration: "Institutional",
                floors: "8",
                completionYear: "2029",
                delivery: "Planned",
            },
        },
        amenities: [
            { icon: Home, title: "Library", description: "Extensive academic resources." },
            { icon: Dumbbell, title: "Sports Complex", description: "Facilities for students." },
            { icon: ShieldCheck, title: "Security", description: "24/7 monitoring." },
        ],
        developmentApproach: [
            { icon: MapPin, step: "STEP 01", title: "Site Acquisition", description: "Strategic location in Delhi NCR." },
            { icon: Pencil, step: "STEP 02", title: "Design", description: "Educational and research-focused layouts." },
            { icon: Hammer, step: "STEP 03", title: "Construction", description: "Quality infrastructure for learning." },
            { icon: HeartHandshake, step: "STEP 04", title: "Delivery", description: "Campus handover and operations." },
        ],
        timeline: [
            { year: "2026", title: "Planning", description: "Design and approvals." },
            { year: "2027", title: "Construction Started", description: "Foundation and structure." },
            { year: "2028", title: "Structural Completion", description: "Campus completed." },
            { year: "2029", title: "Delivery", description: "Institutional facilities ready." },
        ],
        relatedProjects: [
            { id: 3, title: "TechPark One", description: "Institutional project for IT and startups.", location: "Noida", type: "Institutional", image: "/images/techpark-one.jpg" },
        ],
    },

    // 5. Land Development
    {
        id: 5,
        title: "Landmark Estate",
        location: "Jaipur",
        type: "Land Development",
        status: "Ongoing",
        description: "Strategic land development project offering long-term investment potential.",
        image: "/images/landmark-estate.jpg",
        category: "Land Development",
        gallery: ["/images/gallery-land.jpg", "/images/gallery-estate.jpg"],
        about: {
            concept: "Transforming land into valuable real estate.",
            vision: "Unlocking long-term investment opportunities.",
            details: {
                projectSize: "50 Acres",
                totalUnits: "Plots",
                configuration: "Residential + Commercial",
                floors: "N/A",
                completionYear: "2027",
                delivery: "On Schedule",
            },
        },
        amenities: [
            { icon: TreePine, title: "Green Zones", description: "Eco-friendly development." },
            { icon: ShieldCheck, title: "Security", description: "Controlled access." },
        ],
        developmentApproach: [
            { icon: MapPin, step: "STEP 01", title: "Land Acquisition", description: "Strategic location in Jaipur." },
            { icon: Pencil, step: "STEP 02", title: "Planning", description: "Zoning and infrastructure." },
            { icon: Hammer, step: "STEP 03", title: "Development", description: "Roads and utilities." },
            { icon: HeartHandshake, step: "STEP 04", title: "Delivery", description: "Plots ready for sale." },
        ],
        timeline: [
            { year: "2024", title: "Planning", description: "Zoning approvals." },
            { year: "2025", title: "Infrastructure Development", description: "Roads and utilities." },
            { year: "2026", title: "Phase Completion", description: "First plots ready." },
            { year: "2027", title: "Delivery", description: "Full estate completed." },
        ],
        relatedProjects: [
            { id: 8, title: "Riverfront Residency", description: "Eco-friendly apartments.", location: "Lucknow", type: "Land Development", image: "/images/riverfront-residency.jpg" },
        ],
    },

    // 6. Land Development
    {
        id: 6,
        title: "Riverfront Residency",
        location: "Lucknow",
        type: "Land Development",
        status: "Planned",
        description: "Eco-friendly apartments with river views, solar energy integration, and sustainable design.",
        image: "/images/riverfront-residency.jpg",
        category: "Land Development",
        gallery: ["/images/gallery-river.jpg", "/images/gallery-residency.jpg"],
        about: {
            concept: "Eco-friendly residential development.",
            vision: "Sustainable living by the river.",
            details: {
                projectSize: "30 Acres",
                totalUnits: "300+",
                configuration: "2 & 3 BHK",
                floors: "12",
                completionYear: "2028",
                delivery: "Planned",
            },
        },
        amenities: [
            { icon: TreePine, title: "Eco Parks", description: "Green spaces by the river." },
            { icon: Dumbbell, title: "Fitness Center", description: "Sustainable wellness facilities." },
            { icon: ShieldCheck, title: "Security", description: "24/7 monitoring." },
        ],
        developmentApproach: [
            { icon: MapPin, step: "STEP 01", title: "Site Selection", description: "Riverfront location in Lucknow." },
            { icon: Pencil, step: "STEP 02", title: "Design", description: "Eco-friendly layouts." },
            { icon: Hammer, step: "STEP 03", title: "Construction", description: "Sustainable building practices." },
            { icon: HeartHandshake, step: "STEP 04", title: "Delivery", description: "Eco-friendly apartments ready." },
        ],
        timeline: [
            { year: "2025", title: "Planning", description: "Design and approvals." },
            { year: "2026", title: "Construction Started", description: "Foundation and structure." },
            { year: "2027", title: "Structural Completion", description: "Apartments completed." },
            { year: "2028", title: "Delivery", description: "Residency ready." },
        ],
        relatedProjects: [
            { id: 5, title: "Landmark Estate", description: "Land development project.", location: "Jaipur", type: "Land Development", image: "/images/landmark-estate.jpg" },
        ],
    },
    // 7. Land Development
    {
        id: 7,
        title: "Landmark Estate",
        location: "Jaipur",
        type: "Land Development",
        status: "Ongoing",
        description: "Strategic land development project offering long-term investment potential.",
        image: "/images/landmark-estate.jpg",
        category: "Land Development",
        gallery: ["/images/gallery-land.jpg", "/images/gallery-estate.jpg"],
        about: {
            concept: "Transforming land into valuable real estate.",
            vision: "Unlocking long-term investment opportunities.",
            details: {
                projectSize: "50 Acres",
                totalUnits: "Plots",
                configuration: "Residential + Commercial",
                floors: "N/A",
                completionYear: "2027",
                delivery: "On Schedule",
            },
        },
        amenities: [
            { icon: TreePine, title: "Green Zones", description: "Eco-friendly development." },
            { icon: ShieldCheck, title: "Security", description: "Controlled access." },
        ],
        developmentApproach: [
            { icon: MapPin, step: "STEP 01", title: "Land Acquisition", description: "Strategic location in Jaipur." },
            { icon: Pencil, step: "STEP 02", title: "Planning", description: "Zoning and infrastructure." },
            { icon: Hammer, step: "STEP 03", title: "Development", description: "Roads and utilities." },
            { icon: HeartHandshake, step: "STEP 04", title: "Delivery", description: "Plots ready for sale." },
        ],
        timeline: [
            { year: "2024", title: "Planning", description: "Zoning approvals." },
            { year: "2025", title: "Infrastructure Development", description: "Roads and utilities." },
            { year: "2026", title: "Phase Completion", description: "First plots ready." },
            { year: "2027", title: "Delivery", description: "Full estate completed." },
        ],
        relatedProjects: [
            { id: 8, title: "Riverfront Residency", description: "Eco-friendly apartments.", location: "Lucknow", type: "Land Development", image: "/images/riverfront-residency.jpg" },
        ],
    },

    // 8. Land Development
    {
        id: 8,
        title: "Riverfront Residency",
        location: "Lucknow",
        type: "Land Development",
        status: "Planned",
        description: "Eco-friendly apartments with river views, solar energy integration, and sustainable design.",
        image: "/images/riverfront-residency.jpg",
        category: "Land Development",
        gallery: ["/images/gallery-river.jpg", "/images/gallery-residency.jpg"],
        about: {
            concept: "Eco-friendly residential development.",
            vision: "Sustainable living by the river.",
            details: {
                projectSize: "30 Acres",
                totalUnits: "300+",
                configuration: "2 & 3 BHK",
                floors: "12",
                completionYear: "2028",
                delivery: "Planned",
            },
        },
        amenities: [
            { icon: TreePine, title: "Eco Parks", description: "Green spaces by the river." },
            { icon: Dumbbell, title: "Fitness Center", description: "Sustainable wellness facilities." },
            { icon: ShieldCheck, title: "Security", description: "24/7 monitoring." },
        ],
        developmentApproach: [
            { icon: MapPin, step: "STEP 01", title: "Site Selection", description: "Riverfront location in Lucknow." },
            { icon: Pencil, step: "STEP 02", title: "Design", description: "Eco-friendly layouts." },
            { icon: Hammer, step: "STEP 03", title: "Construction", description: "Sustainable building practices." },
            { icon: HeartHandshake, step: "STEP 04", title: "Delivery", description: "Eco-friendly apartments ready." },
        ],
        timeline: [
            { year: "2025", title: "Planning", description: "Design and approvals." },
            { year: "2026", title: "Construction Started", description: "Foundation and structure." },
            { year: "2027", title: "Structural Completion", description: "Apartments completed." },
            { year: "2028", title: "Delivery", description: "Residency ready." },
        ],
        relatedProjects: [
            { id: 7, title: "Landmark Estate", description: "Land development project.", location: "Jaipur", type: "Land Development", image: "/images/landmark-estate.jpg" },
        ],
    },
];


