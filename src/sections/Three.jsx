import React, { useLayoutEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { BsCloudMoon } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Three = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 350,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 70%",
            scrub: true,
          },
        });
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div>
      <Marquee pauseOnHover pauseOnClick speed={120} autoFill>
        <div className="flex gap-5 font-black text-2xl text-[#042F1A]">
          <p>DAIRY FREE</p>
          <BsCloudMoon />
          <p>MIND BLOWING</p>
          <BsCloudMoon />
          <p>100% PLANT BASED</p>
          <BsCloudMoon />
          <p>SPINE TINGLING</p>
          <BsCloudMoon className="mr-5" />
        </div>
      </Marquee>
      <p className="text-center ">Set building blocks for the future</p>
      <div className="section flex-center column" ref={main}>
        <div className="box bg-green-500">box</div>
        <div className="box bg-green-500">box</div>
        <div className="box bg-green-500">box</div>
        <div className="box bg-green-500">box</div>
        <div className="box bg-green-500">box</div>
      </div>
      <section className="section"></section>
    </div>
  );
};

export default Three;
