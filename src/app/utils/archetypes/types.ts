export type Citation = {
  text: string;
  author: string;
  source: string;
};

export type Archetype = {
  slug: string;
  word: string;
  citations: Citation[];
};
