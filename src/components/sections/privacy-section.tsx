"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  UserX,
  CloudOff,
  EyeOff,
  BarChart2,
  Database,
  Bell,
} from "lucide-react";

const privacyPoints = [
  { icon: UserX, text: "No account required" },
  { icon: CloudOff, text: "No cloud dependency" },
  { icon: EyeOff, text: "No tracking" },
  { icon: BarChart2, text: "No analytics" },
  { icon: Shield, text: "No personal data collection" },
  { icon: Database, text: "SQLite local storage" },
  { icon: Bell, text: "Local notifications only" },
];

function ShieldIllustration({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            isInView
              ? { scale: 1, opacity: 0.15 - ring * 0.03 }
              : {}
          }
          transition={{ delay: ring * 0.2, duration: 0.8 }}
          className="absolute rounded-full border border-primary/30"
          style={{
            width: 120 + ring * 60,
            height: 120 + ring * 60,
          }}
        />
      ))}

      {/* Shield */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 shadow-[0_0_80px_rgba(74,144,217,0.25)]">
          <Shield className="h-16 w-16 text-primary" strokeWidth={1.5} />
        </div>

        {/* Floating particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary/60"
            style={{
              top: `${20 + (i % 3) * 30}%`,
              left: `${10 + (i % 2) * 80}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function PrivacySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="privacy" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="container-wide relative" ref={ref}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Privacy First
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Your data never
              <br />
              <span className="text-gradient">leaves your device.</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/50">
              Milk Bill is built local-first. Every delivery, bill, and payment
              stays on your phone in a private SQLite database. No servers. No
              accounts. No compromises.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {privacyPoints.map((point, i) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl glass px-4 py-3"
                >
                  <point.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-white/70">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex h-80 items-center justify-center lg:h-96"
          >
            <ShieldIllustration isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
