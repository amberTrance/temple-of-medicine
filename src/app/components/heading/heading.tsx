"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

type HeadingProps = {
    alt: string;
    date: string;
    heading: string;
    src: string;
}

export const Heading = ({ alt, date, heading, src }: HeadingProps) => {
  const router = useRouter();

  // --- RETURN ---

  return (
    <>
      <button
        className="f-row"
        style={{ 
          gap: "8px",background: "none",
          color: "inherit",
          border: "none",
          padding: 0,
          font: "inherit;",
          cursor: "pointer",
          outline: "inherit"
        }}
        onClick={() => router.back()}
      >
        <FaArrowLeft size="18px" />

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>Back to overview</p>
      </button>

      <h1 style={{ margin: "0px" }}>{heading}</h1>

      <p style={{ fontWeight: "bold" }}>{date}</p>

      <Image
        src={`/${src}.jpg`}
        alt={alt}
        width="780"
        height="500"
        layout="responsive"
        style={{ margin: "20px 0px", borderRadius: "5px" }}
      />
    </>
  )
};
