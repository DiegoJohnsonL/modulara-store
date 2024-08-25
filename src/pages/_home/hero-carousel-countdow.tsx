import { useState, useEffect } from "react";

interface CountdownProps {
  duration: number;
  transitionDuration: number;
  size?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  isAnimating: boolean;
}

export default function FullCircleStrokeAnimationCountdown({
  duration,
  transitionDuration,
  size = 60,
  backgroundColor = "#FFF",
  foregroundColor = "#e2e8f0",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(duration + transitionDuration);
  const radius = size / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0.01) {
          return duration + transitionDuration; // Reset the timer
        }
        return prevTime - 0.1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [duration, transitionDuration]);

  const totalDuration = duration + transitionDuration;
  const strokeDashoffset = (timeLeft / totalDuration) * circumference;

  return (
    <div className="relative rounded-full overflow-hidden" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={radius} cy={radius} r={radius} fill={backgroundColor} opacity={100} />
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="none"
          stroke={foregroundColor}
          strokeWidth={radius * 2}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-xl font-bold"
        style={{ color: "black" }}
        aria-live="polite"
        aria-atomic="true"
      >
        {((timeLeft / totalDuration) * duration).toFixed(0)}
      </div>
    </div>
  );
}
