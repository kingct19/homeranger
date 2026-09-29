type BrandIconName = "heating" | "cooling" | "air-quality" | "repairs" | "installation" | "maintenance";

const svgProps = {
  viewBox: "0 0 24 24",
  className: "h-8 w-8 text-navy",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function BrandIcon({ name }: { name: BrandIconName }) {
  switch (name) {
    case "heating":
      return (
        <svg {...svgProps}>
          <path d="M13 3c1 5-4 6-2 10 1-2 3-2 4-5 5 5 5 12-3 13C4 20 3 14 7 9c0 4 2 4 2 4-1-5 3-6 4-10Z" />
        </svg>
      );
    case "cooling":
      return (
        <svg {...svgProps}>
          <path d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7M9 4l3 3 3-3M9 20l3-3 3 3M4 10l4-1-1-4M20 14l-4 1 1 4M4 14l4 1-1 4M20 10l-4-1 1-4" />
        </svg>
      );
    case "air-quality":
      return (
        <svg {...svgProps}>
          <path d="M3 8h12a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h6a3 3 0 1 1-3 3" />
        </svg>
      );
    case "repairs":
      return (
        <svg {...svgProps}>
          <path d="M14 6a5 5 0 0 0-6 6l-5 5a3 3 0 0 0 4 4l5-5a5 5 0 0 0 6-6l-3 3-4-4Z" />
        </svg>
      );
    case "installation":
      return (
        <svg {...svgProps}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M7 7h10M7 10h10M7 13h10M8 18h1m6 0h1" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...svgProps}>
          <path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7" />
        </svg>
      );
    default: {
      const exhaustive: never = name;
      return exhaustive;
    }
  }
}

export type { BrandIconName };
