interface FadeInBackgroundProps {
  direction: "top" | "bottom" | "left" | "right";
  isDark?: boolean;
}

export default function FadeInBackground({
  direction,
  isDark,
}: FadeInBackgroundProps) {
  const gradientDirection = `to ${direction}`;

  const percentages: Record<string, string> = {
    top: "30%",
    bottom: "70%",
    left: "80%",
    right: "80%",
  };

  const percentage = percentages[direction];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      style={{
        background: `linear-gradient(${gradientDirection}, rgba(0,0,0,0) ${percentage}, rgba(0,0,0,1) 100%)`,
        backgroundColor: isDark ? "rgba(0, 0, 0, 0.7)" : "transparent", // Ensure the black background works
      }}
    />
  );
}
