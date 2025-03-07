import Link from "next/link";

interface PrimaryButtonProp {
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
}: PrimaryButtonProp) {
  const sizeStyle = size === "sm" ? "text-xs lg:text-base px-3" : "px-6";

  return (
    <Link
      href={`/${link}`}
      target={newTab ? "_blank" : ""}
      className={`${sizeStyle} bg-brand hover:text-brand brand-animate rounded py-2 font-bold tracking-wider text-white capitalize hover:scale-105 hover:bg-white`}
    >
      {text}
    </Link>
  );
}
