interface NumberedCardProp {
  id: number;
  title?: string | null;
  desc: string;
}

export default function NumberedCard({
  id,
  title = null,
  desc,
}: NumberedCardProp) {
  return (
    <article
      key={id}
      className="group ring-brand rounded-xl bg-transparent px-10 py-12 text-center text-white ring-4 backdrop-blur"
    >
      <span className="bg-brand brand-animate mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded text-3xl font-black group-hover:scale-70">
        {id}
      </span>
      <div className="brand-animate group-hover:scale-105">
        {title === null ? null : (
          <h4 className="text-xl font-black uppercase">{title}</h4>
        )}
        <p className="text-sm text-gray-400 lg:text-base">{desc}</p>
      </div>
    </article>
  );
}
