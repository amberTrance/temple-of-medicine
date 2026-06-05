"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { prefix } from "../../../../constants";
import { DreamsData } from "@/app/utils/articleData";
import styles from "./page.module.css";
import {
  Locale,
  Exposition,
  Peripateia,
  Lysis,
} from "@/app/components/narrative/narrative";

export default function ThePriceToPayIsTooHigh() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={`f-row ${styles.backButton}`}
        onClick={() => router.back()}
      >
        <FaArrowLeft size="18px" />
        <p style={{ fontWeight: "bold", fontSize: "18px" }}>Back to overview</p>
      </button>

      <h1 className={styles.title}>{DreamsData.price.title}</h1>
      <p className={styles.date}>{DreamsData.price.date}</p>

      <div className={styles.heroImage}>
        <Image
          src={`${prefix}/${DreamsData.price.src}.jpg`}
          alt={DreamsData.price.alt}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
            borderRadius: "6px",
          }}
        />
      </div>

      <div className={styles.prose}>
        <h2 className="yellow">Dream Series</h2>
        <p>
          Here you can see how the unconscious repeats the same dream theme even
          a year later, when the problem behind the dream image is not
          addressed. Here I attempt to connect the dreams and find the
          overarching meaning.
        </p>
      </div>

      <div className={styles.prose}>
        <h2 className="yellow">Context</h2>
        <p>
          The dreamer is a male of 29. At the moment of the dreams he was in a
          relationship. He would experience frequent feelings of emptiness and
          depression. The relationship was all over the place, where she would
          want stability, but he would fluctuate, occasionally declaring they
          are not together. The dreamer would read about the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Puer_aeternus"
            className="yellow"
            target="_blank"
          >
            Puer archetype
          </a>{" "}
          feeling that it describes him well.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Row 1 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p className={`yellow ${styles.dreamDate}`}>20.04.2022</p>
          <p>
            <Locale>
              I was in Japan in an elegant store and{" "}
            </Locale>
            <Exposition>wanted to buy cigarettes.</Exposition>
            <Locale>
              There was a square in the center and 4 seats at the corners. By
              pressing a button we can lower the seat (like the villain in
              Pokémon 2). An asian man
            </Locale>
            <Exposition>
              {" "}
              came down from the seat and handed me a pack of cigarettes. I gave
              him 10€ but he told me it wasn't enough. So I tried with 1000 czk
              but still no. I then told him that I wasn't going to buy the
              package but he absolutely wanted me to pay for it.
            </Exposition>
            <Peripateia>
              {" "}
              We had a falling out and then I left. So a chase started with my 3
              friends, we were chased by a kind of secret police.
            </Peripateia>
            <Lysis>
              {" "}
              Two of my friends were quickly caught and I managed to escape with
              the last one.
            </Lysis>{" "}
            We then found ourselves in my house. To get out, we slid against the
            walls but they were 10 meters high. We were still being chased.
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="yellow">First dream</h3>
          <p className={styles.associationsLabel}>Dreamer Associations</p>
          <ul className={styles.associations}>
            <li className={styles.associationItem}>
              <span className="yellow">Japan</span> — exciting and a different
              world
            </li>
            <li className={styles.associationItem}>
              <span className="yellow">cigarettes</span> — they make me feel
              full when I am empty, but they are also unhealthy and cause cancer
            </li>
          </ul>
          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} blue`}>Locale</p>
            <p>
              The dream setting is in Japan, in a store, and the only other
              dream character outside the ego is the asian man.{" "}
              A{" "}
              <a href="/symbols?word=store" className={styles.symbolLink} target="_blank" rel="noopener noreferrer">
                store
              </a>{" "}
              in a dream represents a place where a transaction between the conscious
              mind and the unconscious takes place. The square shape of the
              room, further amplified by the{" "}
              <a href="/symbols?word=four" className={styles.symbolLink} target="_blank" rel="noopener noreferrer">
                four
              </a>{" "}
              chairs, point to the symbolism
              of wholeness, of totality, representative of the Self. However,
              the connection with a villain character suggests to us that we are
              confronted with a dark side of the Self. The Self turns negative
              when the ego attitude is too contrary to that of the unconscious.
              The initial setting of the dream points to the current psychic
              attitude, which here shows an attitude that seeks excitement and
              novelty.
            </p>
          </div>

          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} green`}>Exposition</p>
            <p>
              The purpose is to buy cigarettes, a means to fill up emptiness
              that is unhealthy. This exchange between the ego and the
              unconscious happens through the asian man, a shadow aspect of the
              dreamer itself. We can see here that the Self is playing tricks on
              the ego. Do you wish to fill up your emptiness in a way that is
              meaningless and unhealthy? Sure, you can do this, but the price to
              pay is never enough. The libido of the dreamer gets drained more
              and more, which in real life looks like emptiness and depression.
            </p>
          </div>

          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} red`}>Peripateia</p>
            <p>
              A conflict ensues, and the ego runs away and is chased by secret
              police. When we are being chased in dreams, our task is to turn
              our face to that which chases us and to ask it: what do you want
              from me? The chase here results from the dreamer not wanting to
              pay the price for the cigarettes.
            </p>
          </div>

          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} purple`}>Lysis</p>
            <p>
              Two friends get caught while the ego and another friend escape.
              Then, as it frequently happens in dreams, a second dream starts
              which continues on the theme of the first one. Here we see that
              the chase continues and there is no resolution to the problem.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p className={`yellow ${styles.dreamDate}`}>11.04.2023</p>
          <p>
            Me and my girlfriend were going to meet midway on a street, for a
            drink. When we met, she asked me if I had my wallet. I said yes. We
            entered a bar but it turned out to be my grandparent's house.
            Inside, I asked the bartender for two beers. He said it will be 30€
            with an Italian accent. I found it weird but didn't really
            understand at first (my mind was lost: did he mean 3 or 30?). I gave
            him a bill of 1000 czk (green like the ones of 2000). He went to the
            other room to find the change, the room in which my grandmother
            keeps her money. After some time, I was so puzzled and realized the
            price. So I told Ana: « I won't pay 30€ for 2 beers ». I climbed the
            stairs of the house, and the guy was closing a box on the wardrobe.
            He was so surprised to see me here that he made a move to jump
            through the window. I screamed: « Ana, open the door! » so that it
            could be possible to catch him from outside but managed to catch him
            before he jumped. I woke up and my interpretation was that he had a
            gun in the box.
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="yellow">Second dream</h3>
          <p>
            The dreamer is meeting midway with his girlfriend. In relationship
            terms this would mean that they both sacrifice equally for their
            relationship. She then asks him if he has his wallet, if he has
            money. Money in a dream means libido. Then they enter a bar that
            turned out to be the grandparents house. The dreamer had very
            positive associations to the grandparents house. When he was a boy,
            he would meet his grandmother after school and she would buy him
            pokemon cards. In the present day he would often nostalgically
            return to those memories.
          </p>
          <p>
            It is interesting then to note that the unconscious takes this
            image, the grandparents house, and gives to it an ominous feeling.
            In the dream the house was dark and the italian man and overall
            atmosphere reminded him of the italian mafia. This tells us that
            those lofty, beautiful feelings are hiding a mother complex. A
            hidden desire to remain a child and avoid the responsibilities of
            adulthood. And here we see that when the dreamer takes his
            relationship to such a place, the consequences are bad.
          </p>
          <p>
            The dreamer associated drinks with intimacy, because when you drink
            you open up and share a lot. So here he wants to share a moment with
            his lover but the italian asks for 30 euros. But not only the drink
            is overpriced, the italian tries to run away with the money. There
            is however a moment of insight when the dreamer chases the italian.
            Here the italian is taken by surprise and attempts to jump out the
            window. What would this mean in psychological terms? That at the
            moment when the dreamer is about to realize his error, he becomes
            unconscious again and keeps on acting under the influence of the
            shadow figure with no recognition of his error. So the unconscious
            says: catch it before it runs away. Become aware that it's your
            mother complex that makes you feel that it costs too much to be in
            an intimate relationship. The dreamer wakes up before he catches the
            thief.
          </p>
        </div>

        {/* Row 3 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p className={`yellow ${styles.dreamDate}`}>22.04.2023</p>
          <p>
            I was with Ana at my place in the bedroom. We heard a noise. A big
            man has opened the room's door. I asked him who he was and he said
            that he was living here from today. He was saying that Ana shouldn't
            live here, that it was illegal. I told him that she didn't live here
            (because she didn't). He went to the other room that had completely
            changed. There was big furniture now in the room (a wardrobe, a
            table, he even put a clock on the wall). I asked him who he was. He
            said that he was coming from North-East Italy, I thought that it
            must be close to Slovenia. It seems that he wanted to live here so I
            was looking for my contract and I was trying to call my landlord in
            order to make him understand that it wasn't possible (and I didn't
            want to live with him).
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="yellow">Third dream</h3>
          <p>
            The setting of this dream is an intimate moment with the partner.
            And here we meet again the italian man. This time he is much more
            powerful than in the previous dream. He takes over the house, moves
            in, and declares the girlfriend should not be here because she does
            not belong. That he takes over the house means that the dreamer is
            possessed by this shadow figure.
          </p>
        </div>
      </div>

      <div className={styles.synthesis}>
        <h3 className="yellow">Synthesis</h3>
        <p>
          In the first dream, we have the theme of finding excitement, meaning
          and wholeness in an unhealthy way that is punished by the unconscious.
          The punishment consists in asking the dreamer to pay for his behaviour
          a price that seems untenable and the chase which represents psychic
          invasions that are usually neurotic behaviours. We know from the life
          of the dreamer that he would frequently feel depressed and empty. The
          dreamer is thus trying to find meaning without putting in the effort,
          easy like smoking a ciggy.
        </p>
        <p>
          This tendency of looking for pleasure and meaning in easy ways and not
          put in the effort required from adult life appears again in the second
          dream, where the beloved childhood house is shown in negative light by
          the unconscious. Here again the unconscious steals from the dreamer.
          If the dreamer wants to have a meaningful and intimate relationship
          with his girlfriend, he needs to grow up and leave behind the fantasy
          of the grandmother house where everything was perfect and sweet and
          there were no adult responsibilities.
        </p>
        <p>
          The third dream is an amplification of what happened in the second
          dream. The italian was not caught. The dreamer did not realize the
          consequence on his relationship of remaning infantile. The childhood
          dreams take over and the shadow side grows proportionally bigger. The
          dreamer is now having doubts about his relationship and feels that
          it's perhaps not what he wants. The dark side of the childhood fantasy
          is affecting not only the relationship but him as well. He is no
          longer master of his own house.
        </p>
      </div>
    </div>
  );
}
