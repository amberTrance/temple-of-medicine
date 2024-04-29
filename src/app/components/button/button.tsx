type ButtonProps = {
    children: string
    href: string;
}

import Link from "next/link";
import styles from "./button.module.css"

export const Button = ({ children, href }: ButtonProps) => (
  <button className={styles.button}>
    <Link href={href}>{children}</Link>
  </button>
);