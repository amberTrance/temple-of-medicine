import { BlogArticlePreview } from "@/app/blog/components/blogArticlePreview";
import Link from "next/link";

export default function Blog() { 
    return (
      <>
        <div className="f-row" style={{ flexWrap: "wrap", justifyContent: "center", gap: "24px"}}>
          <BlogArticlePreview
            alt="Bird escaping a cage"
            date="22nd of April, 2024"
            href="/blog/born-into-weakness"
            src="bird-escaping"
            title="Born into weakness"
          />

          <BlogArticlePreview
            alt="Bird escaping a cage"
            date="22nd of April, 2024"
            href="/blog/born-into-weakness"
            src="bird-escaping"
            title="Born into weakness"
          />

          <BlogArticlePreview
            alt="Bird escaping a cage"
            date="22nd of April, 2024"
            href="/blog/born-into-weakness"
            src="bird-escaping"
            title="Born into weakness"
          />
        </div>
      </>
    );
}