"use client";

import { motion } from "framer-motion";
import {
  CommonContainer,
  MainContentBox,
  MainContentButton,
  MainContentText,
} from "../styles";
import { Box } from "@mui/material";

export default function Section1({
  scrollToSection,
}: {
  scrollToSection: () => void;
}) {
  const words = ["안녕하세요", "이커머스 플랫폼", "구매각", "입니다."];

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

  return (
    <CommonContainer>
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
                animate="visible"
                variants={sequence}
                style={{
                  marginRight: "8px",
                  color: word === "PisCard" ? "#f1e0ce" : undefined,
                }}
              >
                {word}
              </motion.div>
            ))}
          </Box>
        </MainContentText>

        <motion.div initial="hidden" animate="visible" variants={buttonVariant}>
          <motion.div
            transition={{ type: "spring", stiffness: 200, damping: 5 }}
            onClick={scrollToSection}
          >
            <MainContentButton>다음</MainContentButton>
          </motion.div>
        </motion.div>
      </MainContentBox>
    </CommonContainer>
  );
}
