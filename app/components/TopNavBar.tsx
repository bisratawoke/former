import { AppBar, Box, Toolbar } from "@mui/material";
import Image from "next/image";
import UserIconToolTip from "./UserIconToolTip";
export default function TopNavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
      elevation={0}
    >
      <Toolbar>
        <Box flexGrow={1}>
          <Image src="/next.svg" width={50} height={50} alt="" />
        </Box>
        <UserIconToolTip />
      </Toolbar>
    </AppBar>
  );
}
