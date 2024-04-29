import Image from "next/image";

import { FaArrowDown } from "react-icons/fa6";
import { prefix } from "../../../constants";

import styles from "./about.module.css"
import Link from "next/link";

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
            <h2 id="about-me">From Art</h2>

            <p>
              I was born on a beautiful{" "}
              <span>Sunday in the Spring of 1993</span>. Since I was little I
              enjoyed drawing and my first memory about it is from the age of
              five.
            </p>

            <p>
              I remember laying down on the table this T-shirt with a{" "}
              <span>Tom and Jerry</span> print and drawing after it. When I
              finished, I went to the other room and showed it to mom. She{" "}
              <span>did not believe I drew it myself</span>. She thought I laid
              the paper over an image and merely copied it. I had to show her the T-shirt for her to believe me, but then she was very joyful.
            </p>

            <p>
              In sixth grade I started attending <span>arts school</span>. Here
              in my hometown we had a school with a focus on art, where two days
              of the week were dedicated entirely to painting, drawing or
              sculpting. What a blessing to skip those physics classes.
            </p>

            <h2>To the Meaning of Life</h2>

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
              I then joined a spiritual sect called{" "}
              <span>
                <Link href="https://ageac.org/en/">AGEAC</Link>
              </span>
              . I was part of this group for two years. It was so disappointing
              that in the end I became an atheist for a long time after.
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
          <h2>And Psychology</h2>

          <p>
            By the end of the last year of my studies, I was{" "}
            <span>
              neurotic, suffered from generalized anxiety and I had no idea what
              I am doing with my life.
            </span>
          </p>

          <p>
            I wasn't the only one though, my friends and colleagues were all
            plagued with various mental disorders.
          </p>

          <p>
            Somehow, all that learning about cognitive and behavioral therapies
            did nothing for me.
          </p>

          <p>
            Then I found <span>Jordan Peterson</span>. I was blown away by his
            ideas about authenticity. However, his advice didn't help me either.
          </p>
          <br />

          <h2>To the Unconscious</h2>

          <p>
            This is when I begun reading <span>Carl Jung</span>, one of
            Peterson's sources of inspiration. My life started to truly change
            after.
          </p>

          <p>
            It's been <span>six years</span> since I am reading Jung's
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
            After deciphering dreams for people close to me and receiving their
            positive feedback, I have made up my mind to put this skill out
            there and make a living by doing what matters to me.
          </p>
        </div>
      </section>
    </>
  );
}
