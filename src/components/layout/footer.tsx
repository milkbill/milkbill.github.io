"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, ExternalLink } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import {
  APP_NAME,
  APP_VERSION,
  PLAY_STORE_URL,
  CONTACT_EMAIL,
} from "@/lib/constants";

const footerLinks = {
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
    { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#070f1a]">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="container-wide relative section-padding !pt-16 !pb-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <Droplets className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-semibold text-white">{APP_NAME}</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/40">
              Track daily milk deliveries, monthly bills, payments, and vacation
              days — all stored privately on your device.
            </p>
            <MagneticButton as="a" href={PLAY_STORE_URL}>
              <Button variant="outline" size="sm" className="gap-2">
                Download on Google Play
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </MagneticButton>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row"
        >
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Version {APP_VERSION} · com.milktrack.customer
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
