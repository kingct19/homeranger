export type PostSection = {
  heading?: string;
  paragraphs: string[];
};

export type PostSource = {
  name: string;
  url: string;
  published: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cityFocus: string;
  sections: PostSection[];
  source?: PostSource;
};

export const posts: Post[] = [
  {
    slug: "epa-r410a-rule-dallas-austin-2026",
    title: "The EPA still allows some R-410A air conditioners to be installed in Dallas and Austin",
    description:
      "A May 2026 EPA rule lets contractors install leftover R-410A systems built before 2025 until that stock is gone. Here is what that changes on a Dallas or Austin replacement.",
    date: "2026-09-28",
    cityFocus: "Dallas and Austin",
    source: {
      name: "National Association of Home Builders",
      url: "https://www.nahb.org/blog/2026/05/epa-hvac-refrigerants-r-410a-final-rule",
      published: "2026-05-26",
    },
    sections: [
      {
        paragraphs: [
          "On May 26, 2026, the National Association of Home Builders reported that the EPA published a final rule letting homes keep receiving HVAC units that were manufactured or imported before January 1, 2025 and that use R-410A. Those units can be installed until the existing supply is gone. The rule took effect July 27, 2026. Before the amendment, a split system from that older stock was not supposed to be installed after January 1, 2026.",
          "That is an installation rule for leftover equipment. It is not an order to replace the air conditioner you already have. An R-410A system that is cooling the house can stay in service, and manufacturers are still making parts for those systems. NAHB also noted that new complete R-410A systems are no longer being manufactured, so the warehouse stock will run out, and that R-410A refrigerant production is scheduled to fall to 15 percent of current output by 2036. Repair refrigerant will get harder to find on that schedule. It is not gone this summer.",
        ],
      },
      {
        heading: "What to ask on a Dallas or Austin quote",
        paragraphs: [
          "A 2026 replacement in Dallas–Fort Worth or Greater Austin may be leftover R-410A equipment or a new system built for an A2L refrigerant such as R-454B or R-32. Those are different jobs. Ask which refrigerant the outdoor unit uses, whether the indoor and outdoor sections are a matched pair, and whether the price is for remaining pre-2025 stock or for equipment being built now.",
          "NAHB pointed out that some states kept the original January 1, 2026 installation cutoff. New York did. The article does not put Texas in that group. The quote should still say which equipment you are buying, because a cheaper leftover R-410A condenser is not the same scope as a new A2L system with the sensors that equipment requires.",
          "If the system you have is R-410A and a part will fix it, the EPA rule is not a reason to replace it. If you are replacing it, the useful comparison is the equipment on each quote, the refrigerant, and whether the attic ducts in a Dallas house or the long flex runs in a newer Austin suburb can actually move the air.",
        ],
      },
    ],
  },
  {
    slug: "a2l-refrigerant-texas-ducts-2026",
    title: "New refrigerants are exposing undersized ducts in Texas houses",
    description:
      "ACHR News reported in September 2026 that A2L equipment is less forgiving of old ducts and sloppy charging. That shows up in Dallas attics and Austin flex-duct houses.",
    date: "2026-09-29",
    cityFocus: "Dallas and Austin",
    source: {
      name: "ACHR News",
      url: "https://www.achrnews.com/articles/166659-where-the-a2l-transition-exposes-install-shortcuts",
      published: "2026-09-11",
    },
    sections: [
      {
        paragraphs: [
          "On September 11, 2026, ACHR News published a field report by Paolo Weston on the move to A2L refrigerants. New residential systems use R-454B or R-32 instead of R-410A, under the EPA limit that applied to equipment manufactured from January 1, 2025. Weston’s point is that the new equipment is less willing to hide an undersized duct system, a charge that was guessed from a gauge, or a condenser and coil that were never matched.",
          "Dallas–Fort Worth has a lot of the housing he is describing: equipment and ductwork in a hot attic, often resized one box at a time. Greater Austin adds long flex runs in newer suburbs and older houses that were never ducted well. A high-efficiency system on those ducts can run and still leave a back bedroom behind. The article’s practical test is to measure static pressure and airflow before the equipment is chosen, weigh the refrigerant charge for the line length, and confirm the indoor and outdoor units are an AHRI-matched pair.",
        ],
      },
      {
        heading: "What that means before you approve a change-out",
        paragraphs: [
          "Ask whether anyone measured the ducts, not only the square footage. Ask whether the factory charge covers your line set. Ask for the matched-system rating and for startup numbers written down. ACHR News noted that a missed match, a skipped manufacturer A2L training record, or a line set the instructions do not allow can put the parts warranty at risk, and that the denial often shows up years later when a major part fails.",
          "None of that is a reason to replace a system that only needs a repair. It is a reason to treat a replacement in this climate as a duct-and-equipment decision. If the attic cannot move the air, you should hear that before the equipment is sold.",
        ],
      },
    ],
  },
  {
    slug: "ac-replacement-cost-dallas-2026",
    title: "What it costs to replace an air conditioner in Dallas in 2026",
    description:
      "The factors that move an air conditioner replacement price in Dallas–Fort Worth, and the questions to ask before you approve a quote.",
    date: "2026-08-12",
    cityFocus: "Dallas",
    sections: [
      {
        paragraphs: [
          "Dallas homeowners ask for a single number, and a single number is how people get surprised. A straight split-system change-out on a one-system house is a different project from a two-system Preston Hollow replacement that also needs new returns. In 2026, a planning range for a typical single-system Dallas replacement often lands somewhere between about $7,000 and $15,000, and houses with two systems, difficult attic access, or substantial duct repairs sit above that. Treat those figures as a planning range, not a Home Ranger quote.",
          "The range is wide because the scope is wide. Tonnage, SEER2 level, whether the furnace or air handler is replaced with the condenser and coil, electrical updates, and duct repairs all move the price. A quote that hides duct work inside one lump sum is hard to compare with a quote that lists it.",
        ],
      },
      {
        heading: "What should be on the quote",
        paragraphs: [
          "Ask which indoor and outdoor models are included, what refrigerant they use, and whether the price assumes the existing line set, pad, and disconnect can stay. Ask what happens if the attic ducts are crushed or the return is undersized. In Dallas those are common findings, not edge cases, because so much equipment and ductwork sits in vented attics.",
          "Efficiency is worth buying when the price difference is clear and the ducts can actually deliver the air. A high-SEER2 condenser on a leaking attic duct system will not perform like the sticker. A useful quote shows a good option and a better option, with the operating difference described in plain language.",
        ],
      },
      {
        heading: "Repair versus replace",
        paragraphs: [
          "A failed capacitor on an eight-year-old system is a repair. A failed compressor on a 16-year-old matched system is a decision, and you should see both prices before anyone starts. Age alone is not a failure. A cracked heat exchanger, a coil that cannot be matched, or a third major repair in two years is a stronger reason to replace.",
          "If you are comparing contractors, compare scope. The low number that reuses a bad return and skips commissioning is not the same job as a change-out that includes airflow setup, a new disconnect if the old one is cooked, and haul-away.",
        ],
      },
    ],
  },
  {
    slug: "furnace-replacement-cost-austin-2026",
    title: "Furnace replacement cost in Austin in 2026, and when you do not need one",
    description:
      "How to think about furnace replacement prices in Greater Austin, including homes that should get a heat pump instead.",
    date: "2026-08-20",
    cityFocus: "Austin",
    sections: [
      {
        paragraphs: [
          "A lot of Greater Austin homes do not have a furnace. Newer houses in Pflugerville, Manor, Leander, and Dripping Springs are often all-electric heat pumps. If a contractor quotes a gas furnace and the house has no gas, the quote is for a different project than the one you own.",
          "Where Austin homes do have gas furnaces — older central neighborhoods, some northwest houses, dual-fuel systems — a 2026 planning range for a straightforward furnace replacement is often about $4,000 to $9,000. High-efficiency condensing furnaces, coil changes, venting changes, and difficult closets move the price up. That is a market planning range, not a quote from us.",
        ],
      },
      {
        heading: "Match the furnace to the cooling coil",
        paragraphs: [
          "The furnace blower is also the air conditioner blower. Replacing a furnace and leaving a tired, mismatched coil is how a winter project becomes a June complaint. A good quote says whether the evaporator coil stays, and why.",
          "High-efficiency furnaces condense and need a drain and a different vent. In a pier-and-beam or tight central Austin closet, that scope can matter more than the efficiency percentage. Ask for it as a line item.",
        ],
      },
      {
        heading: "When a repair is enough",
        paragraphs: [
          "Dirty flame sensors, failed igniters, and clogged condensate lines shut furnaces down every winter and do not require a new furnace. A cracked heat exchanger does. If someone recommends replacement, ask what failed and ask to see the repair price beside it.",
          "Fall is the right time to find out which category you are in. The first cold night in January is the expensive time to discover the inducer is done and the heat exchanger should have been looked at months ago.",
        ],
      },
    ],
  },
  {
    slug: "heat-pump-or-furnace-north-texas",
    title: "Heat pump or gas furnace in North Texas",
    description:
      "How Dallas–Fort Worth homeowners can choose between a heat pump, a gas furnace, and a dual-fuel system without a script.",
    date: "2026-07-28",
    cityFocus: "Dallas–Fort Worth",
    sections: [
      {
        paragraphs: [
          "North Texas is not a single-answer heating market. Plenty of Dallas–Fort Worth houses are on gas and should stay on a furnace. Others are all-electric, or they are due for an air conditioner replacement and could move to a heat pump. Dual-fuel systems use a heat pump most of the winter and a gas furnace on the coldest nights.",
          "The wrong way to decide is to copy a slogan. The right way is to look at whether you have gas, how the ducts are sized, and what backup exists when a hard freeze shows up. The February 2021 freeze is still the right memory test: whatever you install has to have a plan for a few genuinely cold nights, not just a mild December.",
        ],
      },
      {
        heading: "What a heat pump feels like",
        paragraphs: [
          "Furnace air is hotter at the register. Heat pump air is warmer than the room but cooler than furnace air, and people sometimes think it is broken when it is not. A heat pump that never catches up, or a system stuck on emergency heat, is broken, and the electric bill will say so.",
          "Backup heat has to be tested. Electric strips or a gas furnace that only exist on paper will fail during the front you bought them for. Ask any installer to show you the lockout setting and to run the backup on purpose.",
        ],
      },
      {
        heading: "A practical way to choose",
        paragraphs: [
          "If the house has reliable gas and a sound furnace, replacing only the air conditioner is often the simpler project. If the furnace is also at the end, price a matched furnace and coil against a dual-fuel or heat pump option. If there is no gas, stop pricing furnaces.",
          "Efficiency claims should be tied to a model number and a price. A heat pump that is a bargain because the backup heat was left out of the quote is not a complete system.",
        ],
      },
    ],
  },
  {
    slug: "ductless-mini-splits-older-austin-homes",
    title: "Ductless mini-splits for older Austin homes",
    description:
      "When a ductless system is a better fit than new ducts for bungalows and older central Austin houses.",
    date: "2026-09-08",
    cityFocus: "Austin",
    sections: [
      {
        paragraphs: [
          "Hyde Park, Travis Heights, Tarrytown, and a lot of east and south central Austin were built before central air was assumed. Adding a full duct system means bulkheads, a place for an air handler, and attic or crawlspace runs in houses that were not framed for them. A ductless mini-split is often the smaller, cleaner project.",
          "Ductless is not automatically better. If the house already has intact ducts and the complaint is one crushed run, repair the duct. Mini-splits earn their place when the ducts do not exist, when one room was added, or when a garage apartment needs its own system.",
        ],
      },
      {
        heading: "What a careful install includes",
        paragraphs: [
          "Head location matters more than people expect. A head blowing across a bed or mounted where the condensate cannot fall will be hated, even if the capacity is right. Line sets should have a thought-through path. Pumps are a last resort, not the default, because pumps fail.",
          "Most mini-splits we specify are heat pumps, so the room is not cooling-only. In an Austin freeze, the model’s low-ambient performance and the rest of the house’s heat plan both belong in the conversation.",
        ],
      },
      {
        heading: "Maintenance is simple and easy to skip",
        paragraphs: [
          "The indoor filters are small and they clog. A clogged head freezes or drips inside the room. Homeowners can clean those filters, and a yearly service should still check the drain path and the outdoor unit.",
          "If a mini-split is dripping on the wall, turn it off. Running it usually makes the drywall worse. The fix is almost always the condensate path, not a new head.",
        ],
      },
    ],
  },
  {
    slug: "dallas-attic-duct-problems",
    title: "How to tell if Dallas attic ducts are the real problem",
    description:
      "Room-to-room temperature gaps, noisy blowers, and dusty returns often start in the attic, not at the condenser.",
    date: "2026-09-15",
    cityFocus: "Dallas",
    sections: [
      {
        paragraphs: [
          "Dallas puts a remarkable amount of its ductwork in attics that reach well above the outdoor temperature. Flex duct sags, gets stepped on, comes loose at the plenum, and leaks at the return. The condenser outside can be doing its job while the back bedroom never sees that air.",
          "The useful test is simple to describe and worth doing before you buy a larger system. Measure the supply temperature near the air handler and at the unhappy room. A large gap means the run between them is losing the cooling. A tiny gap means look elsewhere: the room’s load, a closed damper, or a system that really is undersized.",
        ],
      },
      {
        heading: "Returns cause as many complaints as supplies",
        paragraphs: [
          "An undersized or leaky return makes the blower loud, collapses cheap filters, and can freeze the coil. People close upstairs supplies to force air downstairs and make the static pressure worse. Dust that returns the day after cleaning often means the return is pulling attic air.",
          "A thicker filter is not a repair for a rack that does not seal. If air can go around the filter, the filter brand is irrelevant. Sealing the return and confirming the filter size is the indoor-air project that belongs first.",
        ],
      },
      {
        heading: "Replacement does not skip this",
        paragraphs: [
          "New equipment connected to failed ducts will be described as a bad brand within a year. Any Dallas replacement quote should say what the ducts need, as a separate scope, even if the answer is ‘the ducts are fine and here is why we think so.’",
          "Duct cleaning and duct repair are different services. Cleaning does not reconnect a branch that fell off in 2014. If the complaint is uneven rooms, start with repair.",
        ],
      },
    ],
  },
  {
    slug: "hvac-inspection-before-buying-texas-home",
    title: "What an HVAC inspection should cover before you buy a Texas home",
    description:
      "A specialist HVAC inspection looks past ‘the system turned on’ and tells a buyer what is old, unsafe, or simply dirty.",
    date: "2026-09-22",
    cityFocus: "Dallas and Austin",
    sections: [
      {
        paragraphs: [
          "Texas option periods are short, and the HVAC note in a general inspection is often one line: the system operated, recommend further evaluation. That line is common because a whole-house inspector is not there to pull a blower or watch a furnace sequence. If the house is older, has two systems, or the disclosure is vague, a specialist visit is the evaluation.",
          "In Dallas–Fort Worth, ask specifically about attic ducts, the furnace heat exchanger, and whether both systems were run. In Greater Austin, ask whether the house is a heat pump, whether backup heat came on, and whether a ductless system or a closet air handler was actually inspected rather than noted from the hallway.",
        ],
      },
      {
        heading: "Separate safety, function, and age",
        paragraphs: [
          "A useful report does not mash everything into ‘replace.’ A cracked heat exchanger or a flue dumping into the house is a safety item. A system that cools but has a dirty coil is a function item. A 14-year-old condenser that still runs is an age item. Those three categories negotiate differently.",
          "Age comes from the data plate when it is still readable. Anyone who quotes an age with no plate and no installation record is estimating. Estimates should be labeled as estimates.",
        ],
      },
      {
        heading: "Do not turn the inspection into a sales call",
        paragraphs: [
          "You can ask for a repair quote. You do not have to. Buyers in particular should be wary of an inspection that exists to create same-day urgency. Findings can be real and still wait until you own the house, except for safety issues the occupants should know about now.",
          "If you are the seller, a pre-list inspection is how a failed capacitor gets fixed before it becomes a concession, and how an old but working system gets disclosed accurately.",
        ],
      },
    ],
  },
];

const bySlug = new Map(posts.map((post) => [post.slug, post]));

export function getPost(slug: string) {
  return bySlug.get(slug);
}

export const newsPosts = posts
  .filter((post) => post.source)
  .sort((left, right) => right.date.localeCompare(left.date));
