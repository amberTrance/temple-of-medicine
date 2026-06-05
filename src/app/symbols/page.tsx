"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { symbolsData, Symbol } from "@/app/utils/symbols";
import styles from "./page.module.css";

export default function Symbols() {
  const searchParams = useSearchParams();
  const wordFromUrl = searchParams.get("word");
  const initialSymbol =
    symbolsData.find((symbol) => symbol.slug === wordFromUrl) ?? symbolsData[0];
  const [selected, setSelected] = useState<Symbol>(initialSymbol);
  const [query, setQuery] = useState("");

  const filtered = symbolsData
    .filter((s) => s.word.toLowerCase().includes(query.toLowerCase()))
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
            filtered.map((symbol) => (
              <button
                key={symbol.slug}
                className={`${styles.wordButton} ${selected.slug === symbol.slug ? styles.active : ""}`}
                onClick={() => setSelected(symbol)}
              >
                {symbol.word}
              </button>
            ))
          ) : (
            <p className={styles.noResults}>No symbols found.</p>
          )}
        </div>
      </nav>

      <div>
        <h2 className={styles.detailHeading}>{selected.word}</h2>
        {selected.citations.map((citation, i) => (
          <div key={i} className={styles.citation}>
            <p className={`${styles.citationText}`}>"{citation.text}"</p>
            <p className={`${styles.citationSource} `}>
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
