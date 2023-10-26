import { useState } from "react";
import "./App.css";
import DateSelect from "./components/DateSelect";
import Box from "@mui/material/Box";
import AddInput from "./components/AddInput";

function App() {
  const [text, setText] = useState("");
  const [listFood, setListFood] = useState([]);
  const [date, setDate] = useState("");

  const callbackdate = (date) => {
    console.log("date " + date);
    setDate(date);
  };

  const displayDate = () => {};

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <DateSelect callbackdate={callbackdate} />
        <AddInput date={date} />
      </Box>
    </>
  );
}

export default App;
