import { Drawer, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../dashboard/forms/layout";
import { Formik } from "formik";
import FormTextField from "@/app/components/FormTextField";
import * as yup from "yup";
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
      <Formik
        initialValues={{}}
        validationSchema={yup.object({})}
        onSubmit={async function (values) {
          console.log(values);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Grid container>
            <Grid item md={6}>
              <FormTextField name="" label="" />
            </Grid>
            <Grid item md={6}>
              <FormTextField name="" label="" />
            </Grid>
          </Grid>
        )}
      </Formik>
    </Drawer>
  );
}
