import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <p className="kicker text-leaf">404</p>
      <h1 className="mt-3 font-serif text-5xl">That page is not on the site.</h1>
      <p className="mt-4 text-lg text-mute">
        Try the service list or the city you need. If you were booking a visit, the contact page is the right place.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-dark">
          Home
        </Link>
        <Link href="/service-areas" className="btn btn-line">
          Service areas
        </Link>
        <Link href="/contact" className="btn btn-primary">
          Contact
        </Link>
      </div>
    </section>
  );
}
