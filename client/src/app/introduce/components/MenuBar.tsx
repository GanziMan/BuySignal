import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",

      duration: 0.2,
      damping: 24,
    },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
      style={{
        filter: "drop-shadow(1px 1px 1px #f1e0ce)",
        width: 300,
      }}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          WebkitAppearance: "button",
          background: "white",
          color: "black",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: 500,
          cursor: "pointer",
          width: "100%",
          textAlign: "center",
          marginBottom: "10px",

          height: 47,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        목록
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          listStyle: "none",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "center",
        }}
      >
        <motion.li
          style={framerListyle}
          variants={itemVariants}
          onClick={() => router.push("/account/login")}
        >
          로그인
        </motion.li>
        <motion.li
          style={framerListyle}
          variants={itemVariants}
          onClick={() => router.push("/main")}
        >
          상품 보기
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

const framerListyle = {
  height: "50px",
  cursor: "pointer",
  border: "1px solid black",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  fontWeight: 500,
};
