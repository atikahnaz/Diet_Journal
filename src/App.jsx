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
    {
      id: "03/11/2023",
      food: ["oren", "sushi"],
    },
    {
      id: "04/11/2023",
      food: ["oren", "sushi"],
    },
    {
      id: "05/11/2023",
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
    // check if date exist but food list empty, delete the object

    // check if the date exist
    const checkDate = data.id;

    // if id exist, find the index
    const indexUpdate = listFood.findIndex(
      (element) => element.id === checkDate
    );
    // if no index found, it will return -1
    if (indexUpdate !== -1 && data.food.length > 0) {
      //the date exist, so update the list based on id
      const updatedList = data.food;
      listFood[indexUpdate].food = updatedList;
      console.log("djhuu");
      setListFood([...listFood]);
    } else if (indexUpdate !== -1 && data.food.length === 0) {
      // remove object if list food empty
      const copyListFood = [...listFood];
      copyListFood.splice(indexUpdate, 1);
      console.log("bfhgfgdfbgdf");
      setListFood(copyListFood);
    } else if (indexUpdate == -1 && data.food.length === 0) {
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
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{}}
      >
        <Header />
        <div>
          <Typography variant="h4" sx={{}}>
            FOOD JOURNAL
          </Typography>
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

      <CardFood listFood={listFood} addListFood={addListFood} />
    </>
  );
}

export default App;
