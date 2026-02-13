import type { Metadata } from "next";
import { Inter, Source_Serif_4, Montserrat } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Genève Center',
    default: 'Genève Center for Parliamentary Governance | Geneva-based Excellence',
  },
  description: "The Genève Center for Parliamentary Governance is a Geneva-based institution dedicated to excellence in parliamentary governance worldwide.",
  keywords: ["Genève", "Geneva", "Parliamentary Governance", "Parliaments", "Democratic Governance", "Switzerland"],
  openGraph: {
    title: 'Genève Center for Parliamentary Governance',
    description: 'Geneva-based institution dedicated to excellence in parliamentary governance worldwide.',
    url: 'https://gipg.ch',
    siteName: 'Genève Center',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genève Center for Parliamentary Governance',
    description: 'Geneva-based institution dedicated to excellence in parliamentary governance worldwide.',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${montserrat.variable} font-serif antialiased bg-background-custom text-ink min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
