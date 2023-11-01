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
    // check if the date exist
    const checkDate = data.id;

    // if id exist, find the index
    const indexUpdate = listFood.findIndex(
      (element) => element.id === checkDate
    );
    // if not index found, it will return -1
    if (indexUpdate !== -1) {
      //the date exist, so update the list based on id
      listFood[indexUpdate].food.push(data.food);
      setListFood([...listFood]);
    } else {
      const newItem = {
        id: data.id,
        food: data.food,
      };
      setListFood([...listFood, newItem]);
    }

    console.log(data);
    console.log(date);
  };

  useEffect(() => {
    console.log("main food " + JSON.stringify(listFood));
  }, [listFood]);
  useEffect(() => {
    console.log("date set" + date);
  }, [date]);

  return (
    <>
      {/* open dialog input */}
      <Box display="flex" alignItems="center" justifyContent="center">
        <DateSelect callbackdate={callbackdate} />
        <AddInput
          date={date}
          saveToApp={addListFood}
          listobjectFood={listFood}
        />
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
