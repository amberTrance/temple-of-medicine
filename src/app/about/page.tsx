import Image from "next/image";

import { FaArrowDown } from "react-icons/fa6";
import { prefix } from "../../../constants";

import styles from "./about.module.css"

export default function About() {
  return (
    <>
      <h1>
        Hi, I am Angie.
        <br />I interpret dreams.
      </h1>
      <p style={{ fontSize: "20px", maxWidth: "400px" }}>
        I can help you understand your unconscious by translating the metaphors
        of your dream images to you.
      </p>
      <a href="#about-me">
        <div className="f-row" style={{ gap: "12px" }}>
          <button aria-label="go down" className="circle-button">
            <FaArrowDown size="20px" />
          </button>

          <h2>Get to know more about me</h2>
        </div>
      </a>

      <section
        style={{
          marginTop: "400px",
        }}
      >
        <div className={styles.paragraphImageContainer}>
          <div className={styles.textContainer}>
            <h2 id="about-me">I like many things</h2>

            <p>
              Growing up, I <span>loved drawing</span> and I attended an arts
              school. Painting was my favorite subject.
            </p>

            <p>
              As a teenager, I grew more interested in
              <span> how this world works</span>. I felt there must be something
              beyond the ordinary every day experience.
            </p>

            <p>
              I begun searching, not knowing what I am looking for exactly. I
              wondered if <span>spirituality</span> had an answer for me so I
              begun looking into christianity, wicca, and many other practices
              and creeds.
            </p>

            <p>
              I then joined a spiritual sect called <span>AGEAC</span>. I was
              part of this group for two years. I was so disappointed with it in
              the end that I became an atheist for many years.
            </p>

            <p>
              After high-school I decided to study <span>Psychology</span>.
            </p>
            <br />
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

        <div>
          <h2>Psychology</h2>

          <p>
            By the end of the last year of my studies, I was{" "}
            <span>
              neurotic, suffered from generalized anxiety and I had no idea what
              I am doing with my life.
            </span>
          </p>

          <p>
            And I wasn't the only one, my friends and colleagues were all
            plagued with various mental disorders.
          </p>

          <p>
            Somehow, all that learning about cognitive and behavioral therapies
            did nothing for me.
          </p>

          <p>
            And then I found <span>Jordan Peterson</span>. I was blown away by
            his ideas about authenticity. However, his advice didn't help me
            either.
          </p>
          <br />

          <h2>Carl Jung</h2>

          <p>
            Then I begun reading <span>Carl Jung</span>, one of Peterson's
            sources of inspiration. Here is where my life begun truly changing.
          </p>

          <p>
            It's been <span>six years</span> since I started reading Jung's
            works and it never stopped being relevant to me, or ceased to help
            me.
          </p>

          <p>
            I can confidently say that now I did find what I was looking for:
            <span> the unconscious</span>.
          </p>

          <p>
            It took me many years and a lot of reading to finally be able to
            interpret dreams well.
          </p>

          <p>
            The works of <span>Marie-Louise von Franz</span> have been of
            tremendous help to me.
          </p>

          <p>
            After interpreting dreams for people close to me and receiving their
            positive feedback, I have made up my mind to put this skill out
            there for others to use.
          </p>
        </div>
      </section>
    </>
  );
}
