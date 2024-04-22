import Link from "next/link";

import styles from "./navbarLinks.module.css";

export const NavbarLinksList = () => (
  <>
    <li className={styles.li}>
      <Link className={`${styles.navbarLinks} underline-grow`} href="/blog">
        Blog
      </Link>
    </li>

    <li className={styles.li}>
      <Link className={`${styles.navbarLinks} underline-grow`} href="/about">
        About
      </Link>
    </li>
  </>
);
