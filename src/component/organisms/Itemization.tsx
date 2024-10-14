export interface ItemizationProps {
    name: string;
    description: string;
    src: string;
    date: string;
    isArchive?: boolean;
}

export default function Itemization({ items }: { items: ItemizationProps[] }) {
    return (
        <div>
            {items.map((i, k) => (
                <details key={k}>
                    <summary>
                        {i.name} ({i.date})
                        {i.isArchive && (
                            <span class="text-gray-500 ml-4 text-sm">
                                Archive / Not Maintained
                            </span>
                        )}
                    </summary>
                    <ul class="ml-8">
                        {i.description}
                    </ul>
                    <a
                        href={i.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="ml-8"
                    >
                        {i.src}
                    </a>
                </details>
            ))}
        </div>
    );
}
