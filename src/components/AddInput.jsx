import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddButton from "./AddButton";
import FormInput from "./FormInput";
import ListFood from "./ListFood";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Input from "@mui/joy/Input";
import ListDivider from "@mui/joy/ListDivider";

export default function AddInput({ date, saveToApp, listobjectFood }) {
  const [open, setOpen] = useState(false);
  const [food, setFood] = useState("");
  const [listFood, setListFood] = useState([]);

  console.log("list food " + JSON.stringify(listobjectFood));
  const handleClickOpen = () => {
    if (date) {
      setOpen(true);
    } else {
      console.log("enter date");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const testadd = () => {
    //assign food to id,food and sent the data to app.jsx to save.
    const objectFood = {
      id: date,
      food: listFood,
    };
    saveToApp(objectFood); //callback function from app.jsx to send data
    handleClose();
  };

  const addListFood = () => {
    const updatedListFood = [...listFood, food];
    setListFood(updatedListFood);
    setFood("");
  };

  // show in console log when date change
  useEffect(() => {
    console.log("test " + date);
  }, [date]);

  return (
    <div>
      <AddButton onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`What did you ate for today ${date}`}</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            label="Food"
            multiline
            fullWidth
            margin="dense"
            value={food}
            onChange={(event) => setFood(event.target.value)}
          ></TextField>
          <DialogActions>
            <Button variant="contained" onClick={addListFood}>
              Add
            </Button>
          </DialogActions>

          {/* view list of food from the array listFood */}
          <DialogContentText>List of food you have eaten</DialogContentText>
          <List>
            {listFood.map((food) => (
              <>
                <ListItem sx={{ pl: 0 }}>
                  <Input
                    fullWidth
                    inset="gutter"
                    value={food}
                    sx={{ pl: 0 }}
                    variant="plain"
                  />
                  <DeleteIcon />
                </ListItem>
                <ListDivider inset={"gutter"} />
              </>
            ))}
          </List>
        </DialogContent>

        {/*when save button click, send the list food data to the App.jsx using callback*/}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={testadd}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
