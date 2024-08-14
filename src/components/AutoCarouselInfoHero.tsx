import { PROMOTIONAL_TAGS } from "@/constants/promo";

export default function AutoCarouselInfoHero() {
    return (
        <div className="w-full overflow-hidden p-2 my-6 flex items-center justify-start max-w-4xl mx-auto relative">
            <div className="bg-gradient-to-l from-background-primary via-transparent to-background-primary w-full h-full absolute left-0 top-0 z-10" />
            <div className="scroll-container">
                <div className="scroll-content">
                    {PROMOTIONAL_TAGS.map((link, i) => (
                        <p key={i} className="navigation-link">
                            {link.name}
                        </p>
                    ))}
                    {PROMOTIONAL_TAGS.map((link, i) => (
                        <p
                            key={i + PROMOTIONAL_TAGS.length}
                            className="navigation-link"
                        >
                            {link.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
