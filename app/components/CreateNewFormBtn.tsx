import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../dashboard/forms/layout";
export default function CreateNewFormBtn() {
  const { createFormDrawerOpen, setCreateFormDrawerOpen } = useContext(Context);

  return (
    <Button
      startIcon={<Add />}
      variant="contained"
      onClick={() => setCreateFormDrawerOpen(true)}
    >
      New Form
    </Button>
  );
}
