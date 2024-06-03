"use client";

import {
  FormatAlignCenter,
  HomeMaxOutlined,
  SettingsInputComponent,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function SideNavBar() {
  const router = useRouter();
  const items: Array<{
    name: string;
    icon: React.ReactNode;
    path?: string;
  }> = [
    {
      name: "Home",
      icon: <HomeMaxOutlined />,
    },
    {
      name: "Forms",
      icon: <FormatAlignCenter />,
      path: "/dashboard/forms",
    },
    {
      name: "Setting",
      icon: <SettingsInputComponent />,
    },
  ];
  return (
    <List>
      {items.map((item) => (
        <ListItem>
          <ListItemButton
            onClick={() => router.push(item.path ? item.path : "")}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
