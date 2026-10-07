// src/data/blogData.ts

export interface BlogSubPage {
    id: number;
    title: string;
    description: string;
    image: string;
    hero: {
        heading: string;
        subheading: string;
        buttons: { text: string; link: string }[];
    };
    bridge: {
        title: string;
        description: string;
        checklist: string[];
    };
    handbook: {
        title: string;
        description: string;
        images: string[];
        author: {
            name: string;
            bio: string;
        };
        aiSection: {
            title: string;
            description: string;
            buttonText: string;
        };
    };
}

export const blogData: BlogSubPage[] = [
    {
        id: 1,
        title: "Choosing the Right Property",
        description:
            "Understand what truly matters before making a real estate investment decision.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
        hero: {
            heading: "Your Dream Home is More Than Just a Listing",
            subheading:
                "Stay updated with property trends, tips, and insights that actually matter.",
            buttons: [
                { text: "Explore Projects", link: "/portfolio" },
                { text: "Book Free Consultation", link: "/contact" },
            ],
        },
        bridge: {
            title: 'We Bridge the Gap Between "House" and "Home"',
            description: "Finding the right property isn't just about the number of bedrooms or the square footage; it’s about finding the place where your life happens. At Estate-Hubs, we don't just close deals—we open doors to new chapters. Whether you are a first-time buyer or a seasoned investor, our local expertise ensures you navigate the market with total confidence.",
            checklist: [
                "Creating spaces where families thrive.",
                "Using smart tech to build better results.",
                "Exploring possibilities through clear communication.",
                "Delivering eco-friendly construction.",
            ],
        },
        handbook: {
            title: "Essential Handbook for Quality Construction",
            description:
                "We are dedicated to creating homes that instill pride and foster community growth.",
            images: [
                "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600"
            ],
            author: {
                name: "Hassan Al Bawwvari",
                bio: "Seasoned property analyst and urban development enthusiast...",
            },
            aiSection: {
                title: "What's better than insider perks?",
                description: "We simplify the hunt so you can enjoy the homecoming.",
                buttonText: "AI Technology",
            },
        },
    },
    {
        id: 2,
        title: "Location vs Price",
        description:
            "Find the right balance between budget and long-term property value.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        hero: {
            heading: "Location or Price? The Eternal Debate",
            subheading:
                "Learn how to balance affordability with long-term growth potential.",
            buttons: [
                { text: "Explore Projects", link: "/portfolio" },
                { text: "Book Free Consultation", link: "/contact" }
            ],
        },
        bridge: {
            title: "Smart Choices for Smart Buyers",
            description:
                "Price matters, but location defines future value. Here’s how to weigh both.",
            checklist: [
                "Evaluate neighborhood growth.",
                "Check accessibility and infrastructure.",
                "Balance short-term affordability with long-term ROI.",
            ],
        },
        handbook: {
            title: "Guide to Evaluating Neighborhoods",
            description:
                "A practical checklist for assessing schools, transport, and amenities.",
            images: [
                "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=600"
            ],
            author: {
                name: "Ayesha Khan",
                bio: "Urban planner and housing market researcher with 10+ years of experience.",
            },
            aiSection: {
                title: "AI-Powered Location Insights",
                description: "Predict growth trends with data-driven analysis.",
                buttonText: "Explore AI Tools",
            },
        },
    },
    {
        id: 3,
        title: "Smart Investment Tips",
        description:
            "Key insights every buyer should know before investing in real estate.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
        hero: {
            heading: "Investing Smarter, Not Harder",
            subheading:
                "Discover strategies to maximize ROI and minimize risks in real estate.",
            buttons: [
                { text: "Explore Projects", link: "/portfolio" },
                { text: "Book Free Consultation", link: "/contact" }
            ],
        },
        bridge: {
            title: "Your Path to Financial Growth",
            description:
                "Investing in property is more than buying—it’s about building wealth.",
            checklist: [
                "Diversify your portfolio.",
                "Understand market cycles.",
                "Focus on rental yield and appreciation.",
            ],
        },
        handbook: {
            title: "Investor’s Handbook",
            description:
                "Learn proven strategies from seasoned investors and analysts.",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600"
            ],
            author: {
                name: "Ravi Sharma",
                bio: "Financial advisor specializing in real estate investments.",
            },
            aiSection: {
                title: "AI Market Predictions",
                description: "Stay ahead with predictive analytics for property trends.",
                buttonText: "Get Insights",
            },
        },
    },
    {
        id: 4,
        title: "Eco-Friendly Homes",
        description:
            "Why sustainable construction is the future of real estate.",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
        hero: {
            heading: "Building Green, Living Smart",
            subheading:
                "Eco-friendly homes save money and the planet. Here’s why they matter.",
            buttons: [
                { text: "Explore Projects", link: "/portfolio" },
                { text: "Book Free Consultation", link: "/contact" }
            ],
        },
        bridge: {
            title: "Sustainability in Real Estate",
            description:
                "Green homes are not just a trend—they’re a necessity for the future.",
            checklist: [
                "Solar energy integration.",
                "Rainwater harvesting.",
                "Energy-efficient appliances.",
            ],
        },
        handbook: {
            title: "Eco Construction Handbook",
            description:
                "Step-by-step guide to sustainable building practices.",
            images: [
                "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600"
            ],
            author: {
                name: "Meera Patel",
                bio: "Environmental engineer and sustainability consultant.",
            },
            aiSection: {
                title: "AI for Energy Efficiency",
                description: "Optimize energy usage with smart AI solutions.",
                buttonText: "Go Green",
            },
        },
    },
    {
        id: 5,
        title: "Luxury Living Trends",
        description:
            "Explore the latest innovations in premium real estate.",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
        hero: {
            heading: "Luxury Living Redefined",
            subheading:
                "From smart homes to exclusive amenities, luxury is evolving.",
            buttons: [
                { text: "Explore Projects", link: "/portfolio" },
                { text: "Book Free Consultation", link: "/contact" }
            ],
        },
        bridge: {
            title: "What Defines Luxury Today?",
            description:
                "It’s not just marble floors—it’s about lifestyle and exclusivity.",
            checklist: [
                "Smart home automation.",
                "Private amenities.",
                "Exclusive community living.",
            ],
        },
        handbook: {
            title: "Luxury Buyer’s Handbook",
            description:
                "Understand what makes a property truly luxurious.",
            images: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600"
            ],
            author: {
                name: "Arjun Kapoor",
                bio: "Luxury property consultant with global experience.",
            },
            aiSection: {
                title: "AI in Luxury Design",
                description: "Personalized living spaces powered by AI.",
                buttonText: "Discover Trends",
            },
        },
    },
    {
        id: 6,
        title: "Commercial Real Estate Insights",
        description:
            "How to navigate the world of offices, malls, and retail spaces.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        hero: {
            heading: "The Future of Commercial Spaces",
            subheading:
                "From co-working hubs to mega malls, commercial real estate is evolving fast.",
            buttons: [
                { text: "Explore Projects", link: "/portfolio" },
                { text: "Book Free Consultation", link: "/contact" }
            ],
        },
        bridge: {
            title: "Why Commercial Matters",
            description:
                "Commercial property is the backbone of urban growth and investment.",
            checklist: [
                "Understand leasing models.",
                "Evaluate footfall and accessibility.",
                "Plan for long-term tenant retention.",
            ],
        },
        handbook: {
            title: "Commercial Investor’s Handbook",
            description:
                "Everything you need to know about offices, retail, and industrial spaces.",
            images: [
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600"
            ],
            author: {
                name: "Sara Malik",
                bio: "Commercial real estate strategist and analyst.",
            },
            aiSection: {
                title: "AI for Retail Analytics",
                description: "Predict consumer behavior and optimize spaces.",
                buttonText: "Analyze Trends",
            },
        },
    },
];
