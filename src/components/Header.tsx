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
    const tl: gsap.core.Timeline = gsap.timeline();
    const split = new SplitText(heading.current, { type: "chars" });
    // gsap.set(".lucide-square-check", { rotation: -40 });

    tl.from(split.chars, { opacity: 0, y: 20, stagger: 0.05, duration: 0.6 });
    tl.from(".lucide-square-check", {
      opacity: 0,
      y: -100,
      duration: 0.6,
      ease: "bounce.out(1.5)",
    });

    // tl.to(".lucide-square-check", {
    //   rotation: 320,
    //   duration: 2,
    //   repeat: -1,
    //   yoyo: true,
    //   delay: 1,
    //   repeatDelay: 2,
    //   ease: "power1.inOut",
    // });
  }, []);

  return (
    <>
      <h1 ref={heading}>
        Simple{" "}
        <span ref={icon} className="inline">
          <SquareCheck
            className="text-purple-600 inline size-7 -translate-y-0.5"
            strokeWidth={2.5}
          />
        </span>
        <br />
        TODO List
      </h1>
      <p className="text-gray-500 text-xs mt-2 uppercase">
        {completeTaskCount} tasks remaining
      </p>
    </>
  );
}
