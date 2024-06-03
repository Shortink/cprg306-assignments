import Link from "next/link";


export default function Home() {
  const linkStyles = "text-cyan-600 hover:text-cyan-300";
  return (
    <main className="h-screen">
      <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className={linkStyles}><Link href="./week-2">Week 2</Link></li>
        <li className={linkStyles}><Link href="./week-3">Week 3</Link></li>
        <li className={linkStyles}><Link href="./week-4">Week 4</Link></li>
      </ul>
    </main>
  );
}
