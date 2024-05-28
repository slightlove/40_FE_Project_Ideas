import Image from "next/image";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </main>
  );
}
