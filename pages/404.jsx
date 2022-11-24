import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Error() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
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
