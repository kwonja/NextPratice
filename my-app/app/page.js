import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <p><Link href="/meals">href /meals</Link></p>
      <p><Link href="/meals/share">/meals/share</Link></p>
      <p><Link href="/community">/meals/share</Link></p>
    </div>
  );
}
