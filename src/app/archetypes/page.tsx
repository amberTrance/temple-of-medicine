"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { archetypesData, Archetype } from "@/app/utils/archetypes";
import styles from "./page.module.css";

export default function Archetypes() {
  const searchParams = useSearchParams();
  const wordFromUrl = searchParams.get("word");
  const initialArchetype =
    archetypesData.find((a) => a.slug === wordFromUrl) ?? archetypesData[0];
  const [selected, setSelected] = useState<Archetype>(initialArchetype);
  const [query, setQuery] = useState("");

  const filtered = archetypesData
    .filter((a) => a.word.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.word.localeCompare(b.word));

  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.wordList}>
          {filtered.length > 0 ? (
            filtered.map((archetype) => (
              <a
                key={archetype.slug}
                href="#archetype-detail"
                className={`${styles.wordButton} ${selected.slug === archetype.slug ? styles.active : ""}`}
                onClick={(e) => {
                  if (window.innerWidth > 600) e.preventDefault();
                  setSelected(archetype);
                }}
              >
                {archetype.word}
              </a>
            ))
          ) : (
            <p className={styles.noResults}>No archetypes found.</p>
          )}
        </div>
      </nav>

      <div>
        <h2 id="archetype-detail" className={styles.detailHeading}>{selected.word}</h2>
        {selected.citations.map((citation, i) => (
          <div key={i} className={styles.citation}>
            <p className={styles.citationText}>"{citation.text}"</p>
            <p className={styles.citationSource}>
              <span className="blue">
                ♦ {citation.author}, {citation.source}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
