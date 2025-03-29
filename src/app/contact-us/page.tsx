import Link from "next/link";
import type { Metadata } from "next";
import ContactData from "@/data/pages/contact-us.json";
import { Title, Heading, FadeInBackground, SectionHeader } from "@/components";

export const metadata: Metadata = {
  title: "Contact Us | AGDF ",
  description:
    "Have questions or need assistance? Contact our team today. We're here to help and would love to hear from you.",
};

export default function ContactUsPage() {
  const { "contact-info": contactInfo, address } = ContactData;
  const contactBtnStyle =
    "bg-brand/50 mx-auto mt-4 block w-max rounded px-4 py-2 text-white lg:mx-0 hover:bg-gray-100 hover:text-black font-bold tracking-widest";

  return (
    <div className="text-gray-400">
      <Heading>
        <FadeInBackground direction="bottom" isDark />
        <div className="brand-width relative z-20 flex flex-col items-center justify-center gap-4 text-center md:mt-0">
          <Title text="contact us" />
        </div>
      </Heading>

      <section className="brand-width my-6 flex flex-col items-center justify-between gap-12 px-6 py-10 text-center lg:my-48 lg:flex-row lg:items-start lg:text-start">
        {/* OUR LOCATION */}
        <div className="mx-auto max-w-sm text-lg md:max-w-lg">
          <SectionHeader title="our location" isCenter />
          <h4 className="text-white">{address.institution}</h4>
          <p className="block font-light">{address.location}</p>
        </div>

        {/* CONTACT INFO */}
        <div className="border-brand lg:border-l-2 lg:pl-10">
          <SectionHeader title="get in touch" isCenter />
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <article key={info.title} className="max-w-sm">
                <h4 className="text-xl font-bold text-white capitalize">
                  {info.title}
                </h4>
                <h5>{info.content}</h5>
                {info.title === "follow us" ? (
                  <Link href={info.contact} className={contactBtnStyle}>
                    LinkedIn
                  </Link>
                ) : (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactBtnStyle}
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${info.contact}`}
                    // href={`mailto:${info.contact}`}
                  >
                    {info.contact}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
