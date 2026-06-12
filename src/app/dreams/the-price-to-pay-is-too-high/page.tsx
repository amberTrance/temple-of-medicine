import { prefix } from "../../../../constants";
import { DreamsData } from "@/app/utils/articleData";
import { Heading } from "@/app/components/heading/heading";
import { Association } from "@/app/components/association/association";
import { SymbolLink } from "@/app/components/symbolLink/symbolLink";
import styles from "./page.module.css";
import {
  Locale,
  Exposition,
  Peripateia,
  Lysis,
} from "@/app/components/narrative/narrative";

export default function ThePriceToPayIsTooHigh() {
  return (
    <div className={styles.container}>
      <Heading
        alt={DreamsData.price.alt}
        date={DreamsData.price.date}
        title={DreamsData.price.title}
        src={DreamsData.price.src}
      />

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
            <Locale>I was in Japan in an elegant store and </Locale>
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
            <Association word="Japan" association="exciting and a different world" theme="yellow" />
            <Association word="cigarettes" association="they make me feel full when I am empty, but they are also unhealthy and cause cancer" theme="yellow" />
          </ul>
          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} blue`}>Locale</p>
            <p>
              The dream setting is in Japan, in a store, and the only other
              dream character outside the ego is the asian man. A{" "}
              <SymbolLink symbol="store">store</SymbolLink>{" "}
              in a dream represents a place where a transaction between the
              conscious mind and the unconscious takes place. The square shape
              of the room, further amplified by the{" "}
              <SymbolLink symbol="four">four</SymbolLink>{" "}
              chairs, point to the symbolism of wholeness, of totality,
              representative of the Self. However, the connection with a villain
              character suggests to us that we are confronted with a dark side
              of the Self. The Self turns negative when the ego attitude is too
              contrary to that of the unconscious. The initial setting of the
              dream points to the current psychic attitude, which here shows an
              attitude that seeks excitement and novelty.
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
            <Locale>
              Me and my girlfriend were going to meet midway on a street,
            </Locale>
            <Exposition>
              for a drink. When we met, she asked me if I had my wallet. I said
              yes.
            </Exposition>{" "}
            <Locale>
              We entered a bar but it turned out to be my grandparent's house.
              The house was dark and the italian man and overall atmosphere
              reminds me of the italian mafia. Inside, I asked the bartender
            </Locale>
            <Exposition>
              {" "}
              for two beers. He said it will be 30€ with an Italian accent. I
              found it weird but didn't really understand at first (my mind was
              lost: did he mean 3 or 30?). I gave him a bill of 1000 czk (green
              like the ones of 2000). He went to the other room to find the
              change, the room in which my grandmother keeps her money. After
              some time, I was so puzzled and realized the price. So I told my
              girlfriend: « I won't pay 30€ for 2 beers ». I climbed the stairs
              of the house, and the guy was closing a box on the wardrobe.
            </Exposition>{" "}
            <Peripateia>
              He was so surprised to see me here that he made a move to jump
              through the window. I screamed to my girlfriend: « Open the door!
              » so that it could be possible to catch him from outside
            </Peripateia>{" "}
            <Lysis>
              but managed to catch him before he jumped. I woke up and my
              interpretation was that he had a gun in the box.
            </Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="yellow">Second dream</h3>
          <p className={styles.associationsLabel}>Dreamer Associations</p>
          <ul className={styles.associations}>
            <Association
              word="grandparents house"
              theme="yellow"
              association={<>very positive associations. When he was a boy, he would meet his grandmother after school and she would buy him{" "}<span className="yellow">pokemon cards</span>. In the present day he would often nostalgically return to those memories.</>}
            />
            <Association word="drinks" association="intimacy, because when you drink you open up and share a lot" theme="yellow" />
          </ul>
          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} blue`}>Locale</p>
            <p>
              In this dream, the characters are the dreamer, his girlfriend and
              the bartender. The theme of the dream, which is having a drink
              with the girlfriend in the bar suggests that the psychic situation
              refers to the dreamer's relationship. The bar turns out to be the
              grandparents house, but rather than being a cheerful place, the
              unconscious depicts it as a dark, dangerous place.
            </p>
          </div>

          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} green`}>Exposition</p>
            <p>
              That the goal of the meeting is intimacy and sharing, reminds us
              of the first dream. Drinking in a bar is what you usually do in
              the first stages of a mature relationship, rather than the later
              ones. The later stages presuppose commitment and building
              something together, rather than mere enjoyment of feelings and
              emotions together. In the first dream the goal was to purchase
              cigarettes and the location of the dream merely alluded to the
              childhood fantasies through the pokemon villain's chair. In this
              dream, as it often happens, there is more than an allusion, and
              the setting itself becomes the grandparents house itself. The
              unconscious's opinion about the dreamer's tendency to remain stuck
              in those times of bliss and simple enjoyment are made very clear
              by the unconscious's painting of the house as dark and dangerous.
              What follows is an exact repetition of the first dream. The
              bartender asks for a very high price, the dreamer does not want to
              pay and the exchange does not happen.
            </p>
          </div>

          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} red`}>Peripateia</p>
            <p>
              {" "}
              The bartender tries to run away with the{" "}
              <SymbolLink symbol="money">money</SymbolLink>
              . How can we interpret this? We can interpret this as a form of
              depression. The dreamer tries to have a relationship that is
              casual, pleasant, lacking any responsibility and idyllic like the
              childhood times. But since this is a form of regression, and since
              the unconscious strives for growth, the punishment is this loss of
              energy.
            </p>
          </div>

          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} purple`}>Lysis</p>
            <p>
              In this particular dream the ego catches the bartender before he
              escapes. The lysis can indicate what we do or what we should do.
              It is up for us to determine which one it is. I would say that
              here we are shown what the dreamer is supposed to do and we later
              see, he does not. To catch the bartender would mean to understand
              and integrate this shadow figure. Our unconscious turns a negative
              face only because we fail to understand its motives.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p className={`yellow ${styles.dreamDate}`}>22.04.2023</p>
          <p>
            <Locale>
              I was with my girlfriend at my place in the bedroom.
            </Locale>{" "}
            <Exposition>We heard a noise.</Exposition>{" "}
            <Locale>A big man</Locale>
            <Exposition>
              {" "}
              has opened the room's door. I asked him who he was and he said
              that he was living here from today. He was saying that my
              girlfriend shouldn't live here, that it was illegal. I told him
              that she didn't live here (because she didn't). He went to the
              other room that had completely changed. There was big furniture
              now in the room (a wardrobe, a table, he even put a clock on the
              wall). I asked him who he was. He said that he was coming from
              North-East Italy, I thought that it must be close to Slovenia.
            </Exposition>{" "}
            <Peripateia>
              It seems that he wanted to live here so I was looking for my
              contract and I was trying to call my landlord in order to make him
              understand that it wasn't possible (and I didn't want to live with
              him).
            </Peripateia>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="yellow">Third dream</h3>
          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} blue`}>Locale</p>
            <p>
              The problem presented here happens in the{" "}
              <SymbolLink symbol="bedroom">bedroom</SymbolLink>
              , with the girlfriend, in their sphere of intimacy and privacy.
            </p>
          </div>

          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} green`}>Exposition</p>
            <p>
              The private sphere gets intruded upon, something comes in between
              the dreamer and his partner. That something is the unconscious
              factor that had to be understood and integrated in the first and
              second dreams, but was not. To catch the bartender before he gets
              out of the window is to interrogate him in order to understand
              what he wants. We know that in dreams, one action comes as a
              consequence of another. First, the unconscious asks for a high
              price to be paid for cigarettes - the dreamer then runs away and
              is being persecuted by secret police. Second, the unconscious asks
              for a high price for drinks - the dreamer does not want to pay -
              the unconscious persecutes the dreamer.
            </p>
          </div>

          <div className={styles.interpretationSection}>
            <p className={`${styles.sectionLabel} red`}>Peripateia</p>
            <p>
              In this dream, we see that this shadow factor takes over the
              psyche of the dreamer against his will. The shadow refurnishes the
              house, which is to say, it's changing the dreamer's thoughts and
              values and perhaps even his perception of time as symbolized by
              the clock. This reflected precisely in the dreamer's own attitude
              towards his relationship with his girlfriend, where he would be
              hot and cold, rejecting his partner and at times even proclaiming
              that they are not together. The dreamer attempts to take back his
              psyche by appealing to a higher power, the landlord, but there is
              no lysis, the dream ends up in a cliffhanger.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.synthesis}>
        <h3 className="yellow">Synthesis</h3>
        <p>
          Here we can see a very good illustration of how the unconscious
          repeats the same message, even years later, when the problem addressed
          remains unsolved.
        </p>
        <p>
          The problem here is that the dreamer wishes to live life in the same
          inconsequential manner in which he did as a child. We can deduce this
          from the type of exchange that occurs between the ego and the
          unconscious, and the location in which it takes place.
        </p>
        <p>
          In the first dream, the location with the pokemon villain's chair
          shows to us that in his psyche, the dreamer still lives in those
          childhood images. The action of asking for cigarettes (something to
          make me feel full when I am empty) happens in that psychic state
          connected to childhood fantasies.
        </p>
        <p>
          The second dream further emphasizes the location and paints it as
          dark. Here we also see how the dreamer's attitude spills into the
          relationship aspect as well. The relationship is brought into the
          grandparent home, where the goal sought by the dreamer is not a mature
          relationship but a fantasy fulfillment.
        </p>
        <p>
          {" "}
          The punishment of the Self for the ego's attempt to remain infantile,
          is loss of libido, states of emptiness and depression, and a loss of
          control over one's own thoughts and behaviours. For example, trying to
          create a romantic relationship that is based strictly on romantic
          exchange such as drinking in a bar and sharing, is synonymous with the
          life of a child that merely enjoys the realm of fantasy in Pokemon
          cards with no consequence to real life. That the dreamer would begin
          to feel repulsed, is no different than how a parent would try to deter
          a child from chewing her nails by putting a bitter substance on the
          fingers. The unconscious attitude is compensatory, trying to stir the
          dreamer towards the life that would lead to the fulfillment of the
          personality and push it out of stagnation. But until the dreamer is
          prepared to leave behind the mother's womb, and to face reality with
          all its responsibilities, consequences and pains, the unconscious will
          continue to apply corrective measures.
        </p>
      </div>
    </div>
  );
}
