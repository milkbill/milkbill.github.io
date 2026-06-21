import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${APP_NAME} — all data stored locally on your device.`,
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mb-12 text-white/40">Last updated: June 20, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70">
            <section className="rounded-2xl glass p-6">
              <p className="text-lg leading-relaxed">
                {APP_NAME} (&quot;the App&quot;) is a local-first milk delivery
                tracking application developed for Android devices. Your privacy
                is fundamental to how we built this app.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Data We Collect
              </h2>
              <p className="leading-relaxed">
                We do <strong className="text-white">not</strong> collect, store,
                or transmit any personal data to external servers.
              </p>
              <p className="mt-4 leading-relaxed">
                All information you enter — including vendor details, daily
                deliveries, payments, and vacation dates — is stored{" "}
                <strong className="text-primary">locally on your device</strong>{" "}
                using SQLite. No account is required.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Notifications
              </h2>
              <p className="leading-relaxed">
                The App may schedule <strong className="text-white">local notifications</strong> to
                remind you of bill due dates. These notifications are processed
                entirely on your device. We do not use push notification services
                that transmit data to external servers.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                App Updates
              </h2>
              <p className="leading-relaxed">
                The App may check a public version file to inform you when
                updates are available on the Google Play Store. This check
                retrieves only version metadata — no personal data is sent
                during this check.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Third-Party Tracking
              </h2>
              <p className="leading-relaxed">
                We do <strong className="text-white">not</strong> use analytics
                services, advertising networks, crash reporting tools, or any
                third-party tracking SDKs. We do not share data with third
                parties because we do not collect data.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Website Contact Form
              </h2>
              <p className="leading-relaxed">
                If you submit the contact form on our website, we collect only
                the information you provide (name, email, and message) to
                respond to your inquiry. This data is used solely for
                communication purposes and is not sold or shared with third
                parties.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Data Deletion
              </h2>
              <p className="leading-relaxed">
                Uninstalling the App removes all locally stored data from your
                device. There is no cloud copy to delete.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed">
                The App is not directed at children under 13. We do not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Contact
              </h2>
              <p className="leading-relaxed">
                For questions about this policy, contact us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Changes
              </h2>
              <p className="leading-relaxed">
                We may update this policy from time to time. Changes will be
                posted at this URL with an updated date. Continued use of the
                App after changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
