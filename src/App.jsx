import { useEffect, useState } from "react";
import "./App.css";
import DateSelect from "./components/DateSelect";
import Box from "@mui/material/Box";
import AddInput from "./components/AddInput";
import { TextField } from "@mui/joy";

function App() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [listFood, setListFood] = useState([]);

  const callbackdate = (date) => {
    console.log("date " + date);
    setDate(date);
  };

  const addListFood = (data) => {
    const newItem = {
      id: data.id,
      food: data.food,
    };

    setListFood([...listFood, newItem]);

    console.log(data);
    console.log(date);
  };

  useEffect(() => {
    console.log(listFood);
  }, [listFood]);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <DateSelect callbackdate={callbackdate} />
        <AddInput date={date} saveToApp={addListFood} />
      </Box>
      <Box>
        <h1>hello</h1>
        <ul>
          {listFood.map((item, index) => (
            <li key={index}>{item.food}</li>
          ))}
        </ul>
      </Box>
    </>
  );
}

export default App;
