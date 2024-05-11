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
        <h2 id="how-it-works" className="blue">Dream Analysis</h2>

        <p>
          I can interpret your dream in a <span className="blue">video session</span> or through{" "}
          <span className="blue">email</span>, as you prefer.
        </p>

        <p>
          You can directly give me the dream or we can go into more details
          about what your <span className="blue">goals</span> are, what it is that you wish to
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
          Next, I will enquire about <span className="blue">associations</span> and{" "}
          <span className="blue">thoughts from the day before</span>, if applicable.
        </p>

        <p>
          Usually, the unconscious tends to repeat the same motifs over longer
          periods of time. This is why it's more likely to extract greater
          meaning and depth from a dream series over a few weeks or months, than
          from a single dream.
        </p>

        <p>
          If you opt for the video session, we have fifty minutes together to
          explore a dream and your goals.
        </p>
      </section>

      <section style={{ maxWidth: "700px"}}>
        <h2 className="blue">Dream Analysis Technique</h2>

        <h3 className="blue">Stages</h3>

        <p>The dream can be split in different parts, in the same way that a theater play is divided.</p>
         
        <ul>
          <li><span className="blue">Locale</span>: The place, time and characters in the dream.</li>

          <li><span className="blue">Exposition</span>: The illustration of the problem.</li>

          <li><span className="blue">Peripateia</span>: The illustration of the transformation - which can also leave room for catastrophe.</li>

          <li><span className="blue">Lysis</span>: It presents the result of the dream, a meaningful closure. The lysis can be often missing.</li>
        </ul>

        <h3 className="blue">General rules</h3>

        <ul>
          <li><span className="blue">Dreams are compensatory</span>: Ask yourself what conscious attitude does the unconscious try to compensate for? The unconscious is like a thermometer, if you are too hot, it will bring something cold to bring back the equilibrium. Compensation does not mean complementary. For instance, if in real life you react with aggression, the dreams won't disapprove but rather support it if that was the appropriate response.</li>

          <li><span className="blue">Amplification</span>: Ask what the dreamer associates to a word, then what more, and so on. Amplification is not free association. The dream image is like a diamond with many faces, we keep on turning it around until we fall on the meaning that seems to fit in the dream context.</li>

          <li><span className="blue">Explore</span>: Don't stop to the first associations that make sense. Explore various possibilities.</li>

          <li>
            <span className="blue">Link with other dreams</span>:
             We can make an assumption about the meaning of one dream and see if this meaning attribution explains another dream, if it is of more general significance.
             We find confirmation or correction of our assumptions in the following dreams.
          </li>

          <li>
            <span className="blue">Central core:</span>{" "}
             In dream series the dreams are connected to one another in a meaningful way, 
             as if they tried to give expression to a central content from ever-varying angles.
             To touch this central core is to find the key to the explanation of the individual dreams.
             Keep in mind that the deams have a purpose, that the unconscious produces the dreams for a reason.
          </li>

          <li>
            <span className="blue">Dreams can be premonitory:</span>{" "}
            However, they mostly allude to what may happen and not what will.
          </li>

          <li>
            <span className="blue">Dream characters:</span>{" "}
            Are about 80% of the time aspects of our own self. When you dream of a friend, most of the time it refers to something within you that is like that friend, rather than to the actual person.
            Occasionally the dream refers to the actual person as well, thus, exploring the meaning of both possibilities is what tells us which of the two it is.
            If one of the options is telling you something unremarkable, while the other one comes as a surprising insight, then it is surely the second.
          </li>
        </ul>
      </section>
    </>
  );
}
