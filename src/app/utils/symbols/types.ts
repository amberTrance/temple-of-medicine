export type Citation = {
  text: string;
  author: string;
  source: string;
};

export type Symbol = {
  slug: string;
  word: string;
  citations: Citation[];
};
