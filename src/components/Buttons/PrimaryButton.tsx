import Link from "next/link";

interface IPrimaryButton {
  link: string;
  text: string;
  newTab?: boolean;
  size?: "sm" | "md";
}

export default function PrimaryButton({
  text,
  link,
  newTab,
  size = "md",
}: IPrimaryButton) {
  const sizeStyle = size === "sm" ? "text-xs lg:text-base px-3" : "px-6";
  const btnStyle =
    "bg-brand hover:text-brand brand-animate rounded py-2 font-bold tracking-wider text-white capitalize hover:scale-105 hover:bg-white";

  return (
    <>
      {newTab ? (
        <Link
          href={`
            ${link}`}
          rel="noopener noreferrer"
          target="_blank"
          className={`${sizeStyle} ${btnStyle}`}
        >
          {text}
        </Link>
      ) : (
        <Link href={`${link}`} className={`${sizeStyle} ${btnStyle}`}>
          {text}
        </Link>
      )}
    </>
  );
}
