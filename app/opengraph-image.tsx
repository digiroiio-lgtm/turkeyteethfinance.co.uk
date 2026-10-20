import { ImageResponse } from "next/og";
export const alt = "Turkey Teeth Finance: your treatment journey in Antalya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 85,
        background: "linear-gradient(125deg,#eee3ff,#e7f9f4)",
        color: "#0a1c2d",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          fontWeight: 700,
          color: "#8061dc",
          marginBottom: 45,
        }}
      >
        turkeyteethfinance.co.uk
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 70,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: -3,
        }}
      >
        Your new smile in Turkey.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 58,
          fontWeight: 700,
          color: "#7163dc",
          marginTop: 12,
        }}
      >
        Flexible payment options.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 23,
          marginTop: 42,
          background: "#ffc526",
          padding: "17px 29px",
          borderRadius: 50,
          alignSelf: "flex-start",
        }}
      >
        Get My Free Treatment Quote
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 16,
          color: "#52627a",
          marginTop: 35,
        }}
      >
        Credit is subject to status, affordability and lender approval.
      </div>
    </div>,
    { ...size },
  );
}
