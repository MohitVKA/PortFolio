interface PageNumberProps {
  number: string;
  position?: "left" | "right";
}

export default function PageNumber({ number, position = "left" }: PageNumberProps) {
  return (
    <div 
      className={`absolute bottom-6 font-mono text-xs text-fg-muted ${position === "left" ? "left-6 md:left-12" : "right-6 md:right-12"}`}
    >
      {number}
    </div>
  );
}
