import { Link } from "react-router-dom"

export default function AboutHome() {
    return (
        <section className="relative h-[78vh] flex items-center justify-start overflow-hidden">
            <div className="absolute inset-0 bg-gray-900">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover brightness-[0.6]"
                >
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-mountain-landscape-with-low-clouds-at-sunset-41481-large.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="relative z-10 px-4 md:px-[50px] max-w-2xl pt-[200px] md:pt-[330px] pb-24 md:pb-40">
                <h1 className="!text-white text-4xl md:text-5xl font-bold mb-3 font-serif animate-fadeIn">Estate-hub </h1>
                <p className="!text-white text-base md:text-xl mb-6 font-sans leading-relaxed">
                    Demo Content, Yeh page client ke requirement ke mutabiq "About" ke mandatory sections ko include karta hai aur saath hi poori.
                </p>
                <Link
                    to="/contact"
                    className="w-[160px] h-[48px] bg-white text-[#002349] rounded-[8px] font-normal hover:bg-[#C29B40] hover:text-white transition-all shadow-xl flex items-center justify-center text-base"
                >
                    Book Consultant
                </Link>
            </div>
        </section>
    )
};