# Asset notes

Source images were supplied by the user. All three remain unchanged in `references/`. The first board contains visibly degraded/transparent regions; use it as a conceptual reference only. The HVAC board controls colors and messaging where boards differ.

`home-ranger-technician.png` is an AI-derived standalone recreation using the built-in image generation tool and the HVAC board as input. It may differ in small details from the board. It is a PNG raster asset. Review small uniform emblems before large-format printing.

The primary and reversed logo SVGs are clean code-drawn vector adaptations of the supplied house/HR identity, with outlined DejaVu Sans Bold lettering. They are not exact tracings and do not use Monument's proprietary lettering. Their PNG versions are 2000 × 840 raster exports of those SVGs. The vector paths are font-independent. Generated raster logo attempts were discarded because of unwanted halo artifacts. For exact original brand geometry, obtain the designer's source files.

The 12 SVG icons and roofline pattern were drawn in code for this package. They are coordinated interpretations, not extracted original artwork. `favicon.svg` is a simplified code-drawn HR house adaptation for small sizes.

No font binaries, customer testimonials, real fleet photography, or trademark clearance are included. The reference boards' vehicle and uniform applications are mockups.

For colored icons, inline the SVG markup or use the sprite via `<svg class="hr-icon" aria-hidden="true"><use href="/assets/icons/sprite.svg#cooling"/></svg>`. With external `<img>` SVGs, CSS `color` does not pass into the file; inline or sprite usage is preferred. Some browsers restrict external sprites under file://; test the sprite through your normal local development server.
