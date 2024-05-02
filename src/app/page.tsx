import { Button } from "@/app/components/button/button";
import styles from "./page.module.css";
import { ButtonHollow } from "@/app/components/buttonHollow/buttonHollow";

export default function Home() {
  return (
    <>
      <section style={{ marginBottom: "150px"}}>
        <h1>Helping people find meaning by interpreting their dreams.</h1>

        <div className={styles.buttons}>
          <Button href="/dreams">Interpretation examples</Button>

          <ButtonHollow href="mailto:mind.edifice@gmail.com">Contact me</ButtonHollow>
        </div>
      </section>

      <h2>Hi, I am Angie.</h2>
    </>
  );
}
