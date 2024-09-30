"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import { Drawer } from "@mui/material";

export default function SideBar({
  state,
  toggleDrawer,
}: {
  state: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {}, [state]);
  const list = () => (
    <Box
      role="presentation"
      className="w-full max-w-[600px] p-4 relative !h-screen "
    >
      <div className="flex gap-5 items-center justify-center">
        <Image
          src={"/images/bumsu.png"}
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p className="font-bold">김범수님</p>
          <p className="text-xs text-[#7C7C7C]">qjatn50089@gmail.com</p>
        </div>
      </div>
      <List>
        {["주문내역"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["설정", "정보변경"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <button className="w-[157px] h-[37px] flex justify-center items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-[19px] bg-[#F2F3F2] ">
        <p className="font-semibold text-[#53B175]">로그아웃</p>
      </button>
    </Box>
  );

  return (
    <div className="w-full !h-screen">
      <Drawer
        anchor="right"
        open={state}
        sx={{
          width: "100%",
          height: "100vh",
          "& .MuiDrawer-paper": {
            height: "100vh !important",
          },
        }}
        className="w-full !h-screen"
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
