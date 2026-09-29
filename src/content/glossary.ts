export type Term = {
  slug: string;
  name: string;
  body: string;
};

export const terms: Term[] = [
  {
    slug: "seer2",
    name: "SEER2",
    body: "The current seasonal efficiency rating for cooling equipment. A higher SEER2 uses less electricity to deliver the same cooling, but only if the ducts and the install let the system run as it was tested. It is not a comfort guarantee by itself.",
  },
  {
    slug: "tonnage",
    name: "Tonnage",
    body: "Cooling capacity, not weight. One ton is 12,000 BTU per hour. Bigger is not automatically better. An oversized system in a Texas house short-cycles and does a poor job removing humidity.",
  },
  {
    slug: "heat-pump",
    name: "Heat pump",
    body: "A system that cools and, by reversing, heats. Common as the only heat source in all-electric Greater Austin homes, and used with or without a gas furnace in Dallas–Fort Worth.",
  },
  {
    slug: "auxiliary-heat",
    name: "Auxiliary or backup heat",
    body: "The heat that carries the house when a heat pump cannot, usually electric strips or a gas furnace. If it runs all winter because the heat pump is locked out, the bill goes up while the house still feels warm.",
  },
  {
    slug: "evaporator-coil",
    name: "Evaporator coil",
    body: "The indoor coil that absorbs heat from the house. It sits with the furnace or air handler. A new condenser often needs a matched coil, and a dirty coil can look like a failed compressor.",
  },
  {
    slug: "condenser",
    name: "Condenser",
    body: "The outdoor unit on a split system. It rejects heat to the outside. Cottonwood, pecan pollen, and bent fins all reduce what it can do. It is not the whole system.",
  },
  {
    slug: "air-handler",
    name: "Air handler",
    body: "The indoor cabinet with the blower and, usually, the coil. In Texas it often lives in an attic or a closet. The blower serves both heating and cooling.",
  },
  {
    slug: "static-pressure",
    name: "Static pressure",
    body: "The resistance the blower pushes against. High static pressure means the ducts or the filter are asking too much. Symptoms include a loud system, a collapsing filter, weak rooms, and a coil that freezes.",
  },
  {
    slug: "temperature-split",
    name: "Temperature split",
    body: "The difference between the air entering the indoor unit and the air leaving it. It is a basic cooling health check. It does not, by itself, prove the charge is correct.",
  },
  {
    slug: "short-cycling",
    name: "Short cycling",
    body: "The system starts and stops too quickly to do its job. Causes include oversizing, a thermostat in the wrong spot, a dirty filter, or a safety switch tripping. The house often feels clammy.",
  },
  {
    slug: "refrigerant",
    name: "Refrigerant",
    body: "The fluid that moves heat between the indoor and outdoor coils. It is not a consumable like gasoline. Low charge means a leak or a bad install. Newer equipment uses different refrigerants than systems installed a decade ago.",
  },
  {
    slug: "line-set",
    name: "Line set",
    body: "The pair of refrigerant pipes between the indoor and outdoor units. A replacement quote should say whether the existing line set stays. On ductless systems, the line set path is part of the design.",
  },
  {
    slug: "plenum",
    name: "Plenum",
    body: "The box that connects the air handler to the duct runs. Leaks at the plenum dump conditioned air into the attic or pull attic air into the return. They are a common Dallas and Austin finding.",
  },
  {
    slug: "return-air",
    name: "Return air",
    body: "The air coming back to the system from the house. Undersized or leaky returns cause more ‘weak AC’ complaints than people expect. Closing supplies does not fix a bad return.",
  },
  {
    slug: "float-switch",
    name: "Float switch",
    body: "A safety that shuts the system off when the condensate pan is filling up. It is doing its job. The repair is the drain, not a bypassed switch.",
  },
  {
    slug: "heat-exchanger",
    name: "Heat exchanger",
    body: "The furnace part that keeps combustion gases out of the house air. If it is cracked, the furnace should be shut down and replaced. It is not a cleaning item.",
  },
  {
    slug: "dual-fuel",
    name: "Dual fuel",
    body: "A heat pump paired with a gas furnace. The heat pump handles milder winter weather and the furnace takes the coldest nights. The thermostat lockout decides when that handoff happens.",
  },
  {
    slug: "mini-split",
    name: "Mini-split",
    body: "A ductless heat pump with one or more indoor heads. A good fit for houses without ducts, additions, and single difficult rooms. A poor fit when the existing ducts only need repair.",
  },
  {
    slug: "package-unit",
    name: "Package unit",
    body: "Heating and cooling in one box, often on a roof or beside the house. Common on some older Dallas-area homes and on light commercial buildings. Service access is a different job from a split system.",
  },
  {
    slug: "commissioning",
    name: "Commissioning",
    body: "The setup work after equipment is installed: airflow, drainage, thermostat configuration, and a real run cycle. Equipment that was set in place and never commissioned is a frequent finding in newer Texas subdivisions.",
  },
];
