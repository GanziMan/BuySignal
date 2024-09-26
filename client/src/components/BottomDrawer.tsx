"use client";

import React from "react";

// Components
import { Drawer } from "@mui/material";
import { Global, css } from "@emotion/react";

// Types
interface PropsType {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height: number;
}

const BottomDrawer = ({ open, onClose, children, height }: PropsType) => {
  return (
    <>
      <Global
        styles={css`
          .MuiPaper-root {
            height: ${height}vh !important;
            border-top-left-radius: 32px;
            border-top-right-radius: 32px;
          }
        `}
      />
      <Drawer anchor="bottom" open={open} onClose={onClose}>
        {children}
      </Drawer>
    </>
  );
};

export default BottomDrawer;
