import Link from "next/link";

export default function Error() {
  return (
    <div className="error">
      <h1>Oooops...</h1>
      <h2>The page cannot be found</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>{" "}
      </p>
    </div>
  );
}
