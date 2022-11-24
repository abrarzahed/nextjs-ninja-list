import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
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
      <Link className={styles.btn} href="/ninjas">
        <span>Ninja Listing</span>
      </Link>
    </div>
  );
}
