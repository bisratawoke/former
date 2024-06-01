"use client";

import { HomeMaxOutlined, SettingsInputComponent } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function SideNavBar() {
  const items: Array<{
    name: string;
    icon: React.ReactNode;
  }> = [
    {
      name: "Home",
      icon: <HomeMaxOutlined />,
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
          <ListItemButton>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
