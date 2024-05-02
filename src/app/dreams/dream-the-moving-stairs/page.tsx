import { Heading } from "@/app/components/heading/heading";
import styles from "../page.module.css";
import { DreamsData } from "@/app/utils/articleData";

export default function BornIntoWeakness() {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto"}}>
      <Heading
        alt={DreamsData.stairs.alt}
        date={DreamsData.stairs.date}
        title={DreamsData.stairs.title}
        src={DreamsData.stairs.src}
      />

      <div className={styles.paragraphWrapper}>
        <div>
          <h2 className="red">Context</h2>

          <p>
            The dreamer is a female of 29 that lost her job recently due to
            layoffs in the company.
          </p>
        </div>

        <div>
          <h2 className="red">Dream</h2>

          <p>
            Ana was climbing some stairs that were moving. The steps were
            rotating and shifting and she fell through them. I was watching her
            from above. She was holding tight, but eventually she fell down the
            stairs injuring herself.
          </p>

          <p>
            Then I was talking to her and she told me she and Daniel were
            divorcing. The reason was that she really wanted to buy a house but
            Daniel would avoid the topic every time she brought it up. We then
            went together to see the house she purchased. The previous owner, a
            young woman, welcomed us. Her taste in clothes was as bad as the
            house itself. The house was made of plastic and it had leopard print
            curtains on the windows.
          </p>
        </div>

        <div>
          <h2 className="red">Associations:</h2>

          <p>
            <span className="red">Ana</span> - she is a friend I used to have. She was crippled
            by anxiety and had a lot of negative self thoughts and poor
            self-esteem.
          </p>

          <p>
            <span className="red">stairs</span> - A movement towards greater consciousness. It
            is difficult, tricky, the path moves and shifts, it is unstable and
            dangerous.
          </p>

          <p>
            <span className="red">marriage with Daniel</span> - Daniel was more confident, even
            cocky, which Ana seemed to like in men probably since it was the
            opposite of herself. They loved each other and were together in real
            life for many years.
          </p>

          <p>
            <span className="red">house</span> - a house represents stability, it grounds you
          </p>

          <p>
            <span className="red">kitsch house</span> - an obviously bad choice, made in a
            hurry, but not representative of one's tastes.
          </p>
        </div>

        <div>
          <h2 className="red">Dreamer's previous day thoughts</h2>

          <p>
            I've been laid off from work over two weeks ago. I have enough money
            to support myself for a long while and I started working on a
            personal project. However, I feel pulled back by a sense of low self
            esteem, like I don't believe in myself somehow. Yesterday before
            going to bed I had a slight feeling of anxiety that I am not looking
            right now for a job in my old domain and perhaps if I delay it I
            won't be able to get one if things don't work out.
          </p>
        </div>

        <div>
          <h2 className="red">Interpretation</h2>

          <p>
            The stairs move, shift, they are not static. They represent a
            difficult move towards higher consciousness. Someone with low
            self-esteem is going to fall on such stairs. A fall takes you to a
            lower level, which represents a regression in the conscious
            attitude. This regression brings about a feeling of impatience for
            finding stability, even if this stability goes against the true
            self. It's the dreamer's poor self esteem, a shadow side, that takes
            over, divorcing from a more confident and masculine attitude that is
            capable of enduring uncertainty. The result of anxiety and poor
            self-esteem taking over is a hurried movement into a stability that
            does not represent the dreamer's true self. Thus, the unconscious is
            telling the dreamer that the path ahead of her is twisting and
            turning and not easy, and if she lets her self-doubts take over she
            will regress back to a state where stability is more important than
            one's true self, and consequently make a bad choice.
          </p>

          <p>
            The stairs remind me as well of the stairs in Harry Potter, which
            would behave in a similarly animated way. A step would suddenly
            move, making a student fall, or there would be a hidden hole in
            precisely one place. I enjoy this image very much because it conveys
            the playful and trickster quality of the unconscious. We could even
            think that the unconscious is setting up the dreamer's life
            circumstances in a way that challenges her to overcome her current
            condition.
          </p>
        </div>
      </div>
    </div>
  );
}
