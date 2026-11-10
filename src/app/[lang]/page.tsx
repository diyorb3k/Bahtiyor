import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/lib/dictionaries";
import { extra } from "@/lib/extra";
import { site } from "@/lib/site";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { VideoShowcase } from "@/components/video-showcase";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { MobileCta } from "@/components/mobile-cta";
import { LangSync } from "@/components/lang-sync";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = dictionaries[lang];
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `${site.url}/${l}`]),
  );
  languages["x-default"] = `${site.url}/uz`;
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: { canonical: `${site.url}/${lang}`, languages },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url: `${site.url}/${lang}`,
      images: [site.images.portrait],
      locale: lang === "uz" ? "uz_UZ" : lang === "ru" ? "ru_RU" : "en_US",
    },
  };
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = dictionaries[lang];
  const e = extra[lang];

  return (
    <>
      <LangSync lang={lang} />
      <Header lang={lang} d={d} />
      <main>
        <Hero lang={lang} d={d} />
        <About d={d} />
        <VideoShowcase d={d} />
        <Services d={d} />
        <Process e={e} />
        <Contact lang={lang} d={d} e={e} />
      </main>
      <Footer d={d} />
      <FloatingButtons label={d.floating} />
      <MobileCta e={e} />
    </>
  );
}
