import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/about">
        <span>About</span>
      </Link>
      <Link href="/ninjas">
        <span>Ninja Listing</span>
      </Link>
    </nav>
  );
}
