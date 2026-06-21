"use client";

import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { PhoneMockup } from "@/components/phone-mockup/phone-mockup";
import { PLAY_STORE_URL, APP_TAGLINE } from "@/lib/constants";

const stats = [
  { value: 10000, suffix: "+", label: "Deliveries Tracked" },
  { value: 500000, prefix: "₹", suffix: "+", label: "Bills Managed" },
  { value: 100, suffix: "%", label: "Offline & Private" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <AuroraBackground />

      <div className="container-wide relative z-10 px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium text-accent">
                Available on Google Play
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              <span className="text-gradient">Milk Tracking.</span>
              <br />
              <span className="text-white">Reimagined.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-10 text-lg leading-relaxed text-white/50 md:text-xl"
            >
              {APP_TAGLINE}. Track daily deliveries, monthly bills, payments and
              vacations — all stored privately on your device.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton as="a" href={PLAY_STORE_URL}>
                <Button size="lg" className="gap-2">
                  <Play className="h-4 w-4 fill-current" />
                  Download on Google Play
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Features
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-6 border-t border-white/5 pt-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white md:text-3xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-1 text-xs text-white/40 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
