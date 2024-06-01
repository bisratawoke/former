"use client";
import { signOut, useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { BiSolidUserAccount, BiUser } from "react-icons/bi";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LogoutOutlined } from "@mui/icons-material";
export default function UserIconToolTip() {
  const { data: session } = useSession();
  const anchorEle = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
        <Avatar sizes="small" ref={anchorEle} onClick={() => setOpen(true)}>
          <BiUser />
        </Avatar>
        <Typography
          sx={{
            fontSize: "12px",
            lineHeight: "14px",
            color: "black",
          }}
        >
          {session?.user?.name}
        </Typography>
      </Stack>
      <Menu
        anchorEl={anchorEle.current}
        open={open}
        onClose={() => setOpen(false)}
        sx={{}}
      >
        <MenuItem
          onClick={() => {
            signOut();
            router.push("/api/auth/signin");
          }}
        >
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText primary="Signout" />
        </MenuItem>
      </Menu>
    </Box>
  );
}
