import { TRACKS } from "../../data/mockData";

const NODE_X = [70, 270, 470, 670];
const NODE_Y = [150, 60, 150, 60];

// Renders the learner's path as a winding trail with four waypoints —
// Foundations, Core ML, Specialization, Career-Ready — and a marker
// that sits along the trail based on overall progress (0-100).
export default function TrailProgress({ trackOrder, progress = 0 }) {
  const tracks = (trackOrder || Object.keys(TRACKS)).map((id) => TRACKS[id]);
  const segments = tracks.length - 1;
  const progressFraction = Math.min(100, Math.max(0, progress)) / 100;
  const exactPos = progressFraction * segments;
  const segIndex = Math.min(segments - 1, Math.floor(exactPos));
  const segFraction = exactPos - segIndex;

  const markerX = NODE_X[segIndex] + (NODE_X[segIndex + 1] - NODE_X[segIndex]) * segFraction;
  const markerY = NODE_Y[segIndex] + (NODE_Y[segIndex + 1] - NODE_Y[segIndex]) * segFraction;

  const pathD = NODE_X.map((x, i) => {
    if (i === 0) return `M ${x} ${NODE_Y[i]}`;
    const prevX = NODE_X[i - 1];
    const prevY = NODE_Y[i - 1];
    const midX = (prevX + x) / 2;
    return `C ${midX} ${prevY}, ${midX} ${NODE_Y[i]}, ${x} ${NODE_Y[i]}`;
  }).join(" ");

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 740 210" className="w-full min-w-[560px] h-auto" role="img" aria-label="Learning trail progress">
        <path d={pathD} fill="none" stroke="var(--color-border)" strokeWidth="3" />
        <path
          d={pathD}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeDasharray="700"
          strokeDashoffset={700 - 700 * progressFraction}
          style={{ transition: "stroke-dashoffset 700ms ease" }}
        />

        {tracks.map((t, i) => {
          const done = i < exactPos;
          return (
            <g key={t.id}>
              <circle
                cx={NODE_X[i]}
                cy={NODE_Y[i]}
                r="9"
                fill={done ? "var(--color-accent)" : "var(--color-surface-raised)"}
                stroke={done ? "var(--color-accent)" : "var(--color-border)"}
                strokeWidth="2"
              />
              <text
                x={NODE_X[i]}
                y={NODE_Y[i] + (NODE_Y[i] === 60 ? -22 : 34)}
                textAnchor="middle"
                className="fill-text font-display text-[13px] font-medium"
              >
                {t.label}
              </text>
            </g>
          );
        })}

        <circle cx={markerX} cy={markerY} r="6" fill="var(--color-teal)">
          <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
