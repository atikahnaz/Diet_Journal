import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddButton from "./AddButton";
import FormInput from "./FormInput";
import DateSelect from "./DateSelect";

export default function AddInput({ AddFunction, date }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // show in console log when date change
  useEffect(() => {
    console.log("test " + date);
  }, [date]);

  return (
    <div>
      <AddButton onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>What did you ate for today</DialogTitle>
        <DialogContent>
          <FormInput />
          <DialogActions>
            <Button
              variant="contained"
              onClick={() => console.log("addButton")}
            >
              Add
            </Button>
          </DialogActions>
        </DialogContent>

        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
