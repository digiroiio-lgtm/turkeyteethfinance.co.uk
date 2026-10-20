import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container not-found">
      <p className="eyebrow" style={{ justifyContent: "center" }}>
        PAGE NOT FOUND
      </p>
      <h1>Let’s find your way.</h1>
      <p>
        This page could not be found. Explore the treatment journey or start a
        new enquiry.
      </p>
      <Link className="button button-small" href="/">
        Back to the homepage
      </Link>
    </div>
  );
}
