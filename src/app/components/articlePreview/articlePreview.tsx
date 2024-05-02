"use client"
import { useState } from "react";

import Image from "next/image"
import Link from "next/link";
import { prefix } from "../../../../constants";

import styles from "./articlePreview.module.css"
import { HoverStyle } from "@/app/utils/articleData";


type ArticlePreviewProps = {
  alt: string;
  date: string;
  hover: HoverStyle;
  href: string;
  src: string;
  title: string;
};

export const ArticlePreview = ({ alt, date, hover, href, src, title }: ArticlePreviewProps) => {
  const [hoverClass, setHoverClass] = useState("")

  // --- RENDER ---

  return (
    <div style={{ width: "30%", minWidth: "250px" }}>
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          className={hoverClass}
          onMouseEnter={() => setHoverClass(hover)}
          onMouseLeave={() => setHoverClass("")}
        >
          <div className={`${styles.imageWrapper}`}>
            <Image
              layout="fill"
              src={`${prefix}/${src}.jpg`}
              alt={alt}
              objectFit="cover"
              objectPosition="center"
              style={{ borderRadius: "5px"}}
            />
          </div>
        </div>

        <p style={{ fontSize: "22px" }}>{date}</p>

        <h2>{title}</h2>
      </Link>
    </div>
  );
};