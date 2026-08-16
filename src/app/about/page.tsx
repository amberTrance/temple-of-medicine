import Image from "next/image";
import { prefix } from "../../../constants";
import styles from "./page.module.css";
import { GoDownButton } from "@/app/components/goDownButton/goDownButton";

export default function About() {
  return (
    <>
      <h1>Hi, I am Angie</h1>
      <p style={{ fontSize: "20px", maxWidth: "400px" }}>
        I have been reading Carl Jung, Marie-Louise von Franz and other Jungian
        authors since 2018, and not only reading but applying everything to my
        personal life. I've interpreted many dreams for myself and my friends
        with great results. Now I am merely putting all this knowledge out here.
      </p>

      <GoDownButton id="#about-me" title="Get to know more about me" />

      <section className={styles.section}>
        <div className={styles.paragraphImageContainer}>
          <div className={styles.textContainer}>
            <h2 id="about-me">Making sense of reality</h2>

            <p>
              If you are reading this, you might be someone that is not
              satisfied with life as society presents it to you. Maybe you have
              a feeling that there's more to life than the basic cycles of
              birth, jobs, marriage, making children and death. I have felt this
              way myself ever since I was a teenager.
            </p>

            <p>
              Back then I merely thought that this couldn't be all there was. My
              mother was interested in paranormal phenomena and because of this
              one day I started reading a book about astral projections. I tried
              the techniques described there with no success. Later, when I was
              around sixteen, I found a group called AGEAC that was a mixture of
              various teachings from gnosticism to Eastern philosophy, and it
              provided various techniques such as opening chakras. I've always
              had an empirical approach to everything and when I had no results
              after two years, I left.
            </p>

            <p>
              Unfortunately, the failed experiments made me a convinced atheist.
              Seven more years had to pass until a friend showed me Jordan
              Peterson, who speaks about Jung's concepts. Well, seven more years
              from that moment I can tell you that while there is still a lot
              that I do not understand, I applied once more the empirical
              approach and this time it DID lead me to wonderful results. I can
              tell you with certainty that there is such a thing as premonitory
              dreams, that dream symbols, once you know how to read them, make a
              whole lot of sense and can tell you better than a therapist what
              you do wrong and right. I can tell you that I have grown more than
              I would have thought possible years ago, left behind neurotic
              symptoms that no psychology degree and cognitive or behavioral
              techniques were able to solve for me. And I have achieved all of
              this entirely through the knowledge provided by Jung.
            </p>

            <p>
              The knowledge that Jung left for us is beautiful and profound, but
              at times difficult to understand and apply. If anything you find
              here inspires you and you need help applying it to your life,
              reach out to me.
            </p>
          </div>

          <div className={styles.image}>
            <Image
              alt="Me painting."
              src={`${prefix}/painting.jpeg`}
              width="264"
              height="600"
              layout="responsive"
              style={{ borderRadius: "5px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
