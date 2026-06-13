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
import { Section } from "@/app/components/section/section";
import { SymbolLink } from "@/app/components/symbolLink/symbolLink";

export default function HidingFromMom() {
  return (
    <div className={styles.container}>
      <Heading
        alt={DreamsData.hiding.alt}
        date={DreamsData.hiding.date}
        title={DreamsData.hiding.title}
        src={DreamsData.hiding.src}
      />

      <div className={styles.prose}>
        <h2 className="blue">Dream Series</h2>
        <p>
          The dreamer is a male of 30. He is temporarily living at his parents
          and he is about to meet his girlfriend with whom he wants to rent a
          home.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Dream 1 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p>
            <Locale>I was at my parent's place</Locale>
            <Exposition>
              and I had to go to Madrid probably to the airport, and from there
              to Amsterdam (I was living there). My parents left for holidays
              and I still haven't decided how to get there. I was very stressed
              about it because there were so many ways to get there. So I was
              just waiting. Then I was with a group of people, friends of my
              friends, they were playing poker and{" "}
            </Exposition>
            <Peripateia>
              I was asking for help from them. They were trying to help me by
              giving me solutions.
            </Peripateia>
            <Lysis>
              {" "}
              Then my luggage was ready but I didn't have the pants I wanted so
              I had to go back to my parent's place to pick them up.
            </Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="blue">First dream</h3>
          <p className={styles.associationsLabel}>Associations</p>
          <ul>
            <Association
              word="parents place"
              association="clean, a place i don't want to be in, i still feel at home tho. I don't have the same emotional connection to this house as other people. It's not really my house."
              theme="blue"
            />
            <Association
              word="Madrid"
              association="University, my flat in Madrid. Emotionally it's positive, I had my little rhythm, was going to the library, intellectual, artistic - close to me."
              theme="blue"
            />
            <Association
              word="Amsterdam"
              association="When I moved there, it was in the idea to get a job and be mature. Then I was with my girlfriend there too."
              theme="blue"
            />
            <Association
              word="poker players"
              association="they are able to exert emotional control when needed and to deal with difficult situations"
              theme="blue"
            />
            <Association
              word="luggage"
              association="travelling, something annoying, I would like to travel with a backpack."
              theme="blue"
            />
            <Association
              word="pants"
              association="something you wear, something that fits you. They need to fit well, more important than with shirts, to feel good, comfortable."
              theme="blue"
            />
          </ul>

          <Section section="locale">
            <p>
              The locale of the dream represents the current state of the
              dreamer. He is in a place he doesn't want to be in, where he feels
              emotionally disconnected. Moreover, dreaming about the house we
              grew up in can indicate that the problem that the dream is
              addressing is carried over from back then and unresolved. Once we
              outgrow our past, we dream less and less about the place in which
              we grew up.
            </p>
          </Section>
          <Section section="exposition">
            <p>
              Then he needs to go to Amsterdam, which the dreamer associated to
              growing up, maturity and adulthood. Furthermore he associated the
              relationship with his partner which also presses him into
              stabilizing himself and acting more mature.
            </p>
            <p>
              The dream then indicates that to get to Amsterdam he must first go
              through Madrid. In this way the unconscious is showing him that
              maturity is achieved not in spite of being one's own creative
              self, but through it. After discussing this with the dreamer, it
              was clear that he associates adulthood and responsibility to
              something dull and boring, so the unconscious is showing that he
              should be integrating his creative self into the adulthood
              journey.
            </p>
          </Section>
          <Section section="peripateia">
            <p>
              Next, the dreamer is in a state of confusion as to the ways in
              which he should get to Amsterdam. He doesn't know how to become
              mature. The unconscious provides the answer in the image of the
              poker players: you need to control your emotions. This is
              meaningful because in his personal life the dreamer would
              sometimes get emotionally overwhelmed.
            </p>
          </Section>
          <Section section="lysis">
            <p>
              The lysis does not bring the resolution of the problem, which
              would be the arrival of the dreamer to Amsterdam or at the very
              least the initiation of the trip. Instead, there is a regression
              back to the initial state. After his luggage is finished, he
              realizes his pants are missing and he goes back to the parental
              house to fetch them. This would translate into a tendency to go
              back to the comfort zone and fail to undertake the journey towards
              maturity.
            </p>
          </Section>
        </div>

        {/* Dream 2 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p>
            <Locale>I was with Cristina at my parent's place</Locale>
            <Exposition>
              {" "}
              and then I heard the garage door, so I thought about hiding her
              but I actually presented her as a friend. Then my mother came as
              well. We were in my room with Cristina and I was rubbing against
              her. It was all very sensual but there were people outside
              (family) doing things.
            </Exposition>
            <Peripateia>
              So when we got out of the room, my mother said "be careful with
              the angles" meaning on what angle I'm doing stuff because people
              outside could see me.
            </Peripateia>
            <Lysis>She wasn't happy that I brought a girl home.</Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="blue">Second dream</h3>
          <p className={styles.associationsLabel}>Associations</p>
          <ul>
            <Association
              word="Cristina"
              association="someone I played a sexual role with, which makes it rather fake."
              theme="blue"
            />
          </ul>

          <Section section="locale">
            <p>
              The dream starts once more in the parental home, in the company of
              a woman with whom the relationship consisted of playing sexual
              roles and nothing else besides. To play a sexual role is to enact
              a fantasy for the sake of pleasure. But if the connection lacks
              emotional and spiritual depth, it can leave one feeling even more
              empty, which is what happened with the dreamer. If we think about
              this woman as the dreamer's anima, we can extrapolate that the
              relationship to the anima - the creative and life giving factor in
              man - lacks spiritual depth. That the dreamer is seeking to
              satisfy his fantasies, in the manner typical of a puer aeternus,
              which can never truly fulfill one.
            </p>
          </Section>

          <Section section="exposition">
            <p>
              Then we have the problem of hiding the girl. In the actual life,
              the dreamer has never presented any of his girlfriends to his
              parents, and a similar scenario where they catch him with a
              girlfriend which he presents as a friend, did happen.
            </p>
          </Section>

          <Section section="peripateia">
            <p>
              The mother cautions the dreamer to be careful with the angles, so
              that others do not see. It's as if what the dreamer does is
              shameful and has to be hidden.
            </p>
          </Section>

          <Section section="lysis">
            <p>
              The mother is unhappy that the dreamer brought the girl home. The
              interesting part is that the dreamer's mother would not behave
              this way. This is our indication that here we are dealing with a
              mother complex that was born in the dreamer, and which is
              unrelated to the real mother.
            </p>
            <p>
              The dream mother is jealous of the girl. She wants to keep the son
              all for herself. The mother in a man's dream is yet another aspect
              of the anima, the first form that the anima takes in the life of a
              boy. Then Jung describes different stages of anima development in
              the man's life. The first aspect is Eve, representing fertility
              and sexuality, the most primitive aspect of the feminine. Next she
              gets differentiated into Helen (intellectual), Mary (spiritual)
              and finally Sophia which integrates all the aspects.
            </p>
            <p>
              That the mother aspect of the anima keeps the dreamer in a state
              of childhood fantasy, could prevent him from developing his anima
              to a more refined state, and explain why the girl in the dream is
              someone with whom he had a shallow relationship that revolved
              around sexuality. In real life, anima development would mean that
              the dreamer's libido and life impulse is healthy and appropriate
              for his age.
            </p>
          </Section>
        </div>
      </div>

      <div className={styles.synthesis}>
        <h2 className="blue">Synthesis</h2>
        <p>
          We concluded together that both his dreams refer to hesitations
          towards going fully into life and maturing, and that the pants and the
          mother are synonyms referring to a mother complex. Our interpretation
          was confirmed the next day, when he dreamed that he has a fight with
          his mother that is so bad, one of those fights that lead to a
          permanent split. In mythical imagery this would be the same as slaying
          the dragon. It's important to note though that even if the dreamer
          sees himself doing the right thing, this does not mean yet that the
          deed is done. He needs to focus on the problem and tackle it actively,
          otherwise it's likely that the same dream imagery will get repeated,
          until the problem is finally solved.
        </p>
      </div>
    </div>
  );
}
