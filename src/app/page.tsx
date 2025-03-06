import Link from "next/link";
import { SectionHeading, FlexCardWrapper } from "@/components";

export default function Home() {
  return (
    <>
      <header className="relative flex h-screen w-full items-center justify-center bg-[url('/hero.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_100%)]" />
        <div className="brand-width relative z-20 -mt-12 flex flex-col items-center justify-center gap-4 text-center md:mt-0">
          <h1 className="text-3xl font-black text-white capitalize md:text-5xl">
            <span className="text-brand bg-brand/30 mx-auto mb-4 block w-max rounded px-6 py-2 text-sm font-light tracking-wider uppercase backdrop-blur">
              Civil Society Think Tank
            </span>
            Empowering Africa’s <br />
            Green Future
          </h1>
          <p className="max-w-xl text-gray-400 lg:max-w-2xl lg:text-xl">
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

      <main>
        {/* SECTION-01 */}
        <section className="bg-black py-24">
          <div className="brand-width">
            <SectionHeading
              isLight
              title="section heading"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                deleniti minima maiores?"
            />
            <FlexCardWrapper />
          </div>
        </section>

        {/* SECTION-02 */}
        <section className="relative bg-[url('/hero.jpeg')] bg-cover bg-center py-24">
          <div className="absolute inset-0 z-10 h-full w-full bg-black/80 bg-[linear-gradient(to_top,rgba(0,0,0,0)_30%,rgba(0,0,0,1)_100%)]" />
          <div className="brand-width relative z-10">
            <SectionHeading
              isLight
              isReverse
              title="section heading"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                deleniti minima maiores?"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[1, 2, 3, 4].map((num, i) => {
                return (
                  <article
                    key={num}
                    className="group ring-brand rounded-xl bg-transparent px-10 py-12 text-center text-white ring-4 backdrop-blur"
                  >
                    <span className="bg-brand brand-animate mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded text-3xl font-black group-hover:scale-80">
                      {i + 1}
                    </span>
                    <div className="brand-animate group-hover:scale-105">
                      <h4 className="text-xl font-black uppercase">title</h4>
                      <p className="text-sm text-gray-400 lg:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, amet dicta, rem officia veniam rerum at velit
                        quo cupiditate iusto magni.
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// bg-[url('/${"hero.jpeg"}')] ${nums.length % 2 !== 0 && nums.length - 1 === i ? "md:col-span-2 lg:col-span-3" : ""}
