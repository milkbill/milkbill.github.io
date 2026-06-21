"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CalendarDays,
  Receipt,
  Palmtree,
  History,
  Bell,
  WifiOff,
  HardDrive,
  Store,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  illustration: React.ReactNode;
}

function DailyIllustration() {
  return (
    <div className="flex items-end gap-1.5">
      {[2, 2, 1.5, 2, 0, 2, 2].map((v, i) => (
        <div
          key={i}
          style={{ height: v === 0 ? 8 : v * 16 }}
          className={`w-3 rounded-full ${v === 0 ? "bg-white/10" : "bg-primary/60"}`}
        />
      ))}
    </div>
  );
}

function BillingIllustration() {
  return (
    <div className="space-y-2">
      {[80, 60, 100].map((w, i) => (
        <div
          key={i}
          style={{ width: `${w}%` }}
          className="h-2 rounded-full bg-gradient-to-r from-primary/40 to-primary"
        />
      ))}
    </div>
  );
}

function VacationIllustration() {
  return (
    <div className="flex gap-2">
      {["✓", "✓", "—", "—", "✓"].map((s, i) => (
        <span
          key={i}
          className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs ${
            s === "—" ? "bg-amber-500/20 text-amber-300" : "bg-primary/20 text-primary"
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function PaymentIllustration() {
  return (
    <div className="space-y-2">
      {["₹3,480", "₹2,940"].map((amt, i) => (
        <div
          key={amt}
          className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-xs"
        >
          <span className="text-white/40">Jun {5 - i * 30}</span>
          <span className="font-medium text-primary">{amt}</span>
        </div>
      ))}
    </div>
  );
}

function ReminderIllustration() {
  return (
    <div className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-xs text-primary">
      Bill due in 3 days
    </div>
  );
}

function OfflineIllustration() {
  return (
    <div className="relative">
      <WifiOff className="h-12 w-12 text-white/20" />
      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary" />
    </div>
  );
}

function StorageIllustration() {
  return (
    <div className="font-mono text-xs text-primary/80">
      <p>SQLite</p>
      <p className="text-white/30">local.db</p>
    </div>
  );
}

function VendorIllustration() {
  return (
    <div className="rounded-xl bg-white/5 p-3 text-xs">
      <p className="font-medium text-white">Sharma Dairy</p>
      <p className="text-white/40">₹60/L · 2L default</p>
    </div>
  );
}

const features: Feature[] = [
  {
    title: "Daily Tracking",
    description: "Log every delivery in one tap. See your week fill up beautifully.",
    icon: CalendarDays,
    className: "md:col-span-2 md:row-span-2",
    illustration: <DailyIllustration />,
  },
  {
    title: "Monthly Billing",
    description: "Automatic bill generation with rates, credits, and due dates.",
    icon: Receipt,
    className: "md:col-span-2",
    illustration: <BillingIllustration />,
  },
  {
    title: "Vacation Mode",
    description: "Mark days off. They're excluded from your bill instantly.",
    icon: Palmtree,
    illustration: <VacationIllustration />,
  },
  {
    title: "Payment History",
    description: "Cash, UPI, bank — every payment recorded and searchable.",
    icon: History,
    illustration: <PaymentIllustration />,
  },
  {
    title: "Bill Reminders",
    description: "Local notifications so you never miss a due date.",
    icon: Bell,
    illustration: <ReminderIllustration />,
  },
  {
    title: "Offline First",
    description: "Works without internet. Your data is always accessible.",
    icon: WifiOff,
    illustration: <OfflineIllustration />,
  },
  {
    title: "Local Storage",
    description: "SQLite database on your device. Fast, private, permanent.",
    icon: HardDrive,
    illustration: <StorageIllustration />,
  },
  {
    title: "Vendor Management",
    description: "Store vendor name, phone, rate, and default quantity.",
    icon: Store,
    className: "md:col-span-2",
    illustration: <VendorIllustration />,
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group glow-border relative overflow-hidden rounded-3xl glass p-6 transition-all duration-500 hover:bg-white/[0.07] hover:shadow-[0_0_60px_rgba(74,144,217,0.12)]",
        feature.className
      )}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />

      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15">
          <feature.icon className="h-5 w-5 text-accent" />
        </div>
        <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
          In app
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-white/45">
        {feature.description}
      </p>

      <div className="mt-auto">{feature.illustration}</div>
    </motion.div>
  );
}

export function BentoFeatures() {
  return (
    <section id="features" className="relative section-padding">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="container-wide relative">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Everything you need.
            <br />
            <span className="text-gradient-subtle">Available in the app.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/45">
            All features below ship in the free Android app on Google Play.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(180px,auto)]">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
