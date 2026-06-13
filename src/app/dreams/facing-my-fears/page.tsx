import { Heading } from "@/app/components/heading/heading";
import { Association } from "@/app/components/association/association";
import { SymbolLink } from "@/app/components/symbolLink/symbolLink";
import { Section } from "@/app/components/section/section";
import { DreamsData } from "@/app/utils/articleData";
import { prefix } from "../../../../constants";
import {
  Locale,
  Exposition,
  Peripateia,
  Lysis,
} from "@/app/components/narrative/narrative";
import styles from "./page.module.css";

export default function FacingMyFear() {
  return (
    <div className={styles.container}>
      <Heading
        alt={DreamsData.fear.alt}
        date={DreamsData.fear.date}
        title={DreamsData.fear.title}
        src={DreamsData.fear.src}
        position="center 20%"
      />

      <div className={styles.prose}>
        <h2 className="red">Dream Series</h2>
        <p>
          These dreams occurred one after another over the span of two weeks,
          all reflecting the dreamer's fears about recent events. Moreover, she
          engaged with the dream images, asking questions about them, which led
          to follow-up dreams that provided answers.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Dream 1 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p className={`red ${styles.dreamDate}`}>20.01.2025</p>
          <p>
            <Locale>I was in my hometown</Locale>
            <Exposition>
              {" "}
              when I suddenly saw a big spaceship, like a UFO, in the sky.
              Terrified,
            </Exposition>{" "}
            <Locale>I and other people</Locale>
            <Exposition>
              {" "}
              ran and hid inside a building. Then, when I looked at the UFO
              again, I saw that its window was like a screen displaying the face
              of Kevin from the movie *Home Alone*. I was crouching down with
              other people when
            </Exposition>{" "}
            <Peripateia>
              a child-sized soldier with a gun came at me. I disarmed him easily
              but handed the gun to a man because I didn't know what to do with
              it. The man hesitated as well and then shot some tiny soldiers
              with it.
            </Peripateia>{" "}
            <Lysis>
              I woke up to the voice of my brother criticizing the man for
              hesitating and not immediately protecting the woman.
            </Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="red">First dream</h3>
          <p className={styles.associationsLabel}>Associations</p>
          <ul>
            <Association
              word="UFO"
              association="something alien, foreign, of another world"
              theme="red"
            />
          </ul>

          <Section section="locale">
            <p>
              The location is the dreamer's hometown, she is there with other
              unknown people. The other characters are the children soldiers and
              the brother.
            </p>
          </Section>
          <Section section="exposition">
            <p>
              A UFO causes the dreamer and everyone else to panic and hide. The
              dreamer has recently moved to a new country, alone. The unknown
              threat in the form of the UFO is revealed as Kevin's home alone.
              This dream image makes the dreamer realize that she is scared to
              be here by herself. The threat seems to be very humorously
              presented by the unconscious in the form of a comedy movie and
              children soldiers.
            </p>
          </Section>
          <Section section="peripateia">
            <p>
              Then the dreamer easily disarms the child soldier, showing that
              the fear can be easily defused. However, the dreamer doesn't know
              what to do with the gun and hands it over to an animus figure that
              seems to be similarly hesitating.
            </p>
          </Section>
          <Section section="lysis">
            <p>
              Her brother, who recently traveled alone to another continent,
              represented a more confident, masculine energy to her. However,
              she wasn't sure whether the image of her brother was positive —
              symbolizing the right attitude to overcome fear — or if he
              represented a negative animus repressing valid emotions. This
              uncertainty came also from the fact that the threatening soldiers
              in the dream appeared to be children. At the time, the dreamer was
              also reading a book, and she felt that the author would have
              encouraged befriending the fear instead. Over the following days,
              the dreamer is once again crippled by fears of driving, triggered
              by the challenge of navigating a new country, unfamiliar roads,
              and having little to no driving experience.
            </p>
          </Section>
        </div>

        {/* Dream 2 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p className={`red ${styles.dreamDate}`}>21.01.2025</p>
          <p>
            <Locale>I had a German Shepherd.</Locale>
            <Exposition>He was attacking an animal, maybe a cow.</Exposition>
            <Peripateia>
              Then, something like a god appeared on the horizon — huge,
              covering the whole sky. I think its appearance was that of some
              sort of bovine as well.
            </Peripateia>
            <Lysis>The image filled me with awe.</Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="red">Second dream</h3>
          <p className={styles.associationsLabel}>Associations</p>
          <ul>
            <Association
              word="German Shepherd"
              association="the dreamer was contemplating the idea of getting a German Shepherd that would keep her safe if she went on hikes alone"
              theme="red"
            />
          </ul>

          <Section section="locale">
            <p>
              No location is indicated. The dreamer is not present in the dream,
              the dream is watched as if it were a movie.
            </p>
          </Section>
          <Section section="exposition">
            <p>
              The dreamer would like to go hiking but she is afraid of the
              dangers of doing it alone. A fugitive thought that she could get a
              guardian dog to deal with this problem, produced this dream. Here
              we see the dog devouring a{" "}
              <SymbolLink symbol="cow">cow</SymbolLink>.
            </p>
          </Section>
          <Section section="peripateia">
            <p>
              As a consequence, the bovine god figure appears, covering the
              whole horizon. It's as if the act enraged the god. If we assume
              that the cow stands for the fear instinct that the dreamer wanted
              to overpower with the help of a German Shepherd, here we see the
              unconscious's opinion of that. The moment that the dog consumes
              the cow, a powerful and ominous Cow God appears. The Cow stands
              for a symbol of life, since the cow gives birth and nourishes with
              its milk. So we can extrapolate that this fear instinct is
              synonymous with life. We fear because we want to live.
            </p>
          </Section>
          <Section section="lysis">
            <p>
              The encounter with this archetypal image leaves the dreamer in
              awe.{" "}
            </p>
          </Section>
        </div>

        {/* Dream 3 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p className={`red ${styles.dreamDate}`}>22.01.2025</p>
          <p>
            <Locale>
              I was going up the stairs with my brother. I believe it was the
              staircase of the building where we grew up.{" "}
            </Locale>
            <Exposition>
              My brother was carrying a small water tank with a handle, with no
              cover on the top, so it was like a basket. Inside the tank, there
              was a fish that kept trying to bite my brother. I knew the fish
              would become food, and I was a bit sad because the fish seemed
              intelligent and sentient.
            </Exposition>{" "}
            Then the scene changed, and{" "}
            <Locale>I was swimming underwater with the fish,</Locale>{" "}
            <Exposition>befriending it.</Exposition>{" "}
            <Peripateia>
              But when the fish wanted to come to me, it would use a sort of
              harpoon that it threw at me, piercing my skin and pulling itself
              toward me. I was covered in little wounds from it, but somehow I
              didn't feel the pain and ignored it. I did wonder what would
              happen if it got infected, though.
            </Peripateia>{" "}
            <Lysis>Then my brother saw and was very disapproving.</Lysis>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="red">Third dream</h3>
          <Section section="locale">
            <p>
              The location brings the dreamer back to where she grew up, which
              indicates to us that the problem posed by the unconscious in this
              dream dates from back then, and still needs to be resolved. The
              characters in the dream are the brother, the ego and the fish.
            </p>
          </Section>
          <Section section="exposition">
            <p>
              This dream came as a response to the dreamer's question from the
              previous dream with her brother: "Is my dream brother's attitude
              correct, or is it wrong?". In the previous dream, the
              interpretation was that the animus figure in the shape of the
              brother thought the source of fear needs to be decisively removed.
              The dreamer hesitated, wondering if a compassionate examination of
              one's fear is not more appropriate. In this dream, there is a fish
              that tries to bite the dreamer's brother, but he keeps it
              contained and plans to cook it, which means to integrate this
              instinct. But the dreamer finds this sad and feels pity for the
              fish, mirroring the real life attitude. Then the scene changes,
              and the narrative restarts in the same vein.
            </p>
          </Section>
          <Section section="locale">
            <p>
              Now we have the dreamer swimming underwater with the{" "}
              <SymbolLink symbol="fish">fish</SymbolLink>, which is to say - she
              is going in her unconscious.
            </p>
          </Section>
          <Section section="exposition">
            <p>
              Here she tries to befriend the fish, to understand this instinct
              and relate to it.
            </p>
          </Section>
          <Section section="peripateia">
            <p>
              However, we see that the relationship does not go well. The only
              way that the fish can get close to the dreamer is by harpooning
              her, which causes small wounds. That the dreamer does not feel the
              pain and ignores it suggests to us that there is a repression of
              feeling, an incapacity to perceive the extent of damage caused. In
              real life this can mean that the quality of her fear is too
              primal, too primitive to integrate. For instance, one may try to
              connect the source of this fear to childhood trauma and this way
              to resolve it and integrate it, but doing so may only exacerbate
              the fear further rather than resolve it. The dreamer ignoring the
              small wounds would amount to ignoring the negative mental health
              effects from her focusing on her fear.
            </p>
          </Section>
          <Section section="lysis">
            <p>
              The dreamer has the slight insight that the wounds may become
              infected and the problem would get more severe. The brother once
              more disapproves. The brother, the animus figure, can be
              interpreted here as a feelingless approach to the problem. Not
              everything that comes out of the unconscious can be understood and
              integrated in a delicate manner. Sometimes, a cognitive approach
              where you simply refuse to fall victim to the unconscious drive or
              instinct, is the best option. The dreamer realizing that some of
              her fears are irrational and pushing herself to do the things she
              fears, the way it is done in behavioral therapy, is what is
              required from this situation. This is what it means for the
              brother to keep the fish contained and to cook it with no
              sympathy.
            </p>
          </Section>
        </div>

        {/* Dream 4 */}
        <div className={`${styles.dreamEntry} ${styles.leftCol}`}>
          <p className={`red ${styles.dreamDate}`}>31.01.2025</p>
          <p>
            <Locale>
              I was with a young man at the entrance of a forest, which looked
              like a cave. The vegetation inside was an intensely vibrant green.
            </Locale>
            <Exposition>
              The man took a few steps into the forest when we both saw a wolf.
            </Exposition>
            <Peripateia>It started running toward us, and we fled.</Peripateia>{" "}
            <Exposition>
              At first, I was ahead because I had a head start, but soon, the
              guy was catching up with me. I thought he would overtake me, but
              instead, he took my arm and helped me run faster. In my mind, I
              was preparing how I would defend myself if the wolf caught up with
              us. I had a large flashlight in my hand and thought I would hit
              the wolf over the head with it.
            </Exposition>
            <Lysis>
              Then, we arrived at what seemed to be a community. At the front
              stood a talking bear, who stepped aside to let us in and protect
              us.
            </Lysis>
            <Locale>
              Once I was safe, I asked someone what had happened to the wolf.
            </Locale>
            <Exposition>
              They told me the wolf had been asking around if anyone knew where
              the snake was. "How did you understand the wolf's language?" I
              asked. "The wolf spoke in the snake's language," they replied.
              They then demonstrated it to me, and it sounded like Parseltongue
              from *Harry Potter*. The wolf had taken over the snake's role of
              protecting the water creatures. I then used my flashlight to shine
              it over the wolf and saw it standing at the edge of a lake, near a
              woman with a crib. It was not hurting her but merely watching over
              the water. Then I learned that the most vulnerable of all water
              animals were the birds. There was a group of pigeons, and as I
              looked at them, I knew it was about them. I then walked away into
              a narrow street, contemplating the pure joy of connectedness to
              all that is — the feeling that comes when you try to protect the
              life around you.
            </Exposition>{" "}
            <Peripateia>
              To my left, I saw a butcher holding a pigeon that was dead,
              hanging by its legs. He was pulling its wings off.
            </Peripateia>
          </p>
        </div>
        <div className={styles.rightCol}>
          <h3 className="red">Fourth dream</h3>
          <p className={styles.associationsLabel}>Associations</p>
          <ul>
            <Association
              word="green forest"
              theme="red"
              association="The intensity of the green made me think of life itself, how vibrant and beautiful life can be"
            />
            <Association
              word="wolf"
              theme="red"
              association="I used to dream frequently about dogs and wolves chasing me, before I have learned how to accept and integrate my negative feelings."
            />
            <Association
              word="bear"
              theme="red"
              association="I am afraid of them, since I have heard recently many news of people being killed or attacked by bears."
            />
            <Association
              word="pigeon"
              theme="red"
              association="They are not very bright. They often get run over by cars,
              lose a leg or both, and I've seen them as victims of evil people
               that shoot them with darts or other such awful things. They are very resilient however."
            />
          </ul>
          <p>
            Keeping her fears under control and using a rational approach to her
            driving fear helped the dreamer tremendously. However, she was now
            uncertain how she should approach her fear of going for walks alone
            in nature. She wanted to know what her unconscious thought about
            this when she had this dream.
          </p>

          <Section section="locale">
            <p>
              The cave as well as the forest are symbols of the unconscious, and
              the cave as an underground dwelling reminds us of the belly of the
              mother from which life is born. This way we can parallel it with
              the previous dream of the celestial cow, another mother symbol.
              The intensity of the green in the vegetation further emphasises
              that this is an image of life itself and of love for life. The
              dreamer is at the entrance of this forest-cave with a young man.
            </p>
          </Section>
          <Section section="exposition">
            <p>
              When a <SymbolLink symbol="wolf">wolf</SymbolLink> appears. The
              wolf tries to come to the dreamer and the animus figure but they
              are terrified of it and run away. The dreamer has a flashlight
              that she plans to use as a weapon against the wolf if it reaches
              her. To hit the wolf over the head with the flashlight is a funny
              image, given that the way we normally use a flashlight is to
              illuminate things. Here she wants to use it as a club, to hit and
              render unconscious. <SymbolLink symbol="tool">Tools</SymbolLink>{" "}
              in dreams typically refer to conscious control, so here the
              conscious mind would not be used for illuminating but for
              subduing.
            </p>
          </Section>
          <Section section="peripateia">
            <p>
              The moment when the wolf starts running after them is the peak of
              the dream.
            </p>
          </Section>
          <Section section="lysis">
            <p>
              The lysis is brought about by the appearance of the bear that
              allows the dreamer and the young companion to enter this community
              in which they are safe. The{" "}
              <SymbolLink symbol="bear">bear</SymbolLink> here as the bringer of
              safety is a highly positive figure. From this point on, the dream
              continues into a second narrative.
            </p>
          </Section>
          <Section section="locale">
            <p>
              The young man is no longer in the picture, but we still have the
              ego and the wolf.
            </p>
          </Section>
          <Section section="exposition">
            <p>
              Then the ego asks what happened to the wolf and we get a very
              interesting and insightful answer. We find out that all along the
              only purpose of the wolf was to find out where a certain snake
              was. The reason for that is that the wolf is temporarily replacing
              the <SymbolLink symbol="snake">snake</SymbolLink> in the role of
              protector for the water creatures.
            </p>
            <p>
              If we think about the wolf and the snake, they are both wild
              animals but the wolf is closer to a human brainwise, compared to a
              snake. What would this mean in terms of instincts? We could
              extrapolate that the wolf is closer to something human, such as
              emotion, while the snake is more primal, perhaps a gut instinct.
              The snake is the protector of the water creatures. We know that
              water <SymbolLink symbol="lake">(lake)</SymbolLink>, just as
              forest is a symbol of the collective unconscious. Then we get the
              additional information that it's in particular the{" "}
              <SymbolLink symbol="bird">birds</SymbolLink> (pigeons) that are
              the most vulnerable of the water creatures, and in need of
              protection.
            </p>
            <p>
              The birds, as flying animals, may stand here for a freedom
              instinct, since flying is the most representative metaphor for
              freedom. Thus we understand that the wolf as a replacer for the
              snake means well, and its purpose is merely to protect life, since
              life itself comes out of the unconscious. The dreamer can verify
              this by shining the flashlight on the wolf whereupon she can see
              the wolf watching over the pigeons.
            </p>
            <p>
              The deep seated fear that the dreamer experiences when going for a
              hike, and which she tries to fight off by thinking about solutions
              such as getting a German Shepherd, is a protective instinct that
              is there, when something more primal in her like a gut instinct is
              not available.
            </p>
          </Section>
          <Section section="peripateia">
            <p>
              Then the dream ends in a manner that is meant to shock the
              dreamer. A butcher pulls off the wings of a dead pigeon. This
              image is meant to illustrate the danger that lurks just around the
              corner, and the importance of keeping freedom instincts at bay
              with the fear instinct that keeps us safe from deadly encounters.
            </p>
          </Section>
        </div>
      </div>

      <div className={styles.synthesis}>
        <h2 className="red">Synthesis</h2>
        <p>
          These dreams are a good example of the dialogue that can occur between
          the ego and the unconscious when the ego pays attention to dreams.
          Here, we can see that the unconscious adapts its advice to the problem
          at hand.
        </p>
        <p>
          For the dreamer's fears of being home alone in a new country and
          driving, the unconscious suggests that these fears should be contained
          and tightly regulated. However, the fear of hiking was portrayed as a
          benevolent force aimed at keeping the dreamer safe.
        </p>
        <p>
          Dreams tend to repeat themselves, presenting the same problem in
          different images, until the ego's attitude shifts. But, as seen here,
          actively engaging with dream images can speed up this process and lead
          to profound feelings of connectedness to the Self.
        </p>
      </div>
    </div>
  );
}
