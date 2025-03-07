export default function Tagline({ text }: { text: string }) {
  return (
    <span className="text-brand bg-brand/30 mb-4 block rounded px-6 py-2 text-sm font-light tracking-wider uppercase backdrop-blur">
      {text}
    </span>
  );
}
