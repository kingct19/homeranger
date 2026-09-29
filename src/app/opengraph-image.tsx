import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Home Ranger Services — HVAC in Dallas and Austin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function dataUrl(file: Buffer) {
  return `data:image/png;base64,${file.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const [logo, mascot] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/logos/home-ranger-reversed.png")),
    readFile(join(process.cwd(), "public/brand/mascot/home-ranger-technician.png")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0A2C5A",
          position: "relative",
          overflow: "hidden",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 620,
            height: "100%",
            padding: "0 40px 0 72px",
          }}
        >
          <img src={dataUrl(logo)} width={320} height={179} alt="" />
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 20,
              letterSpacing: 2.5,
              color: "#FF7A00",
              fontWeight: 700,
            }}
          >
            HEATING | COOLING | AIR QUALITY
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
              fontSize: 46,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            <div style={{ display: "flex" }}>Trusted comfort.</div>
            <div style={{ display: "flex" }}>Stronger homes.</div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              width: 168,
              height: 5,
              background: "#FF7A00",
              borderRadius: 99,
            }}
          />
        </div>
        <img
          src={dataUrl(mascot)}
          alt=""
          style={{
            position: "absolute",
            right: -70,
            bottom: -24,
            height: 680,
          }}
        />
      </div>
    ),
    size,
  );
}
