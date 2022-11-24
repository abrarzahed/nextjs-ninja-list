import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio illum
        laudantium. Eius, dolorem molestias cupiditate nam suscipit tenetur
        dicta minima odit libero porro commodi illum. At inventore ea
        architecto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio illum
        laudantium. Eius, dolorem molestias cupiditate nam suscipit tenetur
        dicta minima odit libero porro commodi illum. At inventore ea
        architecto.
      </p>
      <Link href="/ninjas">
        <span>Ninja Listing</span>
      </Link>
    </div>
  );
}
