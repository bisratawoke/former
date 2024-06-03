"use client";

import { AppBar, Box, Toolbar } from "@mui/material";
import FormsSearchInput from "./FormsSearchInput";
import CreateNewFormBtn from "./CreateNewFormBtn";
import CreateNewFormDrawer from "./CreateNewFormDrawer";

export default function FormsToolBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          gap: 2,
        }}
      >
        <Box flexGrow={1}></Box>
        <FormsSearchInput />
        <CreateNewFormBtn />
        <CreateNewFormDrawer />
      </Toolbar>
    </AppBar>
  );
}
