import { ReactNode } from "react";
import { prefix } from "../../../../constants";

type SymbolLinkProps = {
  symbol: string;
  children: ReactNode;
};

export const SymbolLink = ({ symbol, children }: SymbolLinkProps) => (
  <a
    href={`${prefix}/symbols?word=${symbol}`}
    className="symbol-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
