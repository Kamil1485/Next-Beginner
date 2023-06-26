import Link from "next/link";
import styles from "./styles.module.css";
const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];
export default function NavbarComp() {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Karaisli
      </Link>
      <div className={styles.wrapper}>
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.url}>
            <span className={styles["main-Title"]}>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
