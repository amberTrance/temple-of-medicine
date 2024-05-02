"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

import { prefix } from "../../../../constants";

type HeadingProps = {
    alt: string;
    date: string;
    title: string;
    src: string;
}

export const Heading = ({ alt, date, title, src }: HeadingProps) => {
  const router = useRouter();

  // --- RETURN ---

  return (
    <>
      <button
        className="f-row"
        style={{
          gap: "8px",
          background: "none",
          color: "inherit",
          border: "none",
          padding: 0,
          font: "inherit;",
          cursor: "pointer",
          outline: "inherit",
        }}
        onClick={() => router.back()}
      >
        <FaArrowLeft size="18px" />

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>Back to overview</p>
      </button>

      <h1 style={{ margin: "0px" }}>{title}</h1>

      <p style={{ fontWeight: "bold" }}>{date}</p>

      <div style={{ aspectRatio: "4/3", position: "relative", width: "100%", marginBottom: "40px" }}>
        <Image
          layout="fill"
          src={`${prefix}/${src}.jpg`}
          alt={alt}
          objectFit="cover"
          objectPosition="center"
          style={{ margin: "20px 0px", borderRadius: "5px" }}
        />
      </div>
    </>
  );
};
