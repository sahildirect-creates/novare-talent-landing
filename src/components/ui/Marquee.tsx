import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({
  children,
  className,
  speed = 30,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "overflow-hidden relative",
        "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-24 before:z-10 before:bg-gradient-to-r before:from-bg-primary before:to-transparent",
        "after:absolute after:right-0 after:top-0 after:bottom-0 after:w-24 after:z-10 after:bg-gradient-to-l after:from-bg-primary after:to-transparent",
        className
      )}
    >
      <div
        className="flex gap-8 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
