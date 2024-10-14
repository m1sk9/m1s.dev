import Itemization, {
    type ItemizationProps,
} from "../organisms/Itemization.tsx";

const items: ItemizationProps[] = [
    {
        name: "babyrite",
        description: "✨ A citation message Discord bot.",
        src: "https://github.com/m1sk9/babyrite",
        date: "2023-08-27 ~ ",
    },
    {
        name: "fromis",
        description: "🫧 GitHub Permalinks Discord Extractor",
        src: "https://github.com/m1sk9/fromis",
        date: "2024-08-31 ~ ",
    },
    {
        name: "pulsate-dev/pulsate",
        description:
            "Easy-to-change, faster, developer friendly next generation decentralized social media.",
        src: "https://github.com/pulsate-dev/pulsate",
        date: "2023-09-10 ~ ",
    },
    {
        name: "approvers/ichiyoAI",
        description: "ChatGPT / Gemini / DALL-E が利用できる Discord Bot",
        src: "https://github.com/approvers/ichiyoAI",
        date: "2023-07-24 ~ 2024-02-16",
        isArchive: true,
    },
    {
        name: "approvers/OreOreBot2",
        description: "",
        src: "https://github.com/approvers/OreOreBot2",
        date: "2022-01-02 ~ 2024-02-10",
        isArchive: true,
    },
];

export default function SoftwareList() {
    return (
        <div class="mt-12 mx-auto w-full max-w-2xl">
            <h2 class="text-2xl text-left">
                ソフトウェア
            </h2>
            <ul class="list-disc list-inside text-left mt-2">
                {items.map((i, k) => <Itemization key={k} items={[i]} />)}
            </ul>
        </div>
    );
}
