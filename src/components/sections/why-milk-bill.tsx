"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check, BookOpen, Smartphone } from "lucide-react";

const comparisons = [
  { bad: "Manual Calculation", good: "Automatic Bills" },
  { bad: "Lost Records", good: "Permanent History" },
  { bad: "Forgot Payments", good: "Payment Tracking" },
  { bad: "No Reminders", good: "Notifications" },
];

export function WhyMilkBill() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="container-wide relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Why Milk Bill
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Leave the notebook behind.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">
                <BookOpen className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Traditional Notebook
                </h3>
                <p className="text-sm text-white/40">The old way</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, i) => (
                <motion.div
                  key={item.bad}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-red-500/5 px-4 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/15">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  <span className="text-sm text-white/60">{item.bad}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Milk Bill */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="glow-border overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-transparent p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Milk Bill</h3>
                <p className="text-sm text-primary">The modern way</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, i) => (
                <motion.div
                  key={item.good}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 rounded-xl bg-primary/10 px-4 py-3 transition-colors hover:bg-primary/15"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-white">{item.good}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
