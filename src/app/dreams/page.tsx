import { DreamsData, HoverStyle } from "@/app/utils/articleData";
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
            alt={DreamsData.fear.alt}
            date={DreamsData.fear.date}
            hover={DreamsData.fear.hover}
            href={DreamsData.fear.href}
            title={DreamsData.fear.title}
            src={DreamsData.fear.src}
          />

          <ArticlePreview
            alt={DreamsData.price.alt}
            date={DreamsData.price.date}
            hover={DreamsData.price.hover}
            href={DreamsData.price.href}
            title={DreamsData.price.title}
            src={DreamsData.price.src}
          />

          <ArticlePreview
            alt={DreamsData.hiding.alt}
            date={DreamsData.hiding.date}
            hover={DreamsData.hiding.hover}
            href={DreamsData.hiding.href}
            title={DreamsData.hiding.title}
            src={DreamsData.hiding.src}
          />

          <ArticlePreview
            alt={DreamsData.stone.alt}
            date={DreamsData.stone.date}
            hover={DreamsData.stone.hover}
            href={DreamsData.stone.href}
            title={DreamsData.stone.title}
            src={DreamsData.stone.src}
          />

          <ArticlePreview
            alt={DreamsData.stairs.alt}
            date={DreamsData.stairs.date}
            hover={DreamsData.stairs.hover}
            href={DreamsData.stairs.href}
            title={DreamsData.stairs.title}
            src={DreamsData.stairs.src}
          />
        </div>
      </>
    );
}