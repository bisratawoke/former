import { Drawer, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../dashboard/forms/layout";
export default function CreateNewFormDrawer() {
  const { createFormDrawerOpen, setCreateFormDrawerOpen } = useContext(Context);
  return (
    <Drawer
      open={createFormDrawerOpen}
      onClose={() => setCreateFormDrawerOpen(false)}
      anchor="right"
      PaperProps={{
        sx: { width: "40%" },
      }}
    >
      <Typography>Create New Form</Typography>
    </Drawer>
  );
}
