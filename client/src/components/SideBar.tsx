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
  onClose,
}: {
  state: boolean;
  onClose: () => void;
}) {
  const list = () => (
    <Box className="w-full max-w-[600px] p-4 relative" role="presentation">
      <div className="flex gap-5 items-centers">
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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <button
        className="w-full h-67px flex
       justify-center absolute bottom-0"
      >
        <div>
          <p className="font-semibold text-lg text-[#53B175]">로그아웃</p>
        </div>
      </button>
    </Box>
  );

  return (
    <div className="w-full">
      <Drawer
        anchor="right"
        open={state}
        sx={{
          width: "100%",
        }}
        className="w-full"
        onClose={onClose}
      >
        {list()}
      </Drawer>
    </div>
  );
}
