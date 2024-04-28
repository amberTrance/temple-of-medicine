import { BlogArticlePreview } from "@/app/blog/components/blogArticlePreview";

export default function Blog() { 
    return (
      <>
        <div
          className="f-row"
          style={{ flexWrap: "wrap", justifyContent: "center", gap: "24px", alignItems: "flex-start"}}
        >
          <BlogArticlePreview
            alt="Bird escaping a cage"
            date="22nd of April, 2024"
            href="/blog/born-into-weakness"
            src="bird-escaping"
            title="Born into weakness"
          />

          <BlogArticlePreview
            alt="Artist holding a cup looking smug"
            date="28th of April, 2024"
            href="/blog/the-damage-of-self-importance"
            title="The Damage of Self-Importance"
            src="arrogance"
          />
        </div>
      </>
    );
}