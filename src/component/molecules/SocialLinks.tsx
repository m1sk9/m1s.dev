interface SocialLinksProps {
    src: string;
    text: string;
}

const items: SocialLinksProps[] = [
    { src: "https://github.com/m1sk9", text: "GitHub" },
    { src: "https://mstdn.maud.io/@m1sk9", text: "Mastodon" },
];

export default function SocialLinks() {
    return (
        <div class="flex justify-center mt-4">
            {items.map((i, k) => (
                <a
                    key={k}
                    href={i.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline mx-1 text-blue-500"
                >
                    {i.text}
                </a>
            ))}
        </div>
    );
}
