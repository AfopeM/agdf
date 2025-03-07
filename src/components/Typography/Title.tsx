export default function Title({ text }: { text: string }) {
  return (
    <h1 className="text-3xl font-black text-white capitalize md:text-5xl">
      {text}
    </h1>
  );
}
