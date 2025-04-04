interface INumberedCard {
  title: string;
  desc: string;
}
interface INumberedCards {
  cards: INumberedCard[];
  columns: string;
}

export default function NumberedCards({ cards, columns }: INumberedCards) {
  return (
    <div
      className={`grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-${columns}`}
    >
      {cards.map((item, index) => (
        <article
          key={index}
          className={`${cards.length! % 2 !== 0 && index === cards.length - 1 ? "md:col-span-2 xl:col-span-1" : ""} group ring-brand rounded-xl bg-transparent px-10 py-12 text-center text-white ring-4 backdrop-blur`}
        >
          <span className="bg-brand brand-animate mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded text-3xl font-black group-hover:scale-70">
            {index + 1}
          </span>
          <div className="brand-animate group-hover:scale-105">
            <h4 className="mb-2 text-xl font-black uppercase">{item.title}</h4>
            <p className="text-sm text-gray-400 lg:text-base">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
