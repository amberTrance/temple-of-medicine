import Link from "next/link";

import styles from "./buttonHollow.module.css";

type ButtonProps = {
  children: string;
  href: string;
};



export const ButtonHollow = ({ children, href }: ButtonProps) => (
  <button className={styles.button}>
    <Link href={href}>{children}</Link>
  </button>
);
