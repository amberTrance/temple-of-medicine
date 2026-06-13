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

export default function TheMovingStairs() {
  return (
    <div className={styles.container}>
      <Heading
        alt={DreamsData.stairs.alt}
        date={DreamsData.stairs.date}
        title={DreamsData.stairs.title}
        src={DreamsData.stairs.src}
      />

      <div className={styles.prose}>
        <h2 className="red">Context</h2>
        <p>
          The dreamer is a female of 29 that lost her job recently due to
          layoffs in the company.
        </p>
      </div>

      <div className={styles.prose}>
        <h2 className="red">Previous day thoughts</h2>
        <p>
          I've been laid off from work over two weeks ago. I have enough money
          to support myself for a long while and I started working on a personal
          project. However, I feel pulled back by a sense of low self esteem,
          like I don't believe in myself somehow. Yesterday before going to bed
          I had a slight feeling of anxiety that I am not looking right now for
          a job in my old domain and perhaps if I delay it I won't be able to
          get one if things don't work out.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p>
            <Locale>Ana</Locale>
            <Exposition>
              {" "}
              was climbing some stairs that were moving. The steps were rotating
              and shifting
            </Exposition>
            <Peripateia> and she fell through them.</Peripateia>{" "}
            <Locale>I was watching her from above.</Locale>{" "}
            <Lysis>
              She was holding tight, but eventually she fell down the stairs
              injuring herself.
            </Lysis>
          </p>
          <p>
            <Locale>Then I was talking to her</Locale>
            <Exposition>
              {" "}
              and she told me she and Daniel were divorcing. The reason was that
              she really wanted to buy a house but Daniel would avoid the topic
              every time she brought it up. We then went together to see the
              house she purchased. The previous owner, a young woman, welcomed
              us. Her taste in clothes was as bad as the house itself.
            </Exposition>{" "}
            <Lysis>
              The house was made of plastic and it had leopard print curtains on
              the windows.
            </Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="red">Dream</h3>
          <p className={styles.associationsLabel}>Associations</p>
          <ul>
            <Association
              word="Ana"
              association="she is a friend I used to have. She was crippled by anxiety and had a lot of negative self thoughts and poor self-esteem."
              theme="red"
            />
            <Association
              word="marriage with Daniel"
              association="Daniel was more confident, even cocky, which Ana seemed to like in men probably since it was the opposite of herself. They loved each other and were together in real life for many years."
              theme="red"
            />
            <Association
              word="house"
              association="a house represents stability, it grounds you."
              theme="red"
            />
            <Association
              word="kitsch house"
              association="an obviously bad choice, made in a hurry, but not representative of one's tastes."
              theme="red"
            />
          </ul>

          <p>
            This dream is structured as two dreams, where the lysis in the first
            dream generates the second dream as consequence.
          </p>

          <Section section="locale">
            <p>
              The locale here contains the dreamer watching from a distance,
              without any involvement, her friend Ana. This suggests to us that
              the dreamer experiences what is happening without feeling like she
              takes part in it, we could say that she experiences it as if she
              were a victim of circumstances.
            </p>
          </Section>

          <Section section="exposition">
            <p>
              A shadow figure in the dreamer, representing her unintegrated
              feeling side that is crippled by anxiety and negative
              self-thoughts, is shown climbing{" "}
              <SymbolLink symbol="stairs">stairs</SymbolLink> that move, rotate
              and shift. To climb stairs is synonymous to going higher on a
              consciousness level. And to lift Ana out of the unconscious would
              mean to process those negative feelings, digest them and integrate
              them. This would result in a successful climb.
            </p>
          </Section>

          <Section section="peripateia">
            <p>
              However, the climb is difficult. This indicates to us that the ego
              is not yet prepared to face this challenge. Ana falls down,
              injuring herself. An injury could represent an intense emotional
              hurt.
            </p>
          </Section>

          <Section section="exposition">
            <p>
              The result of this fall is shown in the second dream as Ana's
              decision to divorce herself from Daniel. A fall takes you to a
              lower level, which represents a regression in the conscious
              attitude. This regression brings about a feeling of impatience for
              finding stability (house), even if this stability goes against the
              true self. It's the dreamer's poor self esteem, a shadow side,
              that takes over, divorcing from a more confident and masculine
              attitude that is capable of enduring uncertainty.
            </p>
          </Section>

          <Section section="lysis">
            <p>
              The result is the purchasing of a plastic house with leopard print
              curtains. Which is to say, that the dreamer pursues a path that
              brings her stability but feels fake and unrepresentative of one's
              true self, all due to her being unable to integrate her shadow
              side.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
