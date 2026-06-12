import { ReactNode } from "react";
import styles from "./association.module.css";

type Theme = "yellow" | "blue" | "green" | "red" | "purple";

type AssociationProps = {
  word: string;
  association: ReactNode;
  theme?: Theme;
};

export const Association = ({ word, association, theme = "yellow" }: AssociationProps) => (
  <li className={styles.item}>
    <span className={theme}>{word}</span> — {association}
  </li>
);
