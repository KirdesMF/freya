export function StrokedCirclePattern(props: { className?: string }) {
  const width = 1920;
  const height = 1080;
  const numCircles = 10;
  const strokeWidth = 1;

  const centerX = width / 2; // Center X-coordinate remains 0
  const centerY = height / 2;
  const maxWidth = 1920; // Max width of the SVG
  const radiusIncrement = (maxWidth - strokeWidth) / (numCircles - 1);

  const circles = [];
  for (let i = 0; i < numCircles; i++) {
    const currentRadius = strokeWidth / 2 + i * radiusIncrement;
    circles.push(
      <circle
        key={i}
        cx={centerX}
        cy={centerY}
        r={currentRadius}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
        strokeDasharray="5 10 25 5 10"
      />
    );
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={"100%"}
      height={"100%"}
      {...props}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(0, 100%, 50%)" />
          <stop offset="100%" stopColor="hsla(0, 0%, 0%, 0.3)" />
        </linearGradient>
      </defs>
      {circles}
    </svg>
  );
}
