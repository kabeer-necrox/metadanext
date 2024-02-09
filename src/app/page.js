{
  ("use client");
}
import productlist from './productlist/page'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next routing</h1>
      <Link href="/productlist">product list</Link>
    </main>
  );
}
