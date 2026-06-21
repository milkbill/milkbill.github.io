"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Does it work offline?",
    answer:
      "Yes. Milk Bill is fully offline-first. All features — daily tracking, billing, payments, and vacation mode — work without an internet connection. Your data is stored locally on your device using SQLite.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No account is required. Simply install the app and start tracking. There is no sign-up, login, or email verification. Your data belongs to you from the first tap.",
  },
  {
    question: "Is my data uploaded?",
    answer:
      "Never. Milk Bill does not upload, sync, or transmit any of your personal data to external servers. Everything stays on your device. Uninstalling the app removes all data.",
  },
  {
    question: "Can I export my records?",
    answer:
      "Yes. You can share and export your bill statements directly from the app using the built-in sharing feature. Export your monthly bills as text to send via WhatsApp, email, or any messaging app.",
  },
  {
    question: "Will cloud backup be added later?",
    answer:
      "Cloud backup is not currently available and is not planned for the near term. Milk Bill is intentionally designed as a local-first, privacy-focused app. If cloud features are ever added, they will be strictly opt-in with clear disclosure.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative section-padding">
      <div className="container-narrow relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Common questions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
