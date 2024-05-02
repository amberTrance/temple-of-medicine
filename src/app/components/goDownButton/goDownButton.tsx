import { FaArrowDown } from "react-icons/fa";

type GoDownButtonProps = {
    id: string;
    title: string;
}

export const GoDownButton = ({id, title}: GoDownButtonProps) => (
  <a href={id}>
    <div className="f-row" style={{ gap: "12px" }}>
      <button aria-label="go down" className="circle-button">
        <FaArrowDown size="20px" />
      </button>

      <h2>{title}</h2>
    </div>
  </a>
);