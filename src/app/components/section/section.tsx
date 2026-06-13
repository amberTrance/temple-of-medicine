import styles from "./section.module.css";

type SectionType = "locale" | "exposition" | "peripateia" | "lysis";

const config: Record<SectionType, { label: string; color: string }> = {
  locale: { label: "Locale", color: "blue" },
  exposition: { label: "Exposition", color: "green" },
  peripateia: { label: "Peripateia", color: "red" },
  lysis: { label: "Lysis", color: "purple" },
};

interface Props {
  section: SectionType;
  children: React.ReactNode;
}

export function Section({ section, children }: Props) {
  const { label, color } = config[section];

  return (
    <div className={styles.section}>
      <h4 className={`${styles.label} ${color}`}>{label}</h4>
      {children}
    </div>
  );
}
