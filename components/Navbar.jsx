import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="logo" width="128" height="77" />
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
