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

          <ArticlePreview
            alt={ArticleData.arrogance.alt}
            date={ArticleData.arrogance.date}
            hover={ArticleData.arrogance.hover}
            href={ArticleData.arrogance.href}
            title={ArticleData.arrogance.title}
            src={ArticleData.arrogance.src}
          />

          <ArticlePreview
            alt={ArticleData.bird.alt}
            date={ArticleData.bird.date}
            hover={ArticleData.bird.hover}
            href={ArticleData.bird.href}
            title={ArticleData.bird.title}
            src={ArticleData.bird.src}
          />
        </div>
      </>
    );
}