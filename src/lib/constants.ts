export const APP_NAME = "Milk Bill";
export const APP_TAGLINE = "Your daily milk bill";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.milktrack.customer";
export const CONTACT_EMAIL = "planetkawal@gmail.com";
export const APP_VERSION = "1.0.0";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://milkbill.app";

/** Mirrors milk-customer-app/src/constants/colors.ts */
export const APP_COLORS = {
  primary: "#1E3A5F",
  primaryLight: "#2E5A8F",
  accent: "#4A90D9",
  background: "#F5F7FA",
  surface: "#FFFFFF",
  text: "#1A1A2E",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  border: "#E5E7EB",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  cream: "#FFF8E7",
  milk: "#FAFAFA",
  paid: "#D1FAE5",
  pending: "#FEF3C7",
  paused: "#E0E7FF",
} as const;

export const COLORS = {
  primary: APP_COLORS.primary,
  secondary: APP_COLORS.primaryLight,
  background: "#0A1628",
  surface: "rgba(255,255,255,0.05)",
  accent: APP_COLORS.accent,
} as const;
