"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { APP_COLORS, APP_TAGLINE } from "@/lib/constants";

const C = APP_COLORS;

function MiniBrand({ tagline = false }: { tagline?: boolean }) {
  return (
    <div className="mb-2">
      <div className="flex items-baseline">
        <span className="text-[10px] font-extrabold" style={{ color: C.primary }}>
          Milk
        </span>
        <span className="text-[10px] font-light" style={{ color: C.primaryLight }}>
          {" "}
          Bill
        </span>
      </div>
      {tagline ? (
        <p
          className="mt-0.5 text-[6px] font-semibold uppercase tracking-wider"
          style={{ color: C.textMuted }}
        >
          {APP_TAGLINE}
        </p>
      ) : null}
    </div>
  );
}

function MiniCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-lg border p-2 ${className}`}
      style={{ backgroundColor: C.surface, borderColor: C.border, ...style }}
    >
      {children}
    </div>
  );
}

const screenshots = [
  {
    id: "home",
    label: "Home",
    description: "Today’s delivery and monthly balance at a glance",
    content: (
      <div className="h-full p-3" style={{ backgroundColor: C.background }}>
        <MiniBrand tagline />
        <p className="text-sm font-bold" style={{ color: C.text }}>
          June 2026
        </p>
        <MiniCard
          className="mt-2"
          style={{ backgroundColor: C.primaryLight, borderColor: C.primaryLight }}
        >
          <p className="text-[8px] text-white/85">June 2026 balance</p>
          <p className="text-lg font-bold text-white">₹3,480</p>
          <p className="text-[8px] text-white/90">Due on 5 Jul</p>
        </MiniCard>
        <MiniCard
          className="mt-2"
          style={{ backgroundColor: C.cream, borderColor: "#F0E4C8" }}
        >
          <div className="flex justify-between">
            <p className="text-[9px] font-bold" style={{ color: C.text }}>
              Today
            </p>
            <span
              className="rounded-full px-1.5 py-0.5 text-[7px] font-semibold"
              style={{ backgroundColor: C.paid, color: C.success }}
            >
              Delivered
            </span>
          </div>
          <p className="mt-1 text-[8px]" style={{ color: C.textSecondary }}>
            2 L · ₹120
          </p>
        </MiniCard>
      </div>
    ),
  },
  {
    id: "deliveries",
    label: "Deliveries",
    description: "Log daily litres and pause days",
    content: (
      <div className="h-full p-3" style={{ backgroundColor: C.background }}>
        <MiniBrand />
        <p className="text-sm font-bold" style={{ color: C.text }}>
          June 2026
        </p>
        <p className="text-[8px]" style={{ color: C.textSecondary }}>
          20 delivered · 2 paused · 58 L
        </p>
        {[
          { date: "Sun, 21 Jun", qty: "2 L · ₹120", today: true },
          { date: "Sat, 20 Jun", qty: "2 L · ₹120", today: false },
          { date: "Fri, 19 Jun", qty: "Paused", today: false },
        ].map((row) => (
          <MiniCard
            key={row.date}
            className="mt-2"
            style={
              row.today
                ? { backgroundColor: C.cream, borderColor: C.primary, borderWidth: 1.5 }
                : undefined
            }
          >
            <div className="flex justify-between">
              <p
                className="text-[9px] font-semibold"
                style={{ color: row.today ? C.primary : C.text }}
              >
                {row.date}
              </p>
              <span
                className="rounded-full px-1.5 py-0.5 text-[7px] font-semibold"
                style={{
                  backgroundColor: row.qty === "Paused" ? C.paused : C.paid,
                  color: row.qty === "Paused" ? C.primary : C.success,
                }}
              >
                {row.qty === "Paused" ? "Paused" : "Delivered"}
              </span>
            </div>
            {row.qty !== "Paused" ? (
              <p className="mt-0.5 text-[8px]" style={{ color: C.textSecondary }}>
                {row.qty}
              </p>
            ) : null}
          </MiniCard>
        ))}
      </div>
    ),
  },
  {
    id: "bills",
    label: "Bills",
    description: "Auto-calculated monthly statements",
    content: (
      <div className="h-full p-3" style={{ backgroundColor: C.background }}>
        <MiniBrand />
        <MiniCard
          style={{ backgroundColor: C.primaryLight, borderColor: C.primaryLight }}
        >
          <p className="text-[8px] text-white/85">Balance due</p>
          <p className="text-lg font-bold text-white">₹3,480</p>
        </MiniCard>
        <MiniCard className="mt-2">
          <p className="mb-1 text-[9px] font-bold" style={{ color: C.text }}>
            Usage
          </p>
          {[
            ["Delivery days", "20"],
            ["Total liters", "58 L"],
            ["Bill amount", "₹3,480"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-0.5 text-[8px]">
              <span style={{ color: C.textSecondary }}>{label}</span>
              <span
                className="font-semibold"
                style={{ color: label === "Bill amount" ? C.primary : C.text }}
              >
                {value}
              </span>
            </div>
          ))}
        </MiniCard>
      </div>
    ),
  },
  {
    id: "payments",
    label: "Payments",
    description: "Cash, UPI, bank — full payment history",
    content: (
      <div className="h-full p-3" style={{ backgroundColor: C.background }}>
        <MiniBrand />
        <MiniCard
          style={{ backgroundColor: C.primaryLight, borderColor: C.primaryLight }}
        >
          <p className="text-[8px] text-white/85">Outstanding balance</p>
          <p className="text-lg font-bold text-white">₹280</p>
        </MiniCard>
        {[
          { amt: "₹3,200", date: "Mon, 05 Jun", method: "UPI" },
          { amt: "₹2,940", date: "Wed, 03 May", method: "Cash" },
        ].map((p) => (
          <MiniCard key={p.date} className="mt-2">
            <div className="flex justify-between">
              <p className="text-[9px] font-bold" style={{ color: C.text }}>
                {p.amt}
              </p>
              <span
                className="rounded-full px-1.5 py-0.5 text-[7px]"
                style={{ backgroundColor: C.milk, color: C.textSecondary }}
              >
                {p.method}
              </span>
            </div>
            <p className="text-[8px]" style={{ color: C.textSecondary }}>
              {p.date}
            </p>
          </MiniCard>
        ))}
      </div>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    description: "Vendor name, rate, and default quantity",
    content: (
      <div className="h-full p-3" style={{ backgroundColor: C.background }}>
        <MiniBrand />
        <MiniCard
          className="mt-1"
          style={{ backgroundColor: C.cream, borderColor: "#F0E4C8" }}
        >
          <p className="text-[8px] font-semibold" style={{ color: C.textMuted }}>
            Vendor
          </p>
          <p className="text-[10px] font-bold" style={{ color: C.text }}>
            Sharma Dairy
          </p>
        </MiniCard>
        <MiniCard className="mt-2">
          <p className="text-[8px]" style={{ color: C.textSecondary }}>
            Rate per litre
          </p>
          <p className="text-[10px] font-semibold" style={{ color: C.text }}>
            ₹60
          </p>
        </MiniCard>
        <MiniCard className="mt-2">
          <p className="text-[8px]" style={{ color: C.textSecondary }}>
            Default quantity
          </p>
          <p className="text-[10px] font-semibold" style={{ color: C.text }}>
            2 L
          </p>
        </MiniCard>
      </div>
    ),
  },
];

export function AppShowcase() {
  const [active, setActive] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true });

  const prev = () => setActive((a) => (a - 1 + screenshots.length) % screenshots.length);
  const next = () => setActive((a) => (a + 1) % screenshots.length);

  return (
    <section id="showcase" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container-wide relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            App Showcase
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Designed for clarity.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/45">
            Every screen below matches the real Android app — available now on
            Google Play.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center" style={{ perspective: "1200px" }}>
          <div className="relative flex h-[480px] w-full max-w-4xl items-center justify-center">
            {screenshots.map((shot, i) => {
              const offset = i - active;
              const absOffset = Math.abs(offset);
              const isActive = i === active;

              return (
                <motion.div
                  key={shot.id}
                  animate={{
                    x: offset * 180,
                    z: isActive ? 0 : -absOffset * 100,
                    rotateY: offset * -25,
                    scale: isActive ? 1 : 0.85 - absOffset * 0.05,
                    opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute w-[220px] cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => setActive(i)}
                >
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass px-4 py-1.5 text-xs text-white"
                    >
                      {shot.label}
                    </motion.div>
                  )}

                  <div
                    className="rounded-[2rem] border border-white/15 bg-gradient-to-b from-[#2a2a2a] to-[#141414] p-1.5 shadow-2xl transition-shadow"
                    style={
                      isActive
                        ? { boxShadow: `0 0 80px ${C.accent}33` }
                        : undefined
                    }
                  >
                    <div className="overflow-hidden rounded-[1.7rem]">
                      <div className="aspect-[9/19]">{shot.content}</div>
                    </div>
                  </div>

                  {isActive && (
                    <div
                      className="absolute -bottom-6 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full blur-xl"
                      style={{ backgroundColor: `${C.accent}1A` }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full glass transition-colors hover:bg-white/10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-accent" : "w-2 bg-white/20"
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full glass transition-colors hover:bg-white/10"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 text-center text-sm text-white/40"
          >
            {screenshots[active].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
