import { useEffect, useState } from "react";
import "./App.css";
import DateSelect from "./components/DateSelect";
import Box from "@mui/material/Box";
import AddInput from "./components/AddInput";
import CardFood from "./components/CardFood";
import Header from "./components/Header";
import Typography from "@mui/material/Typography";
import BarApp from "./components/BarApp";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/joy";

function App() {
  const [date, setDate] = useState("");
  const [selectedDateFood, setSelectedDateFood] = useState({
    id: null,
    food: [],
  });
  const [listFood, setListFood] = useState([
    {
      id: "01/11/2023",
      food: ["rice", "vege"],
    },
    {
      id: "02/11/2023",
      food: ["oren", "sushi"],
    },
  ]);

  // iterate array in listfood based on the id(date)
  const callbackdate = (date) => {
    const selectedObject = listFood.find((item) => item.id === date);
    if (selectedObject) {
      setSelectedDateFood(selectedObject);
    } else {
      setSelectedDateFood({
        id: date,
        food: [],
      });
    }
    console.log("date " + date);
    setDate(date);
  };

  console.log("selectedfood" + JSON.stringify(selectedDateFood));

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
      const updatedList = data.food;
      listFood[indexUpdate].food = updatedList;
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
      <BarApp />
      {/* open dialog input */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ my: 3 }}
      >
        <Header />
        <div>
          <Typography variant="h4">FOOD JOURNAL</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{ my: 3 }}
          >
            <DateSelect callbackdate={callbackdate} />
            <AddInput
              date={date}
              listobjectFood={selectedDateFood}
              callbackAddFood={addListFood}
            />
          </Box>
        </div>
      </Box>
      {/* <Box>
        <h1>JOURNAL</h1>
        <ul>
          {listFood.map((item1) => (
            <>
              <div>{item1.id}</div>
              {item1.food.map((item2, index2) => (
                <li key={index2}>{item2}</li>
              ))}
              <div></div>
            </>
          ))}
        </ul>
      </Box>*/}
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      ></Box>
      <CardFood listFood={listFood} />
    </>
  );
}

export default App;
