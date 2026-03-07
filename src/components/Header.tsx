import { SquareCheck } from "lucide-react";
import { type RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

interface HeaderProps {
  completeTaskCount: number;
}

export default function Header({ completeTaskCount }: HeaderProps) {
  const heading: RefObject<null> = useRef(null);
  const icon: RefObject<null> = useRef(null);

  useEffect((): void => {
    const split = new SplitText(heading.current, { type: "chars" });
    const tl: gsap.core.Timeline = gsap.timeline();

    tl.from(split.chars, { opacity: 0, y: 10, stagger: 0.05, duration: 0.6 });
    tl.from(".lucide-square-check", {
      opacity: 0,
      y: -50,
      duration: 0.6,
      delay: 1,
      ease: "bounce.out(1.5)",
    });
  }, []);

  return (
    <>
      <h1 ref={heading}>
        Simple{" "}
        <span ref={icon} className="inline">
          <SquareCheck
            aria-hidden="true"
            className="text-purple-600 inline size-7 -translate-y-1"
            strokeWidth={2.5}
          />
        </span>
        <br />
        TODO List
      </h1>

      <p aria-live="polite" className="text-gray-500 text-xs mt-2 uppercase">
        {completeTaskCount} tasks remaining
      </p>
    </>
  );
}
