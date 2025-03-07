import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="brand-animate flex items-center justify-center gap-1 text-3xl font-bold tracking-[-0.1rem] text-white uppercase hover:scale-105"
    >
      AGDF{" "}
      <Image
        src="/logo_leaf.svg"
        alt="logo-leaf"
        width={20}
        height={20}
        className="mb-1"
      />
    </Link>
  );
}
