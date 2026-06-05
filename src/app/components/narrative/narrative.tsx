import styles from "./narrative.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Locale({ children, className }: Props) {
  return (
    <span className={`blue-bg ${styles.highlight}${className ? ` ${className}` : ""}`}>
      {children}
    </span>
  );
}

export function Exposition({ children, className }: Props) {
  return (
    <span className={`green-bg ${styles.highlight}${className ? ` ${className}` : ""}`}>
      {children}
    </span>
  );
}

export function Peripateia({ children, className }: Props) {
  return (
    <span className={`red-bg ${styles.highlight}${className ? ` ${className}` : ""}`}>
      {children}
    </span>
  );
}

export function Lysis({ children, className }: Props) {
  return (
    <span className={`purple-bg ${styles.highlight}${className ? ` ${className}` : ""}`}>
      {children}
    </span>
  );
}
