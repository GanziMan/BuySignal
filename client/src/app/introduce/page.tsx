"use client";

import { useRef } from "react";
import Section1 from "./components/section1";
import Section2 from "./components/section2";

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Section1 scrollToSection={scrollToSection} />
      <div ref={sectionRef}>
        <Section2 />
      </div>
    </>
  );
}
