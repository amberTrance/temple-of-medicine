type ButtonProps = {
  children: string;
};

import styles from "./buttonHollow.module.css";

export const ButtonHollow = ({ children }: ButtonProps) => (
  <button className={styles.button}>{children}</button>
);
