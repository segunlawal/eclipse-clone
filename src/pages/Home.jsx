import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import One from "../sections/One";
import Two from "../sections/Two";
import Three from "../sections/Three";
import Four from "../sections/Four";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const panelRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const panels = self.selector(".panel");
      panels.forEach((panel, i) => {
        gsap.to(panel, {
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            pin: i === panels.length - 1 ? false : true,
            end: "bottom 100",
            pinSpacing: false,
          },
        });
      });
    }, panelRef);
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={panelRef}>
      <div className="description panel bg-[#ff4301]">
        <One />
      </div>

      <section className="panel bg-[#eeeeee]">
        <Two />
      </section>

      <section className=" bg-[#ff4301]">
        <Three />
      </section>

      <section className="bg-[#312e2b]">
        <Four />
      </section>
      <footer className="text-center text-xs">
        Design inspiration from{" "}
        <a
          href="https://www.eclipse.builders/"
          target="__blank"
          className="text-[#ff4301]"
        >
          eclipse.builders{" "}
        </a>
        and{" "}
        <a
          href="https://eat-curious.com/"
          target="__blank"
          className="text-[#042F1A]"
        >
          eat-curious.com
        </a>
      </footer>
    </div>
  );
};

export default Home;
