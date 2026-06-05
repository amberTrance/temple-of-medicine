import Image from "next/image";

import { FaArrowDown } from "react-icons/fa6";
import { prefix } from "../../../constants";

import styles from "./page.module.css";
import Link from "next/link";
import { GoDownButton } from "@/app/components/goDownButton/goDownButton";

export default function About() {
  return (
    <>
      <h1>Hi, I am Angie</h1>
      <p style={{ fontSize: "20px", maxWidth: "400px" }}>
        I have been reading Carl Jung, Marie-Louise von Franz and other Jungian
        authors for over 7 years, and not only reading but applying everything
        in my personal life. I've interpreted many dreams for myself and friends
        with great results. Now I am merely putting all this knowledge out here.
      </p>

      <GoDownButton id="#about-me" title="Get to know more about me" />

      <section className={styles.section}>
        <div className={styles.paragraphImageContainer}>
          <div className={styles.textContainer}>
            <h2 id="about-me">Making sense of reality</h2>

            <p>
              If you are reading this, you are most likely someone that is not
              satisfied with life as society presents it to you. Maybe you have
              a feeling that there's more to life than the basic cycles of
              birth, jobs, marriage, kids and death. Well, this of course
              applies to me as well. I've been feeling restless since a long
              time ago, since I am 12, to be more precise.
            </p>

            <p>
              Back then I merely had the thought that this cannot be all that
              there is. My mother was interested in paranormal phenomena and
              because of that one day I started reading a book about astral
              projections. I have tried the techniques described in there with
              no success. Later, around 16, I have found a group called AGEAC
              that was a mixture of various teachings from gnosticism to Eastern
              philosophies, and it provided various techniques such as opening
              your chakras. I've always had an empirical approach to everything,
              and when I got no results in 2 years, I've left.
            </p>

            <p>
              Unfortunately, the failed experiments made me into a convicted
              atheist (and I dreamed of Virgin Mary telling me that I am
              departing from my path, which I interpreted as a mere brain
              activity). 7 more years had to pass until a friend showed me
              Jordan Peterson, who spoke about Jung. Well, 7 more years from
              that moment I can tell you that while there is still a lot that I
              do not understand, I applied once more the empirical approach and
              this time it DID lead me to good results. I can tell you with
              certainty that there is such a thing as premonitory dreams, that
              dream symbols, once you know how to read them, make a whole lot of
              sense and can tell you better than a therapist what you do wrong
              and right. I can tell you that I have grown more than I could have
              ever dreamed of, left behind neurotic symptoms that no Psychology
              degree and cognitive or behavioral techniques could fix. And I
              have achieved all of this entirely through the knowledge provided
              by Jung.
            </p>

            <p>
              And to make a long story short, after I got friends and family
              "wow" at me after interpreting their dreams, I thought I could
              give it a try in the wilderness. So enjoy this website where I
              will try my best to provide dream examples, symbols analysis and
              other interesting and hopefully inspiring topics.
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
