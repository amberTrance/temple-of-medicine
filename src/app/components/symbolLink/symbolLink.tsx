import { ReactNode } from "react";
import { prefix } from "../../../../constants";

type SymbolLinkProps = {
  symbol: string;
  children: ReactNode;
  type?: "symbol" | "archetype";
};

export const SymbolLink = ({ symbol, children, type = "symbol" }: SymbolLinkProps) => (
  <a
    href={`${prefix}/${type === "archetype" ? "archetypes" : "symbols"}?word=${symbol}`}
    className="symbol-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
