import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { blue, blueGrey, deepPurple } from "@mui/material/colors";
import { StarPurple500Outlined, StarPurple500Sharp } from "@mui/icons-material";

export default function Dashboard() {
  const [searchSymptom, setSearchSymptom] = useState("");
  console.log(searchSymptom);

  const searchText = (searchSymptom) => {
    console.log(searchSymptom);
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Symptom"
        variant="outlined"
        onChange={(e) => setSearchSymptom(e.target.value)}
      />
      <TextField id="filled-basic" label="Food" variant="filled" />
      <SearchIcon sx={{ border: 1 }} style={{}} onClick={searchText} />
    </Box>
  );
}
