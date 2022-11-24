import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
export default function index({ ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link className={styles.single} href={`/ninjas/${ninja.id}`}>
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  return {
    props: {
      ninjas: data,
    },
  };
};
