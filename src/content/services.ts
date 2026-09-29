import type { Service } from "@/content/types";

export const services: Service[] = [
  {
    slug: "air-conditioning",
    name: "Air Conditioning",
    shortName: "Air Conditioning",
    navGroup: "cooling",
    locationPage: false,
    tags: ["cooling"],
    headline: "Cooling service for Texas houses that actually run all summer",
    description:
      "Air conditioning repair, installation, and maintenance for Dallas–Fort Worth and Greater Austin homes and small businesses.",
    outcome: "a system that keeps the house even through a long Texas summer",
    intro: [
      "Cooling is the main job of a Texas HVAC system. It runs for months, it lives in a hot attic or a tight closet, and small airflow problems turn into rooms that never settle.",
      "Home Ranger Services handles repair, replacement, and maintenance. We start with what the system is doing, not with a replacement script. If a part will restore reliable cooling, that is the recommendation. If the coil, compressor, and ducts are at the end together, we say that too, with prices before any work starts.",
    ],
    signs: [
      {
        title: "The house will not catch the thermostat",
        body: "Long runtimes with little temperature change point to airflow, charge, a dirty coil, or equipment that is genuinely worn out.",
      },
      {
        title: "One floor or one room is always behind",
        body: "That is often ducts, returns, or a missing second system. A larger condenser is the wrong first guess.",
      },
      {
        title: "The system freezes or trips",
        body: "Ice on the coil and a breaker that will not stay in are symptoms. Both have a short list of real causes.",
      },
      {
        title: "New noises, new smells, or a sudden jump in the bill",
        body: "A failing blower, a burning wire, or a coil that is packed with dirt shows up this way before it quits.",
      },
    ],
    checks: [
      "Thermostat, filter, and obvious airflow restrictions",
      "Indoor and outdoor coil condition",
      "Temperature split and, when it matters, static pressure",
      "Capacitor, contactor, and blower operation",
      "Drain, trap, and float switch",
      "Age and match of the indoor and outdoor equipment",
    ],
    process: [
      {
        title: "We confirm the complaint",
        body: "Which rooms, since when, and what changed. A remodel, a new filter size, or a closed vent is useful information.",
      },
      {
        title: "We test the system that is actually failing",
        body: "Houses with two units get the right one diagnosed. We do not replace parts on a healthy system.",
      },
      {
        title: "We give you options in writing",
        body: "Repair, duct correction, or replacement, with the reason for each. You approve the work before it begins.",
      },
    ],
    localAngle:
      "In {city}, cooling problems follow the housing. {housing} {climate} {signature}",
    related: ["ac-repair", "ac-installation", "ac-maintenance", "ductless-mini-splits"],
    faqs: [
      {
        q: "Do you only replace air conditioners, or do you repair them?",
        a: "We repair them. Replacement is the recommendation when the equipment is unsafe, repeatedly failing, or a poor match for the house. A capacitor, contactor, drain, or blower motor is a repair.",
      },
      {
        q: "Why does the upstairs stay hot?",
        a: "Usually because the ducts, returns, or zoning cannot move enough air upstairs, or because one system is being asked to cover two very different floors. We measure that before we sell a bigger unit.",
      },
      {
        q: "How should I prepare for a cooling visit?",
        a: "Leave the system as it is when it misbehaves, note which rooms are worst, and make sure we can reach the indoor unit, the outdoor unit, and the electrical disconnect.",
      },
    ],
  },
  {
    slug: "ac-repair",
    name: "AC Repair",
    shortName: "AC Repair",
    navGroup: "cooling",
    locationPage: true,
    tags: ["cooling", "maintenance"],
    headline: "AC repair that starts with the failed part, not a new system",
    description:
      "Honest air conditioning repair in Dallas–Fort Worth and Greater Austin. We diagnose the failure, price the options, and repair what you approve.",
    outcome: "cooling restored without a replacement you do not need",
    intro: [
      "A no-cool call has a short list of likely causes: airflow, a failed electrical part, a drainage shutdown, a refrigerant problem, or equipment that has reached the end. Those are different repairs with different prices.",
      "Home Ranger Services diagnoses before recommending. If the capacitor failed and the rest of the system is sound, you get a capacitor quote. If the compressor is done and the coil is original to a 15-year-old system, you get a repair price and a replacement price in the same conversation.",
    ],
    signs: [
      {
        title: "Warm air from the vents",
        body: "The blower may be running with the outdoor unit sitting still, or the outdoor unit may be running without moving heat.",
      },
      {
        title: "The outdoor unit hums and will not start",
        body: "Often a capacitor or contactor. Sometimes a failed compressor. The difference matters, and we test it.",
      },
      {
        title: "Ice on the copper lines or the indoor coil",
        body: "Low airflow and low charge both freeze a coil. We find which one before adding refrigerant.",
      },
      {
        title: "Water at the air handler or a tripped float switch",
        body: "A clogged drain shuts cooling down on purpose. Clearing it is the repair, along with finding why it clogged.",
      },
    ],
    checks: [
      "Whether the thermostat is actually calling for cooling",
      "Filter, blower, and supply temperature",
      "Capacitor and contactor condition",
      "Outdoor fan and compressor operation",
      "Drain, pan, and safety switches",
      "Visible refrigerant-line condition and coil cleanliness",
    ],
    process: [
      {
        title: "Listen to what changed",
        body: "A system that died this afternoon is a different visit from one that has been weak for two summers.",
      },
      {
        title: "Prove the failure",
        body: "Electrical tests, temperature split, and a look at the parts that commonly fail in Texas heat.",
      },
      {
        title: "Price the repair before we start",
        body: "You see the part, the labor, and any reason we think replacement deserves a look. Nothing starts without a yes.",
      },
    ],
    localAngle:
      "Most {city} no-cool calls come down to airflow, electrical parts, and equipment that has been running through long afternoons. {climate} {signature}",
    related: ["ac-maintenance", "ac-installation", "duct-services", "air-conditioning"],
    faqs: [
      {
        q: "Should a technician add refrigerant on every visit?",
        a: "No. Refrigerant is not a maintenance item. If the charge is low, the system has a leak or it was set up wrong. Adding refrigerant without saying that is not a repair.",
      },
      {
        q: "Can you repair the system the same day?",
        a: "Common electrical parts and drain problems are often same-day repairs because we stock them. A failed compressor, coil, or control board may need a part order, and we will say so before you wait around.",
      },
      {
        q: "How do I know a repair is worth it?",
        a: "Compare the repair to the age and condition of the rest of the system. One failed part on a clean eight-year-old unit is usually worth repairing. A major failure on a 16-year-old matched system deserves both numbers.",
      },
    ],
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    shortName: "AC Installation",
    navGroup: "cooling",
    locationPage: true,
    tags: ["install", "cooling"],
    headline: "AC installation sized for the house you have now",
    description:
      "Air conditioner replacement and new installation in Dallas–Fort Worth and Greater Austin, with load, ducts, and written options before you buy.",
    outcome: "a new cooling system matched to the house, not just to the old nameplate",
    intro: [
      "Replacing an air conditioner by copying the old tonnage repeats whatever mistake the last install made. Additions, new windows, closed-in garages, and tired ducts all change the load.",
      "Home Ranger Services quotes installation only after looking at the equipment, the ducts, the electrical service, and how the house is actually used. You get options across efficiency levels, including current SEER2 equipment and the refrigerant those systems use, with the duct corrections called out separately so they are not buried in a single number.",
    ],
    signs: [
      {
        title: "The compressor or coil failed on an older matched system",
        body: "A major repair can cost enough that replacement is the clearer buy. You should see both prices.",
      },
      {
        title: "The house has been remodeled and never recooled evenly",
        body: "The equipment may be the wrong size for the floor plan you live in now.",
      },
      {
        title: "You are adding on or finishing a room",
        body: "Tying a new room into the nearest supply is how the last bedroom becomes the unhappy one.",
      },
      {
        title: "The outdoor unit uses refrigerant that is no longer supported",
        body: "Older systems can still be repaired for a while. Replacement is a planning decision, not a scare tactic, and we will not invent a deadline.",
      },
    ],
    checks: [
      "Existing tonnage versus the house as it is today",
      "Duct condition, returns, and obvious leakage",
      "Electrical capacity and disconnect location",
      "Condenser location, clearance, and drainage",
      "Indoor coil match and line set condition",
      "Thermostat location and whether zoning is already there",
    ],
    process: [
      {
        title: "Survey the house",
        body: "We look at rooms, glass, attic ducts, and the equipment that is there. Photos are part of the quote.",
      },
      {
        title: "Quote options, not a single take-it-or-leave-it number",
        body: "Good, better, and the duct work each option still needs. Efficiency is explained in plain language, not as a sticker.",
      },
      {
        title: "Install and walk through",
        body: "Commissioning includes airflow, drainage, and a thermostat you know how to use. We haul off the old equipment.",
      },
    ],
    localAngle:
      "A {city} replacement has to survive the way houses are built there. {housing} {climate}",
    related: ["ac-repair", "heat-pumps", "duct-services", "ductless-mini-splits"],
    faqs: [
      {
        q: "Do you match the new unit to the old tonnage?",
        a: "Only if the old tonnage was right. We check the house first. Oversizing is a common Texas mistake and it shows up as short cycling and poor humidity control.",
      },
      {
        q: "What does installation include?",
        a: "Removal of the old equipment, the new indoor and outdoor match we agreed on, electrical and drainage connections, thermostat setup, commissioning, and a walkthrough. Duct changes are quoted on their own line if you need them.",
      },
      {
        q: "How long does a typical change-out take?",
        a: "A straightforward split-system replacement is usually one day. Homes with two systems, difficult access, or duct repairs can take longer, and that is part of the quote.",
      },
    ],
  },
  {
    slug: "ac-maintenance",
    name: "AC Maintenance",
    shortName: "AC Maintenance",
    navGroup: "cooling",
    locationPage: true,
    tags: ["maintenance", "cooling"],
    headline: "Cooling maintenance that looks for the failure before August",
    description:
      "Seasonal air conditioning maintenance in Dallas–Fort Worth and Greater Austin. We clean, measure, and write down what we find.",
    outcome: "a cooling system that has been cleaned, tested, and documented before the hottest weeks",
    intro: [
      "A filter swap is not maintenance. Texas equipment needs the coils looked at, the drain proved, the electrical parts tested, and the temperature split written down.",
      "Home Ranger Services maintenance visits produce a short record: what is fine, what is worn, and what should be scheduled before it becomes a no-cool call. We do not use a tune-up as a door into a replacement pitch.",
    ],
    signs: [
      {
        title: "The system has not been opened since it was installed",
        body: "Drains clog and coils load up quietly. The first symptom is often a shutdown on the hottest day.",
      },
      {
        title: "Cooling is fine in May and marginal in August",
        body: "A dirty condenser or a weak capacitor shows up when the equipment is finally under full load.",
      },
      {
        title: "You bought a house and do not know the service history",
        body: "Maintenance is a practical way to learn what you own before you rely on it.",
      },
      {
        title: "The same small failure happened last summer",
        body: "A repeat float switch or a repeat frozen coil means the last visit treated the symptom.",
      },
    ],
    checks: [
      "Filter size and whether the rack can hold it",
      "Indoor coil and blower condition",
      "Outdoor coil cleanliness and clearance",
      "Capacitor and contactor measurements",
      "Condensate drain and safety switch",
      "Temperature split and unusual noise",
    ],
    process: [
      {
        title: "Maintenance with the system running",
        body: "We want to see it operate, not only look at it with the power off.",
      },
      {
        title: "Clean what is dirty, test what wears out",
        body: "Coils, drain, and electrical parts. We replace a failed part only with your approval and a price.",
      },
      {
        title: "Leave a written list",
        body: "You get what we found in plain language, including anything that can wait.",
      },
    ],
    localAngle:
      "{city} equipment spends a long season under load. {climate} Maintenance is how we catch a weak capacitor or a slow drain before a heat wave does.",
    related: ["maintenance-plans", "ac-repair", "indoor-air-quality", "duct-services"],
    faqs: [
      {
        q: "How often should cooling be maintained?",
        a: "Once in the spring is the minimum for most houses. Homes with heavy pets, nearby construction, or cottonwood and oak debris on the condenser benefit from a second look.",
      },
      {
        q: "Is maintenance the same as a repair?",
        a: "No. Maintenance is inspection, cleaning, and testing. If we find a failed part, we price the repair separately and wait for approval.",
      },
      {
        q: "Will you try to sell a new system during a tune-up?",
        a: "We will tell you if the equipment is near the end. We will not turn a clean bill of health into a sales appointment.",
      },
    ],
  },
  {
    slug: "heating",
    name: "Heating",
    shortName: "Heating",
    navGroup: "heating",
    locationPage: false,
    tags: ["heating"],
    headline: "Heating service for Texas cold snaps and ordinary winter nights",
    description:
      "Furnace repair, furnace replacement, and heat pump service in Dallas–Fort Worth and Greater Austin.",
    outcome: "reliable heat when a Texas winter actually shows up",
    intro: [
      "Texas heating sits idle for months and then has to work on short notice. In Dallas–Fort Worth that usually means a gas furnace. In a lot of Greater Austin it means a heat pump with electric backup. The failure modes are not the same, and the advice should not be either.",
      "Home Ranger Services repairs and replaces heating equipment, and we check heat as part of fall maintenance so the first cold front is not the inspection.",
    ],
    signs: [
      {
        title: "The fan runs and the air is never warm",
        body: "Ignition, a heat pump that will not start, or a thermostat calling for the wrong system.",
      },
      {
        title: "The system starts and stops",
        body: "Flame sensors, limit switches, and airflow problems all short-cycle heat.",
      },
      {
        title: "You smell burning or see soot",
        body: "Stop running it and have it checked. Combustion problems and overheating electrical parts are not DIY items.",
      },
      {
        title: "The winter bill jumped",
        body: "A heat pump locked out on electric strips looks like ‘the heat works’ and costs much more.",
      },
    ],
    checks: [
      "Thermostat mode and setpoints",
      "Filter and blower operation",
      "Ignition sequence on gas furnaces",
      "Heat pump defrost and backup heat",
      "Condensate on high-efficiency furnaces",
      "Visible heat exchanger and flue condition",
    ],
    process: [
      {
        title: "Identify the kind of heat you have",
        body: "Gas furnace, heat pump, or dual fuel. The diagnosis starts there.",
      },
      {
        title: "Run it through a real call for heat",
        body: "We watch the sequence instead of guessing from a model number.",
      },
      {
        title: "Explain repair versus replacement",
        body: "A dirty flame sensor is not a new furnace. A cracked heat exchanger is not a cleaning.",
      },
    ],
    localAngle:
      "{city} still gets real cold, even if it does not last for months. {climate} {housing}",
    related: ["furnace-repair", "furnace-replacement", "heat-pumps", "maintenance-plans"],
    faqs: [
      {
        q: "Do Dallas and Austin homes use the same heating equipment?",
        a: "Often no. Gas furnaces are more common across Dallas–Fort Worth. Heat pumps are more common in Greater Austin, especially in newer all-electric neighborhoods. We service both.",
      },
      {
        q: "Is it safe to keep using a furnace that smells odd?",
        a: "Turn it off and have it checked. Burning dust at the first start of the season can be normal for a minute. A persistent burning smell, soot, or a headache in the house is not.",
      },
      {
        q: "When should heat be checked?",
        a: "In the fall, before you need it. A furnace or heat pump that has sat since March deserves a real test cycle.",
      },
    ],
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    shortName: "Furnace Repair",
    navGroup: "heating",
    locationPage: true,
    tags: ["heating", "maintenance"],
    headline: "Furnace repair for the first cold night and the ordinary ones after it",
    description:
      "Gas furnace repair in Dallas–Fort Worth and Greater Austin. We find the failed part, price it, and repair what is safe to repair.",
    outcome: "safe heat from the furnace you already own, when a repair is the right job",
    intro: [
      "Most furnace no-heat calls are ignition, airflow, or a safety switch doing its job. A dirty flame sensor, a failed igniter, a clogged condensate line on a high-efficiency unit, or a collapsed filter will all shut heat down.",
      "Some failures are not repairs. A cracked heat exchanger is a replacement conversation. Home Ranger Services will show you what we found and will not talk you into a furnace to fix a sensor.",
    ],
    signs: [
      {
        title: "No heat, blower may or may not run",
        body: "The sequence stops at ignition, at the pressure switch, or at a limit. Each stop has a different cause.",
      },
      {
        title: "Heat starts, then blows cold",
        body: "Limit trips and airflow problems are common. So is a thermostat location that satisfies too early.",
      },
      {
        title: "Water near a high-efficiency furnace",
        body: "Those units make condensate. A blocked drain or a bad trap shuts the furnace down.",
      },
      {
        title: "A burning smell that does not fade",
        body: "First-start dust odor can pass. Anything that stays, or any soot, needs a technician before you keep running it.",
      },
    ],
    checks: [
      "Thermostat call and door switches",
      "Filter and blower",
      "Igniter, flame sensor, and gas valve operation",
      "Pressure switch and inducer",
      "Condensate drain on high-efficiency models",
      "Visible heat exchanger and venting",
    ],
    process: [
      {
        title: "Make it fail where we can see it",
        body: "We run a call for heat and watch where the sequence stops.",
      },
      {
        title: "Separate a part from a safety problem",
        body: "Sensors and igniters are repairs. Heat exchanger and venting problems can mean the furnace should not run.",
      },
      {
        title: "Quote before replacing parts",
        body: "You approve the part and the price. If replacement is the safer spend, you get that number too.",
      },
    ],
    localAngle:
      "In {city}, furnaces sit idle through a long cooling season. {climate} The first cold week is when skipped fall maintenance shows up.",
    related: ["furnace-replacement", "heating", "maintenance-plans", "heat-pumps"],
    faqs: [
      {
        q: "What furnace problems are usually simple?",
        a: "Dirty flame sensors, failed igniters, tripped limits from a blocked filter, and clogged condensate drains on high-efficiency furnaces. They still need to be diagnosed, because the same symptom can be a worse fault.",
      },
      {
        q: "Do you service furnaces in Austin, where heat pumps are common?",
        a: "Yes. Plenty of Greater Austin homes still have gas furnaces, and dual-fuel systems use both a heat pump and a furnace. We repair the equipment that is in the house.",
      },
      {
        q: "Should I shut the furnace off if it is short-cycling?",
        a: "If you smell gas, see soot, or the unit is overheating, shut it off. If it is simply starting and stopping, leave it off until a technician can watch the sequence rather than resetting it all night.",
      },
    ],
  },
  {
    slug: "furnace-replacement",
    name: "Furnace Replacement",
    shortName: "Furnace Replacement",
    navGroup: "heating",
    locationPage: true,
    tags: ["heating", "install"],
    headline: "Furnace replacement matched to the cooling system, not sold on its own",
    description:
      "Furnace replacement in Dallas–Fort Worth and Greater Austin, quoted with the coil, blower, and ducts in mind.",
    outcome: "a new furnace that matches the coil and the way the house heats",
    intro: [
      "A furnace rarely lives alone. It shares a cabinet or a coil with the air conditioner, and the blower moves air for both seasons. Replacing the furnace without looking at that match creates a noisy, inefficient system that still cools poorly in June.",
      "Home Ranger Services quotes furnace replacement after looking at venting, gas supply, the evaporator coil, and the ducts. In all-electric homes we will also say if a heat pump is the clearer project, instead of forcing a gas furnace where the house has no gas.",
    ],
    signs: [
      {
        title: "The heat exchanger is cracked or the venting is unsafe",
        body: "That is a replacement. It is not a cleaning and it is not something to run ‘until spring.’",
      },
      {
        title: "Major parts keep failing on an older furnace",
        body: "Inducers, boards, and blowers add up. We will show the repair total next to a replacement.",
      },
      {
        title: "You are already replacing the air conditioner",
        body: "A coil and furnace change at the same time is often the clean match. We quote it as an option, not a requirement, unless the old furnace cannot accept the new coil.",
      },
      {
        title: "The house never heats evenly",
        body: "Sometimes that is the furnace. Often it is ducts. Replacement without duct corrections repeats the complaint.",
      },
    ],
    checks: [
      "Heat exchanger and vent condition",
      "Whether the evaporator coil should be replaced with the furnace",
      "Gas line, flue path, and condensate for high-efficiency options",
      "Blower size and duct capacity",
      "Electrical and thermostat compatibility",
      "Filter rack and return",
    ],
    process: [
      {
        title: "Confirm replacement is the right project",
        body: "If a repair is safe and sensible, we will still say so.",
      },
      {
        title: "Quote the match",
        body: "Furnace efficiency options, coil match, and any vent or duct changes as separate lines.",
      },
      {
        title: "Install, commission, and show you the filter",
        body: "We run it through a heat cycle, check drainage on condensing furnaces, and walk the thermostat.",
      },
    ],
    localAngle:
      "{city} heating equipment has to fit the houses already there. {housing} {signature}",
    related: ["furnace-repair", "heat-pumps", "ac-installation", "heating"],
    faqs: [
      {
        q: "Should I replace the furnace and the air conditioner together?",
        a: "Sometimes. If the coil and furnace are both old, one project is the cleaner match. If the cooling system is newer and compatible, we will not insist on replacing it.",
      },
      {
        q: "Are high-efficiency furnaces always worth it?",
        a: "Not in every Texas house. A condensing furnace needs a proper drain and a different vent. We explain the operating difference and let you choose with the prices in front of you.",
      },
      {
        q: "Can you replace a furnace in an all-electric Austin home?",
        a: "If there is no gas service, a furnace is the wrong recommendation. Those homes need heat pump repair or replacement, and we will quote that instead.",
      },
    ],
  },
  {
    slug: "heat-pumps",
    name: "Heat Pumps",
    shortName: "Heat Pumps",
    navGroup: "heating",
    locationPage: true,
    tags: ["heating", "cooling", "install"],
    headline: "Heat pumps for Texas cooling season and the cold nights that still happen",
    description:
      "Heat pump repair, maintenance, and installation in Dallas–Fort Worth and Greater Austin, including backup heat.",
    outcome: "year-round comfort from a heat pump that is set up for both Texas seasons",
    intro: [
      "A heat pump is an air conditioner that can run backward and heat the house. In much of Greater Austin it is the only heat. In Dallas–Fort Worth it may stand alone or pair with a gas furnace as a dual-fuel system.",
      "The setup details matter more than the brochure. Backup heat, defrost, and lockout temperatures decide whether January feels normal or whether you are silently heating on electric strips. Home Ranger Services repairs heat pumps and installs them with those settings checked, not left at the factory default.",
    ],
    signs: [
      {
        title: "Cooling works and heat does not, or the reverse",
        body: "The reversing valve, a sensor, or the thermostat can take one mode out while the other still runs.",
      },
      {
        title: "Winter bills jumped while the house feels warm",
        body: "The heat pump may be locked out, with electric strips doing all the work.",
      },
      {
        title: "The outdoor unit ices over and never clears",
        body: "Defrost problems are a heat pump issue, not a reason to chip ice off the coil yourself.",
      },
      {
        title: "You are replacing an air conditioner in an all-electric home",
        body: "A straight air conditioner leaves you without a real heating plan. A heat pump may be the correct replacement.",
      },
    ],
    checks: [
      "Cooling and heating operation, not just one mode",
      "Defrost cycle and outdoor coil condition",
      "Backup heat strips or paired furnace",
      "Thermostat lockout and auxiliary settings",
      "Airflow, charge symptoms, and drainage",
      "Age and whether the air handler matches the outdoor unit",
    ],
    process: [
      {
        title: "Run both modes when the weather allows",
        body: "A heat pump visit that only tests cooling misses the failure people call about in January.",
      },
      {
        title: "Check backup heat on purpose",
        body: "We confirm strips or the gas furnace actually come on, and that they are not coming on all the time.",
      },
      {
        title: "Quote repair or a matched replacement",
        body: "Options include a heat pump matched to the air handler you have, or a full change-out when the match is wrong.",
      },
    ],
    localAngle:
      "Heat pump advice in {city} depends on the winter that city actually gets. {climate} {housing}",
    related: ["heating", "ac-installation", "furnace-replacement", "ac-repair"],
    faqs: [
      {
        q: "Do heat pumps work in a Texas freeze?",
        a: "They work through typical Texas winters. During a hard freeze they need working backup heat. We test that backup instead of assuming it is there.",
      },
      {
        q: "Is a heat pump better than a furnace?",
        a: "It depends on the house. All-electric Austin-area homes are natural heat pump candidates. Many Dallas–Fort Worth homes already have gas and may be better served by a furnace, or by a dual-fuel system. We will not copy one metro’s default into the other.",
      },
      {
        q: "Why does my heat pump blow cool air in winter?",
        a: "Supply air from a heat pump is cooler than furnace air, even when the system is heating correctly. Air that never warms the room, or a unit stuck on emergency heat, is a fault we should diagnose.",
      },
    ],
  },
  {
    slug: "ductless-mini-splits",
    name: "Ductless Mini-Splits",
    shortName: "Ductless Mini-Splits",
    navGroup: "air",
    locationPage: true,
    tags: ["install", "cooling", "heating"],
    headline: "Ductless systems for rooms and houses that should not get a full duct retrofit",
    description:
      "Ductless mini-split installation and repair in Dallas–Fort Worth and Greater Austin, including older homes and room additions.",
    outcome: "room-by-room heating and cooling without building ducts the house does not want",
    intro: [
      "Some houses should not be opened up for a full duct system. Older central Austin bungalows, downtown McKinney houses, garage apartments, and single hot rooms over a garage are common examples.",
      "A ductless mini-split uses a small outdoor unit and indoor heads mounted in the rooms you care about. Home Ranger Services designs the head locations with the furniture and the structure in mind, then installs and services the equipment. We also say when ductless is the wrong tool and a conventional system is the cleaner project.",
    ],
    signs: [
      {
        title: "The house has no ducts",
        body: "Forcing flex through a plaster-and-beam bungalow can cost more and look worse than a careful ductless design.",
      },
      {
        title: "One room is always the problem",
        body: "A loft, a closed-in porch, or a garage apartment can be served on its own.",
      },
      {
        title: "You are finishing an ADU or a home office",
        body: "A dedicated ductless system keeps that space off an already tired main system.",
      },
      {
        title: "An existing mini-split is leaking, icing, or dripping indoors",
        body: "Those are service problems. A dirty head or a bad install drain is not automatically a new system.",
      },
    ],
    checks: [
      "Which rooms actually need conditioning",
      "Wall structure, line-set path, and condensate route",
      "Outdoor unit location and clearance",
      "Electrical capacity for the new circuit",
      "Whether the main system should be left alone",
      "Head placement relative to beds, sofas, and desks",
    ],
    process: [
      {
        title: "Decide if ductless is the right project",
        body: "We will recommend a conventional system when the house already has sound ducts.",
      },
      {
        title: "Place the heads and the line sets on purpose",
        body: "Drainage has to go downhill or to a pump we can stand behind. Line sets should not be an afterthought across the front of the house.",
      },
      {
        title: "Install, commission, and show you how to clean the filters",
        body: "Mini-split filters are simple and they matter. We leave you able to maintain them between visits.",
      },
    ],
    localAngle:
      "Ductless work in {city} follows the houses that were never ducted, or the single rooms a central system never reached. {housing}",
    related: ["ac-installation", "air-conditioning", "heat-pumps", "indoor-air-quality"],
    faqs: [
      {
        q: "Are mini-splits only for additions?",
        a: "No. They are a solid whole-house approach for older homes without ducts, and a targeted approach for one difficult room. They are a poor way to abandon a duct system that only needs repairs.",
      },
      {
        q: "Do they heat as well as cool?",
        a: "Most of the systems we install are heat pumps, so they do both. In a hard freeze, sizing and the specific model’s low-ambient performance matter, and we cover that in the quote.",
      },
      {
        q: "Why is my mini-split dripping inside?",
        a: "Usually the condensate path is clogged, flat, or pumped poorly. That is a service call. Keep the indoor unit off if water is reaching the wall.",
      },
    ],
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality",
    shortName: "Indoor Air Quality",
    navGroup: "air",
    locationPage: true,
    tags: ["air"],
    headline: "Indoor air improvements that start with leaks, filters, and moisture",
    description:
      "Indoor air quality service in Dallas–Fort Worth and Greater Austin: filtration, ventilation, humidity, and leaky returns.",
    outcome: "cleaner, more even air without a gadget that does not fit the problem",
    intro: [
      "Most indoor air complaints we see are dust from a leaky return, a filter rack that cannot hold the filter people bought, or a system that short-cycles and leaves the house humid. Cedar season in Austin and attic dust in Dallas make those problems louder.",
      "Home Ranger Services starts there. Better filtration, a sealed return, and humidity control solve more houses than a device with a vague promise. If a media filter, UV light, or ventilator belongs in the system, we say where it goes and what it will not do.",
    ],
    signs: [
      {
        title: "Dust returns right after you clean",
        body: "A return leaking attic air will do that no matter which filter brand is in the rack.",
      },
      {
        title: "The house feels clammy at a normal temperature",
        body: "Oversized or short-cycling equipment cools the thermostat and leaves the moisture.",
      },
      {
        title: "Allergies spike in cedar season or when the condenser is buried in pollen",
        body: "Filtration and a sealed return matter more in those months. The outdoor coil still needs to be clean so the system can run properly.",
      },
      {
        title: "Stale bedrooms with the door closed",
        body: "That is often a supply and return problem, not a need for another air cleaner.",
      },
    ],
    checks: [
      "Return leaks and filter bypass",
      "Filter size versus the rack",
      "Signs of high or low humidity",
      "Fresh-air intake, if one exists, and whether it is stuck open",
      "Coil cleanliness and drainage",
      "Whether a proposed accessory actually fits the air handler",
    ],
    process: [
      {
        title: "Name the complaint precisely",
        body: "Dust, odor, humidity, or a room that feels stale. They are different projects.",
      },
      {
        title: "Fix the duct and filter problem first",
        body: "Accessories go on a system that is not pulling attic air around the filter.",
      },
      {
        title: "Recommend only what fits",
        body: "You get a plain explanation of what the upgrade does and what it does not do.",
      },
    ],
    localAngle:
      "Indoor air in {city} tracks the season and the attic. {climate} {signature}",
    related: ["duct-services", "ac-maintenance", "ductless-mini-splits", "maintenance-plans"],
    faqs: [
      {
        q: "Will a thicker filter fix dust?",
        a: "Only if the rack seals and the blower can handle it. A thick filter that collapses or leaves gaps can make dust and airflow worse. We check the rack before changing the filter type.",
      },
      {
        q: "Do you recommend air purifiers for cedar fever?",
        a: "Filtration and a sealed return help during Ashe juniper season. We will not promise that a single device eliminates cedar pollen. Keeping outdoor air leaks out of the return is the first step.",
      },
      {
        q: "Why does the house feel damp if the thermostat is at 73?",
        a: "The system may be short-cycling, oversized, or low on airflow, so it is not running long enough to remove moisture. That is an equipment and duct diagnosis, not a thermostat setting.",
      },
    ],
  },
  {
    slug: "duct-services",
    name: "Air Duct Services",
    shortName: "Air Duct Services",
    navGroup: "air",
    locationPage: true,
    tags: ["ducts", "air"],
    headline: "Duct repair and sealing for attics that steal conditioned air",
    description:
      "Duct repair, sealing, and airflow corrections in Dallas–Fort Worth and Greater Austin. We fix the runs that keep rooms from settling.",
    outcome: "ductwork that delivers the air the system is already making",
    intro: [
      "In a Texas attic, ductwork is part of the system. Crushed flex, disconnected supplies, and leaky plenums throw away cooling you already paid for. Rooms at the end of the run go warm. The equipment runs longer. Someone eventually recommends a bigger unit.",
      "Home Ranger Services measures before recommending duct work. If the supply temperature at the unhappy room is far warmer than the supply at the plenum, the run between them is the job. We repair, reseal, and resize where the measurement says to. We do not sell a duct cleaning as a cure for a disconnected branch.",
    ],
    signs: [
      {
        title: "One or two rooms never match the rest of the house",
        body: "The branch to those rooms may be kinked, undersized, or off.",
      },
      {
        title: "The system is loud and the filter pulls in hard",
        body: "High static pressure often means undersized returns or a collapsing duct.",
      },
      {
        title: "Dusty rooms under an attic return",
        body: "Leaky returns pull attic air, insulation fibers, and pollen into the house.",
      },
      {
        title: "You are replacing equipment and the ducts are original",
        body: "New equipment on failed ducts repeats the old complaint. We quote duct corrections as their own line.",
      },
    ],
    checks: [
      "Supply temperature at the plenum and at problem rooms",
      "Visible flex, splices, and plenum connections",
      "Return size and leakage",
      "Static pressure when the complaint suggests an airflow limit",
      "Insulation on ducts in unconditioned attics",
      "Registers that were closed to ‘push air’ elsewhere",
    ],
    process: [
      {
        title: "Map the unhappy rooms",
        body: "We need to know which supplies serve them, not just which thermostat is on the wall.",
      },
      {
        title: "Measure, then recommend",
        body: "A disconnected branch, a crushed run, and a system that is simply too small look different once we test.",
      },
      {
        title: "Repair the duct and retest the room",
        body: "The job is done when the room is closer to the rest of the house, not when a length of flex has been replaced on principle.",
      },
    ],
    localAngle:
      "Attic ducts are a {city} problem because of how the houses were built. {housing} {signature}",
    related: ["ac-repair", "ac-installation", "indoor-air-quality", "ac-maintenance"],
    faqs: [
      {
        q: "Do I need duct cleaning or duct repair?",
        a: "If rooms are uneven, start with repair and leakage. Cleaning does not reconnect a supply or un-kink a run. If the ducts are intact and you want debris removed, we will say whether cleaning is useful in that system.",
      },
      {
        q: "Can new equipment fix bad ducts?",
        a: "No. A new condenser still has to push air through the same attic. We quote needed duct work with the replacement so you are not surprised after the install.",
      },
      {
        q: "Should I close vents in unused rooms?",
        a: "Closing a lot of supplies raises static pressure and can freeze a coil or make the blower loud. Tell us which rooms you want unused and we will look at a better way to balance them.",
      },
    ],
  },
  {
    slug: "commercial-hvac",
    name: "Commercial HVAC",
    shortName: "Commercial HVAC",
    navGroup: "commercial",
    locationPage: true,
    tags: ["cooling", "heating", "maintenance"],
    headline: "Commercial HVAC for small buildings that cannot wait on a down system",
    description:
      "Light commercial heating and cooling repair, maintenance, and replacement in Dallas–Fort Worth and Greater Austin.",
    outcome: "a clear repair plan for light commercial systems, with maintenance that is written down",
    intro: [
      "A closed restaurant, a hot office, or a retail floor without cooling is a business problem, not a homeowner inconvenience. Home Ranger Services works on light commercial equipment: split systems, small package units, and the rooftop units that serve many Dallas and Austin storefronts and offices.",
      "We keep the scope honest. If the building needs a controls contractor or a crane schedule we do not have, we say that early. For the systems we do service, you get the same standard as a house: diagnose, price, and wait for approval before the work starts.",
    ],
    signs: [
      {
        title: "The business is open and the system is not",
        body: "Tell us the hours you keep. We schedule commercial no-cool calls with that in mind.",
      },
      {
        title: "Tenants complain about one suite",
        body: "Multi-suite buildings often have more than one system. We identify the unit that serves the complaint.",
      },
      {
        title: "Maintenance has been ‘when it breaks’",
        body: "Filters, belts, drains, and condenser coils are the unglamorous reasons a package unit quits in July.",
      },
      {
        title: "You manage several sites",
        body: "A written record of what was found at each visit is more useful than a stack of invoices with no notes.",
      },
    ],
    checks: [
      "Which unit serves the space that is down",
      "Filters, belts, and drains",
      "Contactor, capacitor, and blower or belt drive",
      "Economizer or fresh-air intake if it is stuck",
      "Thermostat or simple commercial control",
      "Roof access, power, and after-hours constraints",
    ],
    process: [
      {
        title: "Confirm access before we roll",
        body: "Roof locks, suite keys, and a person who can approve a repair save a wasted trip.",
      },
      {
        title: "Diagnose the unit that serves the complaint",
        body: "We label it in the notes so the next visit is not a treasure hunt.",
      },
      {
        title: "Quote the repair and the maintenance that would have caught it",
        body: "You can approve the repair now and talk about a reliability plan after the space is comfortable.",
      },
    ],
    localAngle:
      "Light commercial work in {city} is usually storefronts, offices, and small buildings, not central plants. {signature}",
    related: ["ac-repair", "ac-maintenance", "heating", "maintenance-plans"],
    faqs: [
      {
        q: "What commercial equipment do you service?",
        a: "Light commercial splits, small package units, and common rooftop units on offices, retail, and restaurants. Large central plants, chillers, and building-automation retrofits are outside our scope, and we will say so instead of improvising.",
      },
      {
        q: "Can you work after hours?",
        a: "After-hours access is something we schedule on purpose, especially when the repair should not happen with customers in the space. Ask when you book and we will tell you what we can do.",
      },
      {
        q: "Do you offer commercial maintenance agreements?",
        a: "Yes. The commercial reliability plan is a documented maintenance visit with photos and a priority list, not a handshake. Details are on the commercial plans page.",
      },
    ],
  },
  {
    slug: "maintenance-plans",
    name: "Homeowner Maintenance Plans",
    shortName: "Maintenance Plans",
    navGroup: "plans",
    locationPage: true,
    tags: ["maintenance"],
    headline: "A maintenance plan that leaves you a record, not a sticker",
    description:
      "Homeowner HVAC maintenance plans for Dallas–Fort Worth and Greater Austin, with seasonal visits and written findings.",
    outcome: "two seasonal visits a year and a written record of what was found",
    intro: [
      "A maintenance membership is worth it when the visits are real. Home Ranger Services plans include a cooling visit and a heating visit, a written list of findings, and reminder scheduling so the furnace is not inspected for the first time on the night it fails.",
      "Members do not get a scripted replacement pitch. They get priority scheduling when the board is full, and repair pricing quoted the same way as any other customer: before the work starts. Plan details and the current seasonal offer are confirmed when you join, in writing.",
    ],
    signs: [
      {
        title: "You want the system checked before summer and before winter",
        body: "That is the whole point of the plan. One visit is cooling-focused. One is heating-focused.",
      },
      {
        title: "You own a house with two systems",
        body: "Both need to be on the plan or the forgotten unit becomes the emergency.",
      },
      {
        title: "You travel or manage the house from somewhere else",
        body: "A written report after each visit is more useful than a voicemail that said ‘looks fine.’",
      },
      {
        title: "Last year the failure was something maintenance should have seen",
        body: "Clogged drains, weak capacitors, and dirty flame sensors are the usual examples.",
      },
    ],
    checks: [
      "Cooling visit: coils, charge symptoms, drain, capacitor, temperature split",
      "Heating visit: ignition or heat pump backup, flue or defrost, limits",
      "Filter size and a note on what to buy",
      "Thermostat batteries and settings that cause lockouts",
      "Photos of anything that needs a decision",
      "A priority list: do now, schedule, or leave alone",
    ],
    process: [
      {
        title: "Put every system on the list",
        body: "We record model and serial so the next technician is not starting from zero.",
      },
      {
        title: "Visit twice a year",
        body: "Spring cooling and fall heating, scheduled instead of remembered.",
      },
      {
        title: "Decide on repairs with the report in hand",
        body: "Anything beyond maintenance is quoted and waits for approval.",
      },
    ],
    localAngle:
      "A {city} plan has to cover the season that city actually stresses. {climate} {signature}",
    related: ["ac-maintenance", "furnace-repair", "heat-pumps", "home-sale-inspections"],
    faqs: [
      {
        q: "What is included in the homeowner plan?",
        a: "A cooling-season visit, a heating-season visit, a written finding list, and priority scheduling for repairs. Parts and repairs are not prepaid surprises; they are quoted when we find them.",
      },
      {
        q: "Does the plan cover both systems in a two-system house?",
        a: "Each system needs to be listed. A plan on the downstairs unit does not include the upstairs unit unless we enrolled both.",
      },
      {
        q: "Can I cancel?",
        a: "Yes. The terms you agree to at signup are the terms, in writing, including how a mid-year cancellation works. We do not hide that in a phone script.",
      },
    ],
  },
  {
    slug: "home-sale-inspections",
    name: "HVAC Inspections for Home Sales",
    shortName: "Home Sale Inspections",
    navGroup: "plans",
    locationPage: true,
    tags: ["maintenance"],
    headline: "HVAC inspections for buyers and sellers who need the system explained",
    description:
      "Pre-sale and buyer HVAC inspections in Dallas–Fort Worth and Greater Austin, with written findings a home sale can actually use.",
    outcome: "a written HVAC picture of the house before you buy it or list it",
    intro: [
      "A general home inspection notes that the air conditioner turned on. It rarely tells you whether the coil is dirty, the heat exchanger looks unsafe, the ducts are disconnected, or the system is a 16-year-old matched set one failure away from a replacement.",
      "Home Ranger Services inspections are for buyers who want a specialist look and sellers who would rather know the findings before the buyer does. You get a written list: what ran, what did not, what looks unsafe, and what is simply old. We do not convert the inspection into a same-day replacement unless you ask for a quote.",
    ],
    signs: [
      {
        title: "You are buying a house and the disclosure says ‘HVAC unknown’",
        body: "Age, operation, and obvious safety issues are worth knowing before the option period ends.",
      },
      {
        title: "The inspector wrote ‘recommend evaluation by HVAC company’",
        body: "That line is common. This visit is the evaluation.",
      },
      {
        title: "You are listing a house with older equipment",
        body: "A seller inspection lets you repair a simple fault or disclose an old system without drama.",
      },
      {
        title: "The house has more than one system and nobody knows which is which",
        body: "We label what we can: upstairs, downstairs, or zone.",
      },
    ],
    checks: [
      "Age from data plates where they are still readable",
      "Cooling and heating operation",
      "Filter, drain, and obvious coil condition",
      "Visible heat exchanger and flue issues",
      "Thermostat and backup heat behavior",
      "Duct problems that are visible without demolishing the attic",
    ],
    process: [
      {
        title: "Confirm timing with the contract",
        body: "Tell us the option period. We would rather be honest about the schedule than imply a same-day report we cannot make.",
      },
      {
        title: "Inspect and write it down",
        body: "Findings are separated into safety, function, and age so a negotiation has something specific to point at.",
      },
      {
        title: "Quote repairs only if you want them",
        body: "The inspection stands on its own. A repair quote is a second decision.",
      },
    ],
    localAngle:
      "Home sales in {city} move through the same attics and closets we service all year. {housing} {signature}",
    related: ["ac-maintenance", "furnace-repair", "duct-services", "maintenance-plans"],
    faqs: [
      {
        q: "Is this a home inspection?",
        a: "No. It is an HVAC-only inspection. It does not replace a licensed home inspector’s report on the rest of the house.",
      },
      {
        q: "Will you fix items during the inspection?",
        a: "Not unless you have asked us to quote and approve a specific repair. The default product is the written finding list.",
      },
      {
        q: "Can both the buyer and the seller hire you?",
        a: "Yes, but not on the same house at the same time if the interests conflict. Tell us who you are representing when you book.",
      },
    ],
  },
];

const bySlug = new Map(services.map((service) => [service.slug, service]));

for (const service of services) {
  for (const slug of service.related) {
    if (!bySlug.has(slug)) {
      throw new Error(`${service.slug} lists unknown related service ${slug}`);
    }
  }
}

export function getService(slug: string) {
  return bySlug.get(slug);
}

export function locationServices() {
  return services.filter((service) => service.locationPage);
}

export function relatedServices(service: Service) {
  return service.related
    .map((slug) => bySlug.get(slug))
    .filter((item): item is Service => Boolean(item));
}
