/**
 * Launch settings. Fill phone, license, email, and url before the site goes live.
 * phoneTel is digits only, used for tel: links. Leave both phone fields blank to hide the number.
 */
export const site = {
  name: "Home Ranger Services",
  url: "https://homerangerservices.com",
  email: "service@homerangerservices.com",
  phoneTel: "",
  phoneDisplay: "",
  license: "",
  description:
    "Home Ranger Services repairs, maintains, and replaces heating and cooling systems for homes and small businesses in Dallas–Fort Worth and Greater Austin.",
} as const;

export const regions = {
  dallas: {
    id: "dallas" as const,
    name: "Dallas–Fort Worth",
    short: "DFW",
    summary:
      "Hot attics, long cooling seasons, and cold snaps that show up after the furnace has sat idle all summer. North Texas homes need repairs that respect both.",
  },
  austin: {
    id: "austin" as const,
    name: "Greater Austin",
    short: "Austin",
    summary:
      "A longer cooling season, older central homes without ductwork, and a lot of newer all-electric houses. Cedar season makes indoor air part of the comfort problem.",
  },
};
