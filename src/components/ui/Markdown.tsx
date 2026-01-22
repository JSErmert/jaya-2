type Props = {
  markdown: string;
};

// Minimal markdown renderer for our legal pages:
// - headings (#, ##, ###)
// - unordered lists (- item)
// - paragraphs
// This avoids extra dependencies while keeping content readable.
export default function Markdown({ markdown }: Props) {
  const lines = (markdown || "")
    .replace(/\r\n/g, "\n")
    .split("\n");

  const blocks: Array<{ type: string; text: string }> = [];
  let currentList: string[] | null = null;
  let currentPara: string[] = [];

  const flushPara = () => {
    const text = currentPara.join(" ").trim();
    if (text) blocks.push({ type: "p", text });
    currentPara = [];
  };

  const flushList = () => {
    if (currentList && currentList.length) {
      blocks.push({ type: "ul", text: currentList.join("\n") });
    }
    currentList = null;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushPara();
      flushList();
      continue;
    }

    // headings
    const h3 = line.match(/^###\s+(.*)$/);
    const h2 = line.match(/^##\s+(.*)$/);
    const h1 = line.match(/^#\s+(.*)$/);
    if (h1 || h2 || h3) {
      flushPara();
      flushList();
      blocks.push({ type: h1 ? "h1" : h2 ? "h2" : "h3", text: (h1 || h2 || h3)![1].trim() });
      continue;
    }

    // unordered list
    const li = line.match(/^-\s+(.*)$/);
    if (li) {
      flushPara();
      if (!currentList) currentList = [];
      currentList.push(li[1].trim());
      continue;
    }

    // paragraph
    flushList();
    currentPara.push(line.trim());
  }

  flushPara();
  flushList();

  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "h1") return <h2 key={i} className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">{b.text}</h2>;
        if (b.type === "h2") return <h3 key={i} className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">{b.text}</h3>;
        if (b.type === "h3") return <h4 key={i} className="font-serif text-xl md:text-2xl text-[#1A1A1A]">{b.text}</h4>;
        if (b.type === "ul") {
          const items = b.text.split("\n");
          return (
            <ul key={i} className="list-disc pl-6 space-y-2 text-[#1A1A1A]/70">
              {items.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          );
        }
        return <p key={i} className="text-[#1A1A1A]/70 leading-relaxed">{b.text}</p>;
      })}
    </div>
  );
}
