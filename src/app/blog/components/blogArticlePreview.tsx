import Image from "next/image"
import Link from "next/link";
import { prefix } from "../../../../constants";

type BlogArticlePreviewProps = {
    alt: string;
    date: string;
    href: string;
    src: string;
    title: string;
}

export const BlogArticlePreview = ({ alt, date, href, src, title }: BlogArticlePreviewProps) => {
  return (
    <div style={{ width: "30%", minWidth: "250px" }}>
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            width: "100%",
            position: "relative",
            aspectRatio: "3/4",
          }}
        >
          <Image
            layout="fill"
            src={`${prefix}/${src}.jpg`}
            alt={alt}
            objectFit="cover"
            objectPosition="center"
            style={{ borderRadius: "5px" }}
          />
        </div>

        <p style={{ fontSize: "22px" }}>{date}</p>

        <h2>{title}</h2>
      </Link>
    </div>
  );
};