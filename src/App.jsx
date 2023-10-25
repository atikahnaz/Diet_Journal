import { useState } from "react";
import "./App.css";
import DateSelect from "./components/DateSelect";
import Box from "@mui/material/Box";
import AddInput from "./components/AddInput";

function App() {
  const [text, setText] = useState("");
  const [listFood, setListFood] = useState([]);

  const AddFunction = () => {};

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <DateSelect />
        <AddInput />
      </Box>
    </>
  );
}

export default App;
