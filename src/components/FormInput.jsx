import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function FormInput() {
  return (
    <TextField
      variant="outlined"
      label="Food"
      multiline
      fullWidth
      margin="dense"
    ></TextField>
  );
}
