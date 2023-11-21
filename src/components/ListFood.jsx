import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";

export default function ListFood() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <List dense={dense}>
      <ListItem>
        <TextField value={"hi"} sx={{ pl: 0 }}></TextField>
        <DeleteIcon />
      </ListItem>
    </List>
  );
}
