"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { prefix } from "../../../../constants";

import styles from "./articlePreview.module.css";
import { HoverStyle } from "@/app/utils/articleData";

type ArticlePreviewProps = {
  alt: string;
  date: string;
  hover: HoverStyle;
  href: string;
  src: string;
  title: string;
};

export const ArticlePreview = ({
  alt,
  date,
  hover,
  href,
  src,
  title,
}: ArticlePreviewProps) => {
  const [hoverClass, setHoverClass] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // --- RENDER ---

  return (
    <div className={styles.wrapper}>
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          className={hoverClass}
          onMouseEnter={() => setHoverClass(hover)}
          onMouseLeave={() => setHoverClass("")}
        >
          <div className={`${styles.imageWrapper}`}>
            <div className="skeleton" style={{ opacity: isImageLoaded ? 0 : 1, pointerEvents: "none" }} />
            <Image
              src={`${prefix}/${src}.jpg`}
              alt={alt}
              fill
              sizes="100vw"
              onLoad={() => setIsImageLoaded(true)}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>

        <p style={{ fontSize: "18px" }}>{date}</p>

        <h2 style={{ fontSize: "1.4rem" }}>{title}</h2>
      </Link>
    </div>
  );
};
