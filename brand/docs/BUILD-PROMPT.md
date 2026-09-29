# Copy this brief into Cursor

Build a responsive HVAC website for Home Ranger Services using the supplied asset package. Use `docs/BRAND-GUIDE.md` as the design source of truth and import `styles/brand.css`. Treat the HVAC reference board as primary; preserve the navy #0A2C5A, orange #FF7A00, white, and gray palette.

Use the transparent logo at `logos/home-ranger-primary.png` on a light header and the technician at `mascot/home-ranger-technician.png` in the hero. Do not display a whole reference board as the website. Use the SVG service icons for heating, cooling, air quality, repairs, installation, and maintenance. Use the favicon in `logos/favicon.svg`.

Create a clear header, hero with headline “Trusted comfort. Stronger homes.”, six service cards, a short company introduction, a three-step request-service process, and a contact section. Use short, helpful copy. Avoid unverified claims. Use real HTML headings and buttons with accessible contrast. Style CTAs with navy text on orange. Maintain visible keyboard focus. Support reduced motion. Load the hero eagerly and noncritical images lazily. Reserve image dimensions to avoid layout shift.

Use Monument Extended only if licensed font files are supplied; otherwise keep the provided fallback. Use Inter if supplied or available in the project, otherwise Arial. Keep desktop content within 1200px and make mobile layouts comfortable at 320px and above.

Before publishing, obtain the real phone, email, address/service area, operating hours, business credentials, and form destination. Do not invent reviews, statistics, a street address, or technician credentials. Wire the service form to a real endpoint and provide success/error states; do not show a fake success message. Use placeholders in development only. This package contains no backend and no functional booking system.
