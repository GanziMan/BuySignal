"use client";

import React, { useEffect, useRef, useState } from "react";
import { color, motion, Variants } from "framer-motion";
import { CommonContainer, MainContentBox, MainContentText } from "../styles";
import { Box } from "@mui/material";
import MenuBar from "./MenuBar";

// menubar framer

const Section2: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const words = [
    "저희는 고객님들의",
    "니즈를 고려하여",
    "좋은 상품을",
    "제공드리고 있습니다.",
  ];

  const sequence = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: words.length * 0.5,
      },
    },
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <CommonContainer ref={sectionRef}>
      <MainContentBox>
        <MainContentText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {words.map((word, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={sequence}
                style={{
                  marginRight: "8px",
                }}
              >
                {word}
              </motion.div>
            ))}
          </Box>
        </MainContentText>
        <motion.div
          // variants={buttonVariant}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MenuBar />
        </motion.div>
      </MainContentBox>
    </CommonContainer>
  );
};

export default Section2;
