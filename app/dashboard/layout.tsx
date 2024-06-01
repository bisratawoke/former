import { Grid } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import TopNavBar from "../components/TopNavBar";
import SideNavBar from "../components/SideNavBar";

export default async function ({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <Grid container>
      <TopNavBar />
      <Grid item md={2}>
        <SideNavBar />
      </Grid>
      <Grid item md={10}>
        {children}
      </Grid>
    </Grid>
  );
}
