import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { blue, blueGrey, deepPurple, red } from "@mui/material/colors";
import { StarPurple500Outlined, StarPurple500Sharp } from "@mui/icons-material";

export default function Dashboard() {
  const [searchSymptom, setSearchSymptom] = useState("");
  const [searchFood, setSearchFood] = useState("");

  console.log(searchSymptom);

  const searchText = (searchSymptom) => {
    console.log(searchSymptom);
    console.log({ searchSymptom });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          alignItems: "center",
          justifyContent: "center",

          "& > :not(style)": {
            m: 1,
            width: "25ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Symptom"
          variant="outlined"
          onChange={(e) => setSearchSymptom(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Food"
          variant="outlined"
          onChange={(e) => setSearchFood(e.target.value)}
        />

        <div
          style={{
            Width: "3rem",
            display: "inline-flex",
            justifyContent: "space-between",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            alignItems: "center",

            border: 1,
          }}
        >
          <p>search</p>
          <SearchIcon onClick={searchText} sx={{}} />
        </div>
      </Box>

      <h3>Table</h3>
    </>
  );
}
