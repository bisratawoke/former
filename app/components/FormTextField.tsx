"use client";

import { TextField } from "@mui/material";
import { useField } from "formik";

export default function FormTextField({ label, ...props }: any) {
  const [field, meta] = useField(props);
  return (
    <TextField
      label
      {...props}
      helperText={meta.touched && meta.error ? meta.error : ""}
      error={meta.touched && meta.error}
    />
  );
}
