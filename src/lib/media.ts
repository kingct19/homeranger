const photos: Record<string, { src: string; alt: string }> = {
  "air-conditioning": {
    src: "/photos/outdoor-inspect.jpg",
    alt: "Technician inspecting an outdoor air conditioner beside a house",
  },
  "ac-repair": {
    src: "/photos/rooftop-gauges.jpg",
    alt: "Technician checking refrigerant gauges on a rooftop air conditioner",
  },
  "ac-installation": {
    src: "/photos/rooftop-panel.jpg",
    alt: "Technician working inside an open rooftop air conditioner",
  },
  "ac-maintenance": {
    src: "/photos/indoor-service.jpg",
    alt: "Technician servicing an indoor air conditioner",
  },
  heating: {
    src: "/photos/thermostat-hand.jpg",
    alt: "Hand adjusting a home thermostat",
  },
  "furnace-repair": {
    src: "/photos/manifold-gauges.jpg",
    alt: "Technician reading manifold gauges during a service call",
  },
  "furnace-replacement": {
    src: "/photos/coil-repair.jpg",
    alt: "Technician testing an air conditioner coil",
  },
  "heat-pumps": {
    src: "/photos/wall-unit-garden.jpg",
    alt: "Outdoor air conditioner mounted beside a garden wall",
  },
  "ductless-mini-splits": {
    src: "/photos/wall-unit.jpg",
    alt: "Wall-mounted outdoor air conditioner",
  },
  "indoor-air-quality": {
    src: "/photos/thermostat.jpg",
    alt: "Wall thermostat in a home",
  },
  "duct-services": {
    src: "/photos/yard-unit.jpg",
    alt: "Outdoor air conditioning system in a yard",
  },
  "commercial-hvac": {
    src: "/photos/condenser-row.jpg",
    alt: "Row of outdoor air conditioning units",
  },
  "maintenance-plans": {
    src: "/photos/indoor-service.jpg",
    alt: "Technician servicing an indoor air conditioner",
  },
  "home-sale-inspections": {
    src: "/photos/thermostat-home.jpg",
    alt: "Homeowner adjusting a thermostat",
  },
};

const fallback = {
  src: "/photos/outdoor-inspect.jpg",
  alt: "Technician inspecting an outdoor air conditioner beside a house",
};

export function servicePhoto(slug: string) {
  return photos[slug] ?? fallback;
}
