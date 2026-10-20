import { forwardRef } from "react";
import type { LucideIcon, LucideProps } from "lucide-react";
export const Tooth: LucideIcon = forwardRef<SVGSVGElement, LucideProps>(
  function Tooth(
    { size = 24, color = "currentColor", strokeWidth = 2, ...props },
    ref,
  ) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 5c-2-2-6-3-8-.5s-1 6 .5 9S5 21 7 21s2-7 5-7 3 7 5 7 1-4.5 2.5-7.5 2.5-6.5.5-9S14 3 12 5Z" />
        <path d="M12 5c1 .7 2 1 3 1" />
      </svg>
    );
  },
);
