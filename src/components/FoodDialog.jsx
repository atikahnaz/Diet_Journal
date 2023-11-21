import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Input from "@mui/joy/Input";
import ListDivider from "@mui/joy/ListDivider";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

export default function FoodDialog({ date, listobjectFood, callbackAddFood }) {
  const [open, setOpen] = useState(false);
  const [food, setFood] = useState("");
  const [listFood, setListFood] = useState(listobjectFood);

  //listobjectfood should be only an object with multiple food with one id

  // keep listFood in sync with changes to listobjectFood throughout
  // the component's lifecycle
  useEffect(() => {
    setListFood(listobjectFood);
  }, [listobjectFood]);

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

  // when clicksave button, sent data to app.jsx
  const saveUpdatedList = () => {
    callbackAddFood(listFood);
    handleClose();
  };

  // when click add, update the list of food
  const addListFood = () => {
    let updatedListFood;
    if (food.length != 0) {
      listFood.food.length === 0
        ? (updatedListFood = { id: date, food: [food] })
        : (updatedListFood = { ...listFood, food: [...listFood.food, food] });

      setListFood(updatedListFood);
      setFood("");
    }
  };

  useEffect(() => {
    console.log(listFood);
  }, [listFood]);

  // delete selected food, and update the list.
  const deleteFood = (index) => {
    const updatedFood = [...listFood.food];
    updatedFood.splice(index, 1);
    const updatedListFood = { ...listFood, food: updatedFood };
    setListFood(updatedListFood);
  };

  // keep the original list food after cancel button clicked
  const cancel = () => {
    setListFood(listobjectFood);
    setOpen(false);
  };

  // edit saved foods list by clicking the input/textfield
  const editFoods = (event, index) => {
    const updatedFood = [...listFood.food];
    const editedFood = event.target.value;
    updatedFood.splice(index, 1, editedFood);
    const updatedListFood = { ...listFood, food: updatedFood };
    setListFood(updatedListFood);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Fab
          size="small"
          color="secondary"
          aria-label="edit"
          sx={{ mb: 1, mr: 1 }}
        >
          <EditIcon onClick={handleClickOpen} />
        </Fab>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`What did you eat on ${date}`}</DialogTitle>
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
          <DialogContentText>List of foods you have eaten</DialogContentText>
          <List>
            {/* iterate list if the listfood already exist. if no data, show empty list */}
            {Array.isArray(listFood.food) && listFood.food.length > 0
              ? listFood.food.map((food, index) => (
                  <>
                    <ListItem sx={{ pl: 0 }}>
                      <Input
                        fullWidth
                        inset="gutter"
                        value={food}
                        sx={{ pl: 0 }}
                        variant="plain"
                        onChange={(event) => editFoods(event, index)}
                      />

                      <DeleteIcon onClick={() => deleteFood(index)} />
                    </ListItem>
                    <ListDivider inset={"gutter"} />
                  </>
                ))
              : null}
          </List>
        </DialogContent>

        {/*when save button click, send the list food data to the App.jsx using callback*/}
        <DialogActions>
          <Button onClick={cancel}>Cancel</Button>
          <Button variant="contained" onClick={saveUpdatedList}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
