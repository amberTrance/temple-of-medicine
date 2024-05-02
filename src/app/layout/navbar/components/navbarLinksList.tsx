import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./navbarLinks.module.css";
import { prefix } from "../../../../../constants";

type NavbarLinksListProps = {
  handleClick?: () => void;
}

export const NavbarLinksList = ({ handleClick }: NavbarLinksListProps) => {
  const pathname = usePathname()

  // --- RENDER ---

  return (
    <>
      <li className={styles.li}>
        <Link
          className={`${styles.navbarLinks} underline-grow ${
            pathname === `${prefix}/dreams` &&
            `underline-grow-stable ${styles.navbarLinksSelected}`
          }`}
          href="/dreams"
          onClick={handleClick}
        >
          Dreams
        </Link>
      </li>

      <li className={styles.li}>
        <Link
          className={`${styles.navbarLinks} underline-grow ${
            pathname === `${prefix}/blog` &&
            `underline-grow-stable ${styles.navbarLinksSelected}`
          }`}
          href="/blog"
          onClick={handleClick}
        >
          Blog
        </Link>
      </li>

      <li className={styles.li}>
        <Link
          className={`${styles.navbarLinks} underline-grow ${
            pathname === `${prefix}/about` &&
            `underline-grow-stable ${styles.navbarLinksSelected}`
          }`}
          href="/about"
          onClick={handleClick}
        >
          About
        </Link>
      </li>
    </>
  );
};
