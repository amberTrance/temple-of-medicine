import { Heading } from "@/app/components/heading/heading";
import styles from "../page.module.css";
import { DreamsData } from "@/app/utils/articleData";

export default function BornIntoWeakness() {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <Heading
        alt={DreamsData.stone.alt}
        date={DreamsData.stone.date}
        title={DreamsData.stone.title}
        src={DreamsData.stone.src}
      />

      <div className={styles.paragraphWrapper}>
        <div>
          <h2 className="red">Dreams</h2>

          <p>
            A blond girl, full of life, jumpy and joyful, a bit hippie/boho was
            kissing me passionately, loving me, stalking me a bit. She was
            pregnant with me and wanted to keep the baby because it felt true
            with her. We were on a cathedral and the baby fell down - it was a
            marble. The marble was rolling down a long slope and I was running
            after it. Then there was my girlfriend, and she was mean to me,
            discontent that I was with another girl.
          </p>

          <p>
            I was with a woman, my girlfriend or wife, for holidays. I was
            making her stupidly fat, like an inflated balloon. Then she was
            pregnant and she gave birth to twins which were stored in 3 usb
            sticks.
          </p>
        </div>

        <div>
          <h2 className="red">Context</h2>

          <p>
            The dreamer is a male of 29 that was at the moment of the dream in a
            relationship of more than a year with a woman. The relationship was
            filled with fights. He would frequently be uncertain if a serious
            relationship is what he needs and would fantasize about multiple,
            various life possibilities, such as being a sailor or a bartender.
            The dreamer would also feel frequently depressed and empty.
          </p>
        </div>

        <div>
          <h2 className="red">Interpretation</h2>

          <p>
            These two dreams represent the same problem presented in different
            ways. It is particularly helpful to focus on the outcome of both
            dreams. In the first dream, the <span className="red">stone</span>{" "}
            rolls away, the dreamer loses it and the girlfriend is angry. In the
            second dream, the born babies are usb sticks.
          </p>

          <p>
            We know about the dreamer that he has relationship problems and he
            tends to fall into wishful fantasies. In the first dream he is
            enchanted by this lovely <span className="red">anima</span> figure.
            The anima represents the man's impulse and libido towards life.
            However, if this impulse is not properly expressed in real life it
            can take destructive forms. In mythology, we have the{" "}
            <span>sirens</span> luring the sailors towards their own death. In
            real life this can be represented in many ways, such as a porn
            addiction, basically anything that takes the man into a world of
            fruitless fantasy.
          </p>

          <p>
            Here, the enchanting anima figure is{" "}
            <span className="red">pregnant</span> and the baby is a stone.{" "}
            <span className="red">Round objects</span> in dreams are a reference
            to the figure of the <span className="red">Self</span>. When we
            dream about round shapes, whether it is a mandala, a ball or a hat,
            it points towards the deepest aspect of ourselves - that which
            represents our totality and wholeness. If the dream would have ended
            with the birth, it would have been a positive dream. However, the
            fact that the stone rolls away and the dreamer loses it, gives the
            dream a negative meaning. The fact that the dreamer meets his real
            life girlfriend at the end, and she is angry about the other woman,
            also clues us into the fact that here the anima, or the dreamer's
            fantasy projection has a negative form which leads to the loss of
            the Self and conflicts with the partner.
          </p>

          <p>
            The second dream comes to complement the first one and present the
            issue even more explicitly. Both women are pregnant, and in this
            second dream the born children are usb sticks. The dreamer's
            association to usb sticks was virtual reality. So this union with
            the anima gives birth to something unreal, or to the loss of one's
            own self. Furthermore, blowing up the wife is a form of inflation.
            The dreamers' fantasies of various possibilities in life are
            inflated, as in, they are overly romanticized and unrealistic.
          </p>
        </div>
      </div>
    </div>
  );
}
