import { Button } from "@/app/components/button/button";
import styles from "./page.module.css";
import { ButtonHollow } from "@/app/components/buttonHollow/buttonHollow";
import { GoDownButton } from "@/app/components/goDownButton/goDownButton";

export default function Home() {
  return (
    <>
      <section style={{ marginBottom: "400px" }}>
        <h1>Helping people find meaning by interpreting their dreams.</h1>

        <div className={styles.buttons}>
          <Button href="/dreams">Interpretation examples</Button>

          <ButtonHollow href="mailto:mind.edifice@gmail.com">
            Contact me
          </ButtonHollow>
        </div>

        <GoDownButton id="#how-it-works" title="How does it work?" />
      </section>

      <section>
        <h1 id="how-it-works">Dream Analysis Technique</h1>

        <p>
          I can interpret your dream in a <span>video session</span> or through{" "}
          <span>email</span>, as you prefer.
        </p>

        <p>
          You can directly give me the dream or we can go into more details
          about what your <span>goals</span> are, what it is that you wish to
          achieve by having your dreams analyzed and how I can help you to
          achieve them.
        </p>

        <p>
          If you opt for a video session, I prefer to receive the dream in an
          email beforehand, so that I can see the dream motifs and prepare a bit
          in advance. This is particularly useful for dream symbols that are
          frequently shared in the collective unconscious and less likely of a
          personal nature.
        </p>

        <p>
          Next, I will enquire about <span>associations</span> and{" "}
          <span>thoughts from the day before</span>, if applicable.
        </p>

        <p>
          With the help of the associations and other techniques of Jungian
          dream analysis, such as the stages of a dream (e.g. peripeteia, plot
          development), we then attempt to <span>understand the images</span>{" "}
          and to set them in the <span>context of your life</span>. The goal is
          to decipher what the unconscious is trying to communicate to you about
          where you are at the moment, what you're doing right or wrong, and
          what must be done next.
        </p>

        <p>
          Usually, the unconscious tends to repeat the same motifs over longer
          periods of time. This is why it's more likely to extract greater
          meaning and depth from a dream series over a few weeks or months, than
          from a single dream.
        </p>

        <p>
          If you opt for the video session, we have fifty minutes together to
          explore a dream and your goals. The price of a session is for start{" "}
          <span>10 euros</span> and you can pay in any currency you
          need. For more details feel free to contact me through email.
        </p>
      </section>
    </>
  );
}
