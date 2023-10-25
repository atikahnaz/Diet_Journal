import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton({ onClick }) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon onClick={onClick} />
      </Fab>
    </Box>
  );
}
