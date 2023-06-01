import React, { useRef, useLayoutEffect } from "react";
import Scroller from "../sections/Scroller";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import One from "../sections/One";
import Two from "../sections/Two";
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
    }, panelRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={panelRef}>
      <div className="description panel bg-blue-400">
        <One />
      </div>

      <section className="panel bg-[#fff]">
        <Two />
      </section>
      <section className="panel bg-purple-400">THREE</section>
      <section className="panel bg-green-400">FOUR</section>
      <section className="panel bg-red-400">FIVE</section>

      <section className="static bg-orange-400">static content</section>

      <section className="static bg-green-400">static content</section>
    </div>
  );
};

export default Home;
