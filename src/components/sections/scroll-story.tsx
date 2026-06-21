"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Calendar, IndianRupee, CreditCard, Palmtree } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    id: "calendar",
    headline: "Never miss a milk entry.",
    description:
      "Log daily deliveries in seconds. See your week at a glance with a beautiful calendar that fills itself as you track.",
    icon: Calendar,
    visual: "calendar",
  },
  {
    id: "bills",
    headline: "Bills calculate themselves.",
    description:
      "Set your rate once. Milk Bill totals litres, applies vacation days, and generates your monthly bill automatically.",
    icon: IndianRupee,
    visual: "bills",
  },
  {
    id: "payments",
    headline: "Your payment history. Organized.",
    description:
      "Record cash, UPI, and bank payments. Every transaction is timestamped and searchable — forever on your device.",
    icon: CreditCard,
    visual: "payments",
  },
  {
    id: "vacation",
    headline: "Going on vacation?",
    description:
      "Mark vacation days and they are automatically excluded from your bill. No manual adjustments needed.",
    icon: Palmtree,
    visual: "vacation",
  },
];

function CalendarVisual({ isInView }: { isInView: boolean }) {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const filledDays = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26];

  return (
    <div className="grid grid-cols-7 gap-2 p-4">
      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
        <div key={`${d}-${i}`} className="text-center text-xs text-white/30">
          {d}
        </div>
      ))}
      {days.map((day) => {
        const filled = filledDays.includes(day);
        return (
          <motion.div
            key={day}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView && filled
                ? { scale: 1, opacity: 1 }
                : { scale: 0.8, opacity: 0.2 }
            }
            transition={{ delay: filled ? day * 0.03 : 0, type: "spring" }}
            className={`flex aspect-square items-center justify-center rounded-xl text-sm font-medium ${
              filled
                ? "bg-accent/25 text-accent shadow-[0_0_20px_rgba(74,144,217,0.2)]"
                : "bg-white/5 text-white/20"
            }`}
          >
            {day}
          </motion.div>
        );
      })}
    </div>
  );
}

function BillsVisual({ isInView }: { isInView: boolean }) {
  const rows = [
    { label: "Total Litres", value: 58, suffix: " L" },
    { label: "Rate", value: 60, prefix: "₹", suffix: "/L" },
    { label: "Subtotal", value: 3480, prefix: "₹" },
    { label: "Vacation Credit", value: -120, prefix: "-₹" },
    { label: "Amount Due", value: 3360, prefix: "₹", highlight: true },
  ];

  return (
    <div className="space-y-3 p-6">
      {rows.map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: i * 0.15 }}
          className={`flex items-center justify-between rounded-xl px-4 py-3 ${
            row.highlight
              ? "bg-primary/15 border border-primary/30"
              : "bg-white/5"
          }`}
        >
          <span className="text-sm text-white/50">{row.label}</span>
          <span
            className={`text-lg font-bold ${
              row.highlight ? "text-primary" : "text-white"
            }`}
          >
            {isInView ? (
              <AnimatedCounter
                value={Math.abs(row.value)}
                prefix={row.prefix}
                suffix={row.suffix}
                duration={1.5 + i * 0.2}
              />
            ) : (
              "0"
            )}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function PaymentsVisual({ isInView }: { isInView: boolean }) {
  const cards = [
    { vendor: "Sharma Dairy", amount: "₹3,480", date: "Jun 5, 2026", method: "UPI" },
    { vendor: "Sharma Dairy", amount: "₹2,940", date: "May 3, 2026", method: "Cash" },
    { vendor: "Sharma Dairy", amount: "₹3,100", date: "Apr 2, 2026", method: "UPI" },
  ];

  return (
    <div className="relative h-64 p-4">
      {cards.map((card, i) => (
        <motion.div
          key={card.date}
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: i * 24,
                  rotate: (i - 1) * 4,
                  x: i * 8,
                }
              : {}
          }
          transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
          className="absolute left-4 right-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-xl backdrop-blur-sm"
          style={{ zIndex: cards.length - i }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">{card.vendor}</p>
              <p className="text-xs text-white/40">{card.date}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">{card.amount}</p>
              <p className="text-xs text-white/40">{card.method}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function VacationVisual({ isInView }: { isInView: boolean }) {
  const vacationDays = [14, 15, 16, 17];
  const days = Array.from({ length: 21 }, (_, i) => i + 10);

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-4 py-3">
        <Palmtree className="h-5 w-5 text-amber-400" />
        <span className="text-sm text-amber-200">Vacation: Jun 14 – Jun 17</span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const isVacation = vacationDays.includes(day);
          return (
            <motion.div
              key={day}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: (day - 10) * 0.05, type: "spring" }}
              className={`flex aspect-square items-center justify-center rounded-lg text-sm ${
                isVacation
                  ? "bg-amber-500/20 text-amber-300 line-through decoration-amber-400/60"
                  : "bg-primary/20 text-primary"
              }`}
            >
              {day}
            </motion.div>
          );
        })}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="mt-4 text-center text-xs text-white/40"
      >
        4 days excluded from bill automatically
      </motion.p>
    </div>
  );
}

const visuals: Record<string, React.FC<{ isInView: boolean }>> = {
  calendar: CalendarVisual,
  bills: BillsVisual,
  payments: PaymentsVisual,
  vacation: VacationVisual,
};

function StoryBlock({
  story,
  index,
}: {
  story: (typeof stories)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const Visual = visuals[story.visual];
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="flex items-center section-padding"
    >
      <div
        className={`container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
          isEven ? "" : "lg:[direction:rtl]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:[direction:ltr]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
            <story.icon className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {story.headline}
          </h2>
          <p className="text-lg leading-relaxed text-white/50">
            {story.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 60 : -60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="glow-border overflow-hidden rounded-3xl glass lg:[direction:ltr]"
        >
          <Visual isInView={isInView} />
        </motion.div>
      </div>
    </div>
  );
}

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stories.forEach((story) => {
        gsap.from(`#story-${story.id}`, {
          scrollTrigger: {
            trigger: `#story-${story.id}`,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
          opacity: 0.3,
          y: 50,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      {stories.map((story, index) => (
        <div key={story.id} id={`story-${story.id}`}>
          <StoryBlock story={story} index={index} />
        </div>
      ))}
    </section>
  );
}
