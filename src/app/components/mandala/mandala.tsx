const outerPetal = "M 50 52 C 38 44 36 18 50 8 C 64 18 62 44 50 52 Z";
const innerPetal = "M 50 52 C 43 46 42 30 50 24 C 58 30 57 46 50 52 Z";

export const Mandala = ({ size = 25 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
      <path
        key={a}
        d={outerPetal}
        transform={`rotate(${a} 50 50)`}
        fill="currentColor"
        fillOpacity={0.07}
      />
    ))}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((a) => (
      <path
        key={a}
        d={innerPetal}
        transform={`rotate(${a} 50 50)`}
        fill="currentColor"
        fillOpacity={0.07}
      />
    ))}
    <circle cx="50" cy="50" r="9" fill="currentColor" fillOpacity={0.12} />
    <circle cx="50" cy="50" r="9" />
  </svg>
);
