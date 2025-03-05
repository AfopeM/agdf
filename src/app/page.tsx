import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="relative flex h-[800px] w-full items-center justify-center">
        <Image
          fill
          priority
          alt="hero image"
          src="/hero.jpeg"
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80" />
        <div className="brand-width relative z-20 flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-4xl font-black text-white capitalize md:text-5xl">
            <span className="text-brand bg-brand/30 mx-auto mb-2 block w-max rounded px-6 py-2 text-sm font-light tracking-wider uppercase">
              Civil Society Think Tank
            </span>
            Empowering Africa’s <br />
            Green Future
          </h1>
          <p className="max-w-lg text-gray-400">
            Join AGDF in pioneering sustainable innovation and transformative
            green growth. Together, we’re shaping a resilient, eco-friendly
            tomorrow.
          </p>
          <Link
            href="/about"
            className="bg-brand hover:text-brand brand-animate mt-8 rounded px-6 py-2 font-bold tracking-wider text-white capitalize hover:scale-105 hover:bg-white"
          >
            Learn More
          </Link>
        </div>
      </header>

      <main></main>
    </>
  );
}
