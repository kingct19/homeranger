import { cities } from "@/content/cities";

export type CityPhoto = {
  src: string;
  alt: string;
  credit: string;
  license: string;
  href: string;
};

export const cityPhotos: Record<string, CityPhoto> = {
  "dallas": {
    src: "/photos/cities/dallas.jpg",
    alt: "Dallas skyline at dusk",
    credit: "Matthew T Rader",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Dallas_Skyline_at_Dusk.jpg",
  },
  "fort-worth": {
    src: "/photos/cities/fort-worth.jpg",
    alt: "Downtown Fort Worth skyline from the Trinity River",
    credit: "DerekAyala27",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Downtown_Fort_Worth_Skyline.jpg",
  },
  "arlington": {
    src: "/photos/cities/arlington.jpg",
    alt: "Globe Life Field in Arlington",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Arlington_June_2020_5_(Globe_Life_Field).jpg",
  },
  "plano": {
    src: "/photos/cities/plano.jpg",
    alt: "Plano Municipal Center",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Plano_October_2015_36_(Municipal_Center).jpg",
  },
  "frisco": {
    src: "/photos/cities/frisco.jpg",
    alt: "The Star in Frisco",
    credit: "Danazar",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Ford_Center_at_the_Star_-_May_2018_-_Exterior.jpg",
  },
  "irving": {
    src: "/photos/cities/irving.jpg",
    alt: "Aerial view of Las Colinas in Irving",
    credit: "La Citta Vita",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Las_Colinas,_Irving_Texas_(6040356380).jpg",
  },
  "mckinney": {
    src: "/photos/cities/mckinney.jpg",
    alt: "Historic downtown McKinney",
    credit: "Mistermckinney",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Historic_Downtown_McKinney.jpg",
  },
  "garland": {
    src: "/photos/cities/garland.jpg",
    alt: "Downtown Garland",
    credit: "Rcolborn",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Downtown_Garland_.jpg",
  },
  "grand-prairie": {
    src: "/photos/cities/grand-prairie.jpg",
    alt: "Grand Prairie City Hall",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Grand_Prairie_May_2019_09_(Grand_Prairie_City_Hall).jpg",
  },
  "richardson": {
    src: "/photos/cities/richardson.jpg",
    alt: "A plaza in Richardson",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Richardson_August_2019_01_(plaza).jpg",
  },
  "carrollton": {
    src: "/photos/cities/carrollton.jpg",
    alt: "Downtown Carrollton station",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Carrollton_July_2019_25_(Downtown_Carrollton_Station).jpg",
  },
  "denton": {
    src: "/photos/cities/denton.jpg",
    alt: "Denton County Courthouse on the Square at night",
    credit: "Clint Miller",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Denton_County_Courthouse-on-the-Square_night_hdr.jpg",
  },
  "allen": {
    src: "/photos/cities/allen.jpg",
    alt: "Aerial view of Allen",
    credit: "Ken Lund from Reno, Nevada, USA",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:AllexTX_Aerial.jpg",
  },
  "mesquite": {
    src: "/photos/cities/mesquite.jpg",
    alt: "Broad Street in Mesquite",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mesquite_July_2019_05_(Broad_Street).jpg",
  },
  "lewisville": {
    src: "/photos/cities/lewisville.jpg",
    alt: "Lewisville City Hall",
    credit: "Brandon Cooper",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Lewisville_City_Hall_2.jpg",
  },
  "flower-mound": {
    src: "/photos/cities/flower-mound.jpg",
    alt: "Aerial view of Flower Mound",
    credit: "formulanone",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Flower_Mound_Texas_Aerial_(49394951597).jpg",
  },
  "austin": {
    src: "/photos/cities/austin.jpg",
    alt: "Downtown Austin skyline at night",
    credit: "Jonathan Cutrer from San Angelo, United States",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Austin_Texas_Downtown_Skyline_at_Night_(10555159946).jpg",
  },
  "round-rock": {
    src: "/photos/cities/round-rock.jpg",
    alt: "The round rock the city of Round Rock is named for",
    credit: "Another Believer",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Round_Rock,_Texas,_2021_-_10.jpg",
  },
  "cedar-park": {
    src: "/photos/cities/cedar-park.jpg",
    alt: "Cedar Park Depot",
    credit: "Pi3.124",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Cedar_Park_Depot,_Texas.jpg",
  },
  "georgetown": {
    src: "/photos/cities/georgetown.jpg",
    alt: "Williamson County Courthouse in Georgetown",
    credit: "25or6to4",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Williamson_County_Courthouse_(2018),_Georgetown,_TX.jpg",
  },
  "pflugerville": {
    src: "/photos/cities/pflugerville.jpg",
    alt: "The shore of Lake Pflugerville",
    credit: "Larry D. Moore",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Lake_pflugerville_2012.jpg",
  },
  "leander": {
    src: "/photos/cities/leander.jpg",
    alt: "A MetroRail train at Leander station",
    credit: "Greg3564",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Leander2.jpg",
  },
  "kyle": {
    src: "/photos/cities/kyle.jpg",
    alt: "City Square Park in Kyle",
    credit: "Larry D. Moore",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:City_Square_Park_Kyle_Texas.jpg",
  },
  "buda": {
    src: "/photos/cities/buda.jpg",
    alt: "Historic downtown Buda",
    credit: "Travis K. Witt",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Buda_Texas_Historic_Downtown.JPG",
  },
  "san-marcos": {
    src: "/photos/cities/san-marcos.jpg",
    alt: "Hays County Courthouse in San Marcos",
    credit: "25or6to4",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Hays_County_Courthouse_(2018),_San_Marcos,_TX.jpg",
  },
  "lakeway": {
    src: "/photos/cities/lakeway.jpg",
    alt: "Lake Travis and Mansfield Dam near Lakeway",
    credit: "Antony-22",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Lake_Travis_aerial_2018.jpg",
  },
  "bee-cave": {
    src: "/photos/cities/bee-cave.jpg",
    alt: "Bee Cave City Hall",
    credit: "Larry D. Moore",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Bee_Cave_Texas_City_Hall_South_Elevation.jpg",
  },
  "dripping-springs": {
    src: "/photos/cities/dripping-springs.jpg",
    alt: "Dripping Springs City Hall",
    credit: "Larry D. Moore",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Dripping_Springs_Texas_City_Hall_2019.jpg",
  },
  "manor": {
    src: "/photos/cities/manor.jpg",
    alt: "Downtown Manor",
    credit: "Larry D. Moore",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Old_Commercial_Buildings_Downtown_Manor_Texas_2022.jpg",
  },
  "hutto": {
    src: "/photos/cities/hutto.jpg",
    alt: "Hutto City Hall",
    credit: "Larry D. Moore",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:City_Hall_Hutto_Texas_2022.jpg",
  },
};

for (const city of cities) {
  if (!cityPhotos[city.slug]) {
    throw new Error(`Missing hero photo for ${city.slug}`);
  }
}

export function cityPhoto(slug: string) {
  const photo = cityPhotos[slug];
  if (!photo) {
    throw new Error(`Missing hero photo for ${slug}`);
  }
  return photo;
}
