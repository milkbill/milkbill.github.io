import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Milk Bill team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="container-narrow section-padding !pb-0">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-4 rounded-2xl glass p-6 transition-colors hover:bg-white/8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-white/40">Email us directly</p>
                <p className="font-medium text-white">{CONTACT_EMAIL}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl glass p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-white/40">Response time</p>
                <p className="font-medium text-white">Within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
