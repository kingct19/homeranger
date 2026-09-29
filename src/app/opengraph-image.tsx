import { ImageResponse } from "next/og";

export const alt = "Home Ranger Services — HVAC in Dallas and Austin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1c3b2e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f3eee4",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#f0c2a4" }}>DALLAS · AUSTIN</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.02 }}>Home Ranger Services</div>
          <div style={{ fontSize: 32, marginTop: 18, color: "#e4d9c8" }}>
            Honest heating and cooling for North and Central Texas
          </div>
        </div>
      </div>
    ),
    size,
  );
}
