import Image from "next/image"

import Link from "next/link";

export default function BornIntoWeakness() {
  return (
    <>
      <h1>Born into Weakness</h1>

      <Image
        src="/bird-escaping.jpg"
        alt="Bird escaping a cage"
        width="780"
        height="500"
        layout="responsive"
      />

      <p>
        It is a tough exercise of imagination to escape their invisible chains.
        Without realizing it, you move in circles just the way they dictate. And
        how could you do anything else? You were born into weakness, between 4
        concrete walls, away from the earth and the animals that your ancestors
        came into contact every day as their source of life. They put you into a
        box, took all your power and slowly introduced more and more ways of
        control. You were a child when 5 hours of your day were forcefully taken
        without you or your parents having any choice about it, soon those hours
        turned 8, to get you used to what will come.
      </p>
    </>
  );
}
