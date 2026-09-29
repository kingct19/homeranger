const photos: Record<string, { src: string; alt: string }> = {
  "air-conditioning": {
    src: "/photos/condenser-kneel.jpg",
    alt: "Technician kneeling at an outdoor condenser",
  },
  "ac-repair": {
    src: "/photos/condenser-kneel.jpg",
    alt: "Technician kneeling at an outdoor condenser",
  },
  "ac-installation": {
    src: "/photos/roof-tech.jpg",
    alt: "Technician beside an open rooftop air conditioner",
  },
  "ac-maintenance": {
    src: "/photos/hero-close.jpg",
    alt: "Technician installing a filter in an air handler",
  },
  heating: {
    src: "/photos/attic-blue-duct.jpg",
    alt: "Technician securing insulated ductwork in an attic",
  },
  "furnace-repair": {
    src: "/photos/hands-wiring.jpg",
    alt: "Technician working on equipment wiring",
  },
  "furnace-replacement": {
    src: "/photos/attic-metal.jpg",
    alt: "Technician among metal ducts in an attic",
  },
  "heat-pumps": {
    src: "/photos/roof-tech.jpg",
    alt: "Technician beside an open rooftop air conditioner",
  },
  "ductless-mini-splits": {
    src: "/photos/wall-cavity.jpg",
    alt: "Technicians installing equipment in an open wall",
  },
  "indoor-air-quality": {
    src: "/photos/attic-metal.jpg",
    alt: "Technician among metal ducts in an attic",
  },
  "duct-services": {
    src: "/photos/attic-blue-duct.jpg",
    alt: "Technician securing insulated ductwork in an attic",
  },
  "commercial-hvac": {
    src: "/photos/hands-wiring.jpg",
    alt: "Technician working on equipment wiring",
  },
  "maintenance-plans": {
    src: "/photos/hero-close.jpg",
    alt: "Technician installing a filter in an air handler",
  },
  "home-sale-inspections": {
    src: "/photos/homeowner-visit.jpg",
    alt: "Technician reviewing a visit with a homeowner beside an outdoor unit",
  },
};

const fallback = {
  src: "/photos/hero-close.jpg",
  alt: "Technician installing a filter in an air handler",
};

export function servicePhoto(slug: string) {
  return photos[slug] ?? fallback;
}
