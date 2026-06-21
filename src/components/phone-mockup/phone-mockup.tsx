"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  FileText,
  Wallet,
  Sun,
  Settings,
} from "lucide-react";
import { APP_COLORS, APP_TAGLINE } from "@/lib/constants";

const C = APP_COLORS;

const screens = [
  { id: "home", label: "Home" },
  { id: "bills", label: "Bills" },
  { id: "payments", label: "Payments" },
] as const;

type ScreenId = (typeof screens)[number]["id"];

function BrandHeader({ showTagline = false }: { showTagline?: boolean }) {
  return (
    <div className="mb-2">
      <div className="flex items-baseline">
        <span
          className="text-[11px] font-extrabold tracking-tight"
          style={{ color: C.primary }}
        >
          Milk
        </span>
        <span
          className="text-[11px] font-light tracking-tight"
          style={{ color: C.primaryLight }}
        >
          {" "}
          Bill
        </span>
      </div>
      {showTagline ? (
        <div className="mt-0.5">
          <p
            className="text-[5px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: C.textMuted }}
          >
            {APP_TAGLINE}
          </p>
          <div
            className="mt-1 h-[2px] w-4 rounded-full"
            style={{ backgroundColor: C.accent }}
          />
        </div>
      ) : null}
    </div>
  );
}

function AppCard({
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
      className={`rounded-xl border p-2 ${className}`}
      style={{
        backgroundColor: C.surface,
        borderColor: C.border,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function StatusChip({
  label,
  bg,
  text,
}: {
  label: string;
  bg: string;
  text: string;
}) {
  return (
    <span
      className="rounded-full px-1.5 py-0.5 text-[5px] font-semibold"
      style={{ backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  );
}

function StatRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className="flex items-center justify-between border-b py-1 last:border-b-0"
      style={{ borderColor: C.border }}
    >
      <span className="text-[6px]" style={{ color: C.textSecondary }}>
        {label}
      </span>
      <span
        className={`font-semibold ${highlight ? "text-[7px]" : "text-[6px]"}`}
        style={{ color: highlight ? C.primary : C.text }}
      >
        {value}
      </span>
    </div>
  );
}

function TabBar({ active }: { active: ScreenId }) {
  const tabs = [
    { id: "home" as const, icon: Home, label: "Home" },
    { id: "bills" as const, icon: FileText, label: "Bills" },
    { id: "payments" as const, icon: Wallet, label: "Pay" },
    { id: "other" as const, icon: Calendar, label: "Log" },
    { id: "other" as const, icon: Sun, label: "Off" },
    { id: "other" as const, icon: Settings, label: "Set" },
  ];

  return (
    <div
      className="flex items-center justify-around border-t px-0.5 py-1"
      style={{ backgroundColor: C.surface, borderColor: C.border }}
    >
      {tabs.map(({ id, icon: Icon, label }) => {
        const isActive = id === active;
        return (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <Icon
              className="h-2.5 w-2.5"
              style={{ color: isActive ? C.primary : C.textMuted }}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span
              className="text-[4px] font-semibold"
              style={{ color: isActive ? C.primary : C.textMuted }}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col" style={{ backgroundColor: C.background }}>
      <div className="flex-1 overflow-hidden px-2.5 pb-1 pt-2">
        <BrandHeader showTagline />
        <p className="text-[10px] font-bold" style={{ color: C.text }}>
          June 2026
        </p>
        <p className="mb-2 text-[6px]" style={{ color: C.textSecondary }}>
          Sunday, 21 June
        </p>

        <AppCard
          style={{
            backgroundColor: C.primaryLight,
            borderColor: C.primaryLight,
          }}
        >
          <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.85)" }}>
            June 2026 balance
          </p>
          <p className="text-[14px] font-bold text-white">₹3,480</p>
          <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.9)" }}>
            Due on 5 Jul
          </p>
          <div className="mt-1.5 flex gap-1">
            {["View bill", "Record payment"].map((action) => (
              <div
                key={action}
                className="flex-1 rounded-md border py-1 text-center text-[5px] font-semibold text-white"
                style={{ borderColor: "rgba(255,255,255,0.7)" }}
              >
                {action}
              </div>
            ))}
          </div>
        </AppCard>

        <AppCard
          style={{
            backgroundColor: C.cream,
            borderColor: "#F0E4C8",
          }}
        >
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[7px] font-bold" style={{ color: C.text }}>
              Today
            </p>
            <StatusChip label="Delivered" bg={C.paid} text={C.success} />
          </div>
          <StatRow label="Quantity" value="2 L" />
          <StatRow label="Amount" value="₹120" />
          <div className="mt-1.5 flex gap-1">
            <div
              className="flex-1 rounded-lg py-1 text-center text-[5px] font-semibold text-white"
              style={{ backgroundColor: C.primary }}
            >
              Edit quantity
            </div>
            <div
              className="flex-1 rounded-lg border py-1 text-center text-[5px] font-semibold"
              style={{ borderColor: C.border, color: C.primary }}
            >
              Pause
            </div>
          </div>
        </AppCard>

        <AppCard>
          <p className="text-[7px] font-bold" style={{ color: C.text }}>
            This month
          </p>
          <p className="mt-0.5 text-[6px]" style={{ color: C.textSecondary }}>
            20 delivery days · 58 L · ₹3,480 total
          </p>
          <p
            className="mt-1 text-[6px] font-semibold"
            style={{ color: C.primary }}
          >
            See full bill →
          </p>
        </AppCard>
      </div>
      <TabBar active="home" />
    </div>
  );
}

function BillsScreen() {
  return (
    <div className="flex h-full flex-col" style={{ backgroundColor: C.background }}>
      <div className="flex-1 overflow-hidden px-2.5 pb-1 pt-2">
        <BrandHeader />
        <p className="text-[10px] font-bold" style={{ color: C.text }}>
          June 2026
        </p>
        <p className="mb-2 text-[6px]" style={{ color: C.textSecondary }}>
          20 delivery days · 58 L · ₹3,480
        </p>

        <AppCard
          style={{
            backgroundColor: C.primaryLight,
            borderColor: C.primaryLight,
          }}
        >
          <div className="mb-0.5 flex items-center justify-between">
            <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.85)" }}>
              Balance due
            </p>
            <StatusChip
              label="Unpaid"
              bg="rgba(255,255,255,0.2)"
              text="#FFFFFF"
            />
          </div>
          <p className="text-[14px] font-bold text-white">₹3,480</p>
          <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.9)" }}>
            Due on 5 Jul
          </p>
          <div
            className="mt-1.5 rounded-lg py-1 text-center text-[6px] font-semibold"
            style={{ backgroundColor: "#FFFFFF", color: C.primary }}
          >
            Record payment
          </div>
        </AppCard>

        <AppCard>
          <p className="mb-1 text-[7px] font-bold" style={{ color: C.text }}>
            Usage
          </p>
          <StatRow label="Delivery days" value="20" />
          <StatRow label="Paused days" value="2" />
          <StatRow label="Total liters" value="58 L" />
          <StatRow label="Bill amount" value="₹3,480" highlight />
        </AppCard>

        <AppCard>
          <p className="mb-1 text-[7px] font-bold" style={{ color: C.text }}>
            Payments
          </p>
          <StatRow label="Paid" value="₹0" />
          <StatRow label="Balance due" value="₹3,480" highlight />
          <StatRow label="Due date" value="5 Jul 2026" />
        </AppCard>
      </div>
      <TabBar active="bills" />
    </div>
  );
}

function PaymentsScreen() {
  const payments = [
    { amount: "₹3,200", date: "Mon, 05 Jun 2026", method: "UPI" },
    { amount: "₹2,940", date: "Wed, 03 May 2026", method: "Cash" },
  ];

  return (
    <div className="flex h-full flex-col" style={{ backgroundColor: C.background }}>
      <div className="flex-1 overflow-hidden px-2.5 pb-1 pt-2">
        <BrandHeader />
        <p className="text-[10px] font-bold" style={{ color: C.text }}>
          June 2026
        </p>
        <p className="mb-2 text-[6px]" style={{ color: C.textSecondary }}>
          2 payments · ₹6,140 paid
        </p>

        <AppCard
          style={{
            backgroundColor: C.primaryLight,
            borderColor: C.primaryLight,
          }}
        >
          <div className="mb-0.5 flex items-center justify-between">
            <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.85)" }}>
              Outstanding balance
            </p>
            <StatusChip
              label="Partially paid"
              bg="rgba(255,255,255,0.2)"
              text="#FFFFFF"
            />
          </div>
          <p className="text-[14px] font-bold text-white">₹280</p>
          <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.9)" }}>
            Due on 5 Jul
          </p>
          <p className="mt-1 text-[5px]" style={{ color: "rgba(255,255,255,0.75)" }}>
            ₹3,200 paid this month
          </p>
        </AppCard>

        <AppCard
          style={{
            backgroundColor: C.cream,
            borderColor: "#F0E4C8",
          }}
        >
          <p className="mb-1 text-[7px] font-bold" style={{ color: C.text }}>
            Record payment
          </p>
          <div
            className="mb-1.5 rounded-lg border px-2 py-1 text-[6px]"
            style={{ borderColor: C.border, color: C.textMuted }}
          >
            Amount (₹)
          </div>
          <div className="flex gap-1">
            {["Cash", "UPI", "Bank"].map((method, i) => (
              <div
                key={method}
                className="flex-1 rounded-md py-1 text-center text-[5px] font-semibold"
                style={{
                  backgroundColor: i === 1 ? C.primary : C.surface,
                  borderWidth: 1,
                  borderColor: i === 1 ? C.primary : C.border,
                  color: i === 1 ? "#FFFFFF" : C.textSecondary,
                }}
              >
                {method}
              </div>
            ))}
          </div>
        </AppCard>

        <p className="mb-1 text-[7px] font-bold" style={{ color: C.text }}>
          Payment history
        </p>
        {payments.map((p) => (
          <AppCard key={p.date} className="mb-1.5 !p-1.5">
            <div className="flex items-start gap-1.5">
              <div
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: C.cream }}
              >
                <Wallet className="h-2 w-2" style={{ color: C.primary }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p className="text-[7px] font-bold" style={{ color: C.text }}>
                    {p.amount}
                  </p>
                  <StatusChip label={p.method} bg={C.milk} text={C.textSecondary} />
                </div>
                <p className="text-[5px]" style={{ color: C.textSecondary }}>
                  {p.date}
                </p>
              </div>
            </div>
          </AppCard>
        ))}
      </div>
      <TabBar active="payments" />
    </div>
  );
}

const screenComponents: Record<ScreenId, () => React.ReactNode> = {
  home: HomeScreen,
  bills: BillsScreen,
  payments: PaymentsScreen,
};

export function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>("home");
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => {
        const idx = screens.findIndex((s) => s.id === prev);
        return screens[(idx + 1) % screens.length].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  const ActiveComponent = screenComponents[activeScreen];

  return (
    <div
      className="relative mx-auto w-full max-w-[300px] perspective-[1200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 -z-10 scale-90 rounded-full blur-[80px]"
        style={{ backgroundColor: `${C.accent}33` }}
      />

      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          y: [0, -10, 0],
        }}
        transition={{
          rotateX: { type: "spring", stiffness: 150, damping: 20 },
          rotateY: { type: "spring", stiffness: 150, damping: 20 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          className="relative rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-[#2a2a2a] to-[#141414] p-2"
          style={{
            boxShadow: `0 50px 100px -20px rgba(0,0,0,0.8), 0 0 60px ${C.accent}26`,
          }}
        >
          <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <div className="aspect-[9/19.5] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="h-full"
                >
                  <ActiveComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute -right-0.5 top-28 h-12 w-0.5 rounded-full bg-white/20" />
        </div>

        <div
          className="absolute -bottom-8 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full blur-2xl"
          style={{ backgroundColor: `${C.accent}1A` }}
        />
      </motion.div>

      <div className="mt-8 flex justify-center gap-2">
        {screens.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActiveScreen(s.id)}
            className={`rounded-full px-3 py-1 text-xs transition-all ${
              activeScreen === s.id
                ? "text-white"
                : "bg-white/5 text-white/40 hover:text-white/60"
            }`}
            style={
              activeScreen === s.id
                ? { backgroundColor: `${C.accent}33`, color: C.accent }
                : undefined
            }
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
