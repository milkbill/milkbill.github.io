import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for using ${APP_NAME} Android application.`,
};

export default function TermsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="mb-12 text-white/40">Last updated: June 20, 2026</p>

          <div className="space-y-8 text-white/70">
            <section className="rounded-2xl glass p-6">
              <p className="text-lg leading-relaxed">
                By downloading, installing, or using {APP_NAME} (&quot;the
                App&quot;), you agree to these Terms &amp; Conditions. If you do
                not agree, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                1. Description of Service
              </h2>
              <p className="leading-relaxed">
                {APP_NAME} is a local-first Android application that helps
                households track daily milk deliveries, calculate monthly bills,
                record payments, and manage vacation days. The App operates
                entirely on your device without requiring an internet connection
                or user account.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                2. License
              </h2>
              <p className="leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable,
                revocable license to use the App for personal, non-commercial
                purposes in accordance with these Terms and the Google Play
                Store terms of service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                3. User Responsibilities
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  You are responsible for the accuracy of data you enter into
                  the App.
                </li>
                <li>
                  You are responsible for backing up your device. Since all data
                  is stored locally, data loss may occur if your device is lost,
                  damaged, or reset without a backup.
                </li>
                <li>
                  Bill calculations are provided as aids. Verify amounts with
                  your milk vendor before making payments.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                4. Disclaimer of Warranties
              </h2>
              <p className="leading-relaxed">
                The App is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express or
                implied. We do not warrant that the App will be error-free,
                uninterrupted, or that bill calculations will be accurate in all
                circumstances.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by applicable law, we shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages arising from your use of the App, including
                but not limited to payment disputes, data loss, or incorrect
                bill calculations.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                6. Privacy
              </h2>
              <p className="leading-relaxed">
                Your use of the App is also governed by our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                , which describes how we handle (or rather, do not handle) your
                data.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                7. Updates
              </h2>
              <p className="leading-relaxed">
                We may release updates to improve functionality, fix bugs, or
                add features. You are encouraged to keep the App updated via
                the Google Play Store.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                8. Termination
              </h2>
              <p className="leading-relaxed">
                You may stop using the App at any time by uninstalling it from
                your device. We reserve the right to discontinue the App or
                restrict access at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                9. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of India, without regard to conflict of law
                principles.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                10. Contact
              </h2>
              <p className="leading-relaxed">
                For questions about these Terms, contact us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
