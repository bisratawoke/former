"use client";

import { createContext, useState } from "react";
import FormsSearchInput from "@/app/components/FormsSearchInput";
import { Button, Grid, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import FormsToolBar from "@/app/components/FormsToolBar";
export const Context = createContext<any>(null);

export default function layout({ children }: { children: React.ReactNode }) {
  const [createFormDrawerOpen, setCreateFormDrawerOpen] = useState(false);
  return (
    <Context.Provider value={{ createFormDrawerOpen, setCreateFormDrawerOpen }}>
      <Grid
        container
        sx={{
          paddingTop: "10px",
        }}
      >
        <Grid item md={12}>
          <FormsToolBar />
        </Grid>
        <Grid item md={12}>
          {children}
        </Grid>
      </Grid>
    </Context.Provider>
  );
}
