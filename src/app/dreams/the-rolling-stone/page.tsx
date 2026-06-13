import { Heading } from "@/app/components/heading/heading";
import { Association } from "@/app/components/association/association";
import {
  Locale,
  Exposition,
  Peripateia,
  Lysis,
} from "@/app/components/narrative/narrative";
import { DreamsData } from "@/app/utils/articleData";
import styles from "./page.module.css";
import { SymbolLink } from "@/app/components/symbolLink/symbolLink";
import { Section } from "@/app/components/section/section";

export default function TheRollingStone() {
  return (
    <div className={styles.container}>
      <Heading
        alt={DreamsData.stone.alt}
        date={DreamsData.stone.date}
        title={DreamsData.stone.title}
        src={DreamsData.stone.src}
      />

      <div className={styles.prose}>
        <h2 className="red">Context</h2>
        <p>
          The dreamer is a male of 29 that was at the moment of the dream in a
          relationship of more than a year with a woman. The relationship was
          filled with fights. He would frequently be uncertain if a serious
          relationship is what he needs and would fantasize about multiple,
          various life possibilities, such as being a sailor or a bartender. The
          dreamer would also feel frequently depressed and empty.
        </p>
      </div>

      <div className={styles.prose}>
        <h2 className="red">Dream Series</h2>
        <p>
          These two dreams represent the same problem presented in different
          ways. It is particularly helpful to focus on the outcome of both
          dreams. In the first dream, the stone rolls away, the dreamer loses it
          and the girlfriend is angry. In the second dream, the born babies are
          usb sticks.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Dream 1 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p>
            <Locale>
              A blond girl, full of life, jumpy and joyful, a bit hippie/boho
              was kissing me passionately, loving me, stalking me a bit.
            </Locale>
            <Exposition>
              She was pregnant with me and wanted to keep the baby because it
              felt true with her. We were on a cathedral
            </Exposition>
            <Peripateia>
              {" "}
              and the baby fell down - it was a marble. The marble was rolling
              down a long slope and I was running after it.
            </Peripateia>
            <Lysis>
              Then there was my girlfriend, and she was mean to me, discontent
              that I was with another girl.
            </Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="red">First dream</h3>
          <Section section="locale">
            <p>
              We know about the dreamer that he has relationship problems and he
              tends to fall into wishful fantasies. In the first dream he is
              enchanted by this lovely anima figure. The anima represents the
              man's impulse and libido towards life. However, if this impulse is
              not properly expressed in real life it can take destructive forms.
              In folklore, we have the sirens luring the sailors towards their
              own death. In real life this can be represented in many ways, such
              as a porn addiction, basically anything that takes the man into a
              world of fruitless fantasy.
            </p>
          </Section>
          <Section section="exposition">
            <p>
              The enchanting anima figure is pregnant with new possibility.{" "}
            </p>
          </Section>
          <Section section="peripateia">
            <p>
              The dreamer is then with his pregnant anima on top of a cathedral
              when the baby is born, and behold, the baby is a stone that falls
              and rolls away from the dreamer.{" "}
              <SymbolLink symbol="crystal">Round objects</SymbolLink> in dreams
              are a reference to the figure of the{" "}
              <SymbolLink type="archetype" symbol="self">
                Self
              </SymbolLink>
              . When we dream about round shapes, whether it is a mandala, a
              ball or a hat, it points towards the deepest aspect of ourselves —
              that which represents our totality and wholeness.
            </p>
            <p>
              That the dreamer is high up with the anima on the church, could
              once more refer to a state of fantasy and inflation. But why is he
              on a church and not a tower, or a mountain? The{" "}
              <SymbolLink symbol="church">church</SymbolLink> stands for the
              mother, so we can read it that what sustains the dreamer and his
              fantasy of feminine perfection is the dreamer's mother complex,
              since growing up is never as perfect as the childhood fantasy. But
              the stone falls down into reality, pulled by the gravity of the
              earth where the dreamer tries to follow and catch it but loses it.
            </p>
          </Section>
          <Section section="lysis">
            <p>
              The end of the dream shows the real life consequences of the whole
              ordeal on the dreamer's relationship.
            </p>
          </Section>
        </div>

        {/* Dream 2 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p>
            <Locale>
              I was with a woman, my girlfriend or wife, for holidays.
            </Locale>
            <Exposition>
              {" "}
              I was making her stupidly fat, like an inflated balloon.
            </Exposition>
            <Peripateia> Then she was pregnant</Peripateia>
            <Lysis>
              {" "}
              and she gave birth to twins which were stored in three usb sticks.
            </Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="red">Second dream</h3>
          <p className={styles.associationsLabel}>Associations</p>
          <ul>
            <Association
              word="usb sticks"
              association="virtual reality"
              theme="red"
            />
          </ul>
          <p>
            The second dream comes to complement the first one and present the
            issue even more explicitly. Both women are pregnant, and in this
            second dream the born children are usb sticks. So this union with
            the anima gives birth to something unreal, or to the loss of one's
            own self. Furthermore, blowing up the wife is a form of inflation.
            The dreamer's fantasies of various possibilities in life are
            inflated, as in, they are overly romanticized and unrealistic.
          </p>
        </div>
      </div>

      <div className={styles.synthesis}>
        <h2 className="red">Excerpt from The Secret of The Golden Flower</h2>
        <p>
          Below is an excerpt from Richard Wilhelm's book "The Secret of the
          Golden Flower" which illustrates the problem of following the anima
          and losing the possibility of individuation as consequence.
        </p>
        <p>
          "...if the ego follows the anima, the personal element retreats and
          there ensues an involution corresponding to the amount of
          externalization. The being then becomes an impotent phantom because
          the forces of life fail and its fate is ended. It now partakes of the
          fruits of its good or bad deeds in heavens or hells, which, however,
          are not external things, but purely subjective states. The more the
          being is sunk in these states, the more entangled in them it becomes,
          till finally it disappears from the plane of existence, of whatever
          nature that may have been, and then by entering a new womb begins a
          new existence formed out of its supply of images and memories. This
          condition is the state of the daemon, the spirit, the departed one,
          the one who withdraws. The Chinese word for this ghost-being is kuei,
          often wrongly translated by "devil".
        </p>
        <p>
          If, on the other hand, it has been possible during life to set going
          the "backward-flowing", rising movement of the life-forces, if the
          forces of the anima are mastered by the animus, then a release from
          external things takes place. They are recognized but not desired. Thus
          the illusion is robbed of its strength. An inner, ascending
          circulation of forces takes place. The ego withdraws from its
          entanglement in the world, and after death remains alive because
          interiorization has prevented the wasting of the life-forces in the
          outer world."
        </p>
      </div>
    </div>
  );
}
