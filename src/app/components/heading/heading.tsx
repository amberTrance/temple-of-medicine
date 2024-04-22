import Image from "next/image";

type HeadingProps = {
    alt: string;
    date: string;
    heading: string;
    src: string;
}

export const Heading = ({ alt, date, heading, src }: HeadingProps) => (
  <>
    <h1 style={{ margin: "0px"}}>{heading}</h1>

    <p style={{fontWeight: "bold"}}>{date}</p>

    <Image
      src={`/${src}.jpg`}
      alt={alt}
      width="780"
      height="500"
      layout="responsive"
      style={{margin: "20px 0px", borderRadius: "5px"}}
    />
  </>
);
