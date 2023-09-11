const COMBINATIONS = [
  { from: "FR", to: "EN" },
  { from: "FR", to: "NL" },
  { from: "EN", to: "FR" },
  { from: "EN", to: "NL" },
  { from: "NL", to: "FR" },
  { from: "NL", to: "EN" },
];

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="10"
      viewBox="0 0 400 10"
      className={className}
    >
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L10,5 L0,10 L3,5 Z" fill="#000" />
        </marker>
      </defs>

      <path d="M200,5 L40,5" stroke="#000" strokeDasharray="5 10 25 5 10" markerEnd="url(#arrow)" />
      <path
        d="M200,5 L360,5"
        stroke="#000"
        strokeDasharray="5 10 25 5 10"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
}

export function CardLanguageCombinations() {
  return (
    <article className="px-10 py-12 border rounded max-w-[500px]">
      <h2 className="font-gabarito text-4xl font-800 mbe-8">
        Translate between 3 language combinations.
      </h2>

      <ul className="grid gap-y-2">
        {COMBINATIONS.map(({ from, to }) => (
          <li
            key={`${from}-${to}`}
            className="grid items-center justify-items-center grid-cols-[min-content_min-content_min-content] "
          >
            <p className="p-2 font-800">{from}</p>
            <Arrow />
            <p className="p-2 font-800">{to}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
