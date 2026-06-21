import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Milk Bill — Milk Tracking. Reimagined.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1628",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(30, 58, 95, 0.35)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(74, 144, 217, 0.2)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(30, 58, 95, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            🥛
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Milk Bill
          </span>
        </div>
        <p
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#4A90D9",
            margin: 0,
            textAlign: "center",
          }}
        >
          Milk Tracking. Reimagined.
        </p>
        <p
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          100% Offline & Private · Android
        </p>
      </div>
    ),
    { ...size }
  );
}
