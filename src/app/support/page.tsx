import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, HelpCircle, Mail, FileText, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { APP_NAME, CONTACT_EMAIL, PLAY_STORE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help and support for ${APP_NAME}.`,
};

const supportTopics = [
  {
    icon: HelpCircle,
    title: "Getting Started",
    description:
      "Install from Google Play, set up your vendor details (name, rate, default quantity), and start logging daily deliveries.",
  },
  {
    icon: FileText,
    title: "Billing Questions",
    description:
      "Bills are calculated automatically based on your daily entries, rate, and vacation days. Verify totals with your vendor before paying.",
  },
  {
    icon: Mail,
    title: "Data & Privacy",
    description:
      "All data is stored locally on your device. Uninstalling the app removes all data. No cloud backup is currently available.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding pt-32">
        <div className="container-narrow">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Support
          </h1>
          <p className="mb-12 text-lg text-white/50">
            We&apos;re here to help you get the most out of {APP_NAME}.
          </p>

          <div className="mb-12 space-y-4">
            {supportTopics.map((topic) => (
              <div
                key={topic.title}
                className="flex gap-4 rounded-2xl glass p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <topic.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">
                    {topic.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/contact"
              className="rounded-2xl border border-primary/20 bg-primary/10 p-6 transition-colors hover:bg-primary/15"
            >
              <h3 className="mb-2 font-semibold text-white">Contact Us</h3>
              <p className="text-sm text-white/50">
                Send us a message through our contact form.
              </p>
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-2xl glass p-6 transition-colors hover:bg-white/8"
            >
              <h3 className="mb-2 font-semibold text-white">Email Support</h3>
              <p className="text-sm text-primary">{CONTACT_EMAIL}</p>
            </a>
          </div>

          <div className="mt-12 rounded-2xl glass p-6 text-center">
            <p className="mb-4 text-white/50">
              Need the app? Download from Google Play.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              Download {APP_NAME}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
