import { BlogArticlePreview } from "@/app/blog/components/blogArticlePreview";
import { BlogData } from "@/app/blog/utils/blogData";

export default function Blog() { 
    return (
      <>
        <div
          className="f-row"
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          <BlogArticlePreview
            alt={BlogData.stairs.alt}
            date={BlogData.stairs.date}
            hover={BlogData.stairs.hover}
            href={BlogData.stairs.href}
            title={BlogData.stairs.title}
            src={BlogData.stairs.src}
          />
          
          <BlogArticlePreview
            alt={BlogData.arrogance.alt}
            date={BlogData.arrogance.date}
            hover={BlogData.arrogance.hover}
            href={BlogData.arrogance.href}
            title={BlogData.arrogance.title}
            src={BlogData.arrogance.src}
          />

          <BlogArticlePreview
            alt="Bird escaping a cage"
            date="22nd of April, 2024"
            hover="yellow"
            href="/blog/born-into-weakness"
            src="bird-escaping"
            title="Born into Weakness"
          />
        </div>
      </>
    );
}