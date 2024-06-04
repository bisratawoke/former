"use client";

import { createContext, useState } from "react";
import { Grid } from "@mui/material";
import FormsToolBar from "@/app/components/FormsToolBar";
import FetchFormsAction from "@/app/server/FetchFormsAction";
import { useEffect } from "react";
export const Context = createContext<any>(null);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [createFormDrawerOpen, setCreateFormDrawerOpen] = useState(false);

  useEffect(() => {
    FetchFormsAction()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={{ createFormDrawerOpen, setCreateFormDrawerOpen }}>
      <Grid
        container
        sx={{
          paddingTop: "10px",
        }}
        gap={2}
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
