import { Box, styled } from "@mui/material";

export const CommonContainer = styled(Box)(() => {
  return {
    width: "100%",
    height: "100vh",
    background: "#f1e0ce",
    display: "flex",
    justifyContent: "center",
  };
});

export const MainContentBox = styled(Box)(() => {
  return {
    display: "flex",
    background: "white",
    flexDirection: "column",
    gap: "100px",
    width: 441,
    height: "100vh",
    padding: "30px 20px",
  };
});

export const MainContentText = styled(Box)(() => {
  return {
    color: "black",
    fontSize: "40px",
    lineHeight: "44px",
  };
});

export const MainContentButton = styled(Box)(() => {
  return {
    borderRadius: "30px",
    border: "2px solid black",
    color: "black",
    width: "100px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
});
