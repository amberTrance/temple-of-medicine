import { ArticleData, HoverStyle } from "@/app/utils/articleData";
import { ArticlePreview } from "@/app/components/articlePreview/articlePreview";

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
          <ArticlePreview
            alt={ArticleData.stairs.alt}
            date={ArticleData.stairs.date}
            hover={ArticleData.stairs.hover}
            href={ArticleData.stairs.href}
            title={ArticleData.stairs.title}
            src={ArticleData.stairs.src}
          />
        </div>
      </>
    );
}