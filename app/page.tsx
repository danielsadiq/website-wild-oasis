import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>My next app</h1>
      <Link href="/cabins">Explore Cabins</Link>
    </div>
  );
}