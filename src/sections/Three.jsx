import React, { useLayoutEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { BiCrown } from "react-icons/bi";
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
          //   x: 500,
          position: "relative",
          left: "46%",
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
    <div className="text-black py-10">
      <Marquee pauseOnHover pauseOnClick speed={120} autoFill>
        <div className="flex gap-5 font-black text-2xl ">
          <p>DING LIREN</p>
          <BiCrown className="my-auto" />
          <p>MAGNUS CARLSEN</p>
          <BiCrown className="my-auto" />
          <p>VISWANATHAN ANAND</p>
          <BiCrown className="my-auto" />
          <p>VLADIMIR KRAMNIK</p>
          <BiCrown className="my-auto" />
          <p>GARRY KASPAROV</p>
          <BiCrown className="mr-5 my-auto" />
        </div>
      </Marquee>
      <p className="text-center py-5 sm:text-3xl text-xl font-bold">
        PRINCIPLES AND BUILDING BLOCKS
      </p>
      <div className=" text-[#eeeeee]" ref={main}>
        <div className="box bg-[#312e2b]">OPENING</div>
        <div className="box bg-[#312e2b]">DEVELOPMENT</div>
        <div className="box bg-[#312e2b]">POSITIONAL PLAY</div>
        <div className="box bg-[#312e2b]">MIDDLE GAME</div>
        <div className="box bg-[#312e2b]">TACTICS</div>
        <div className="box bg-[#312e2b]">END GAME</div>
      </div>
      <section className="section"></section>
    </div>
  );
};

export default Three;
