import { useEffect, useState } from "react";
import "./App.css";
import DateSelect from "./components/DateSelect";
import Box from "@mui/material/Box";
import AddInput from "./components/AddInput";
import CardFood from "./components/CardFood";
import Header from "./components/Header";
import Typography from "@mui/material/Typography";
import BarApp from "./components/BarApp";

function App() {
  // retrieve localdata
  const localData = JSON.parse(localStorage.getItem("foods"));

  const [date, setDate] = useState("");
  const [selectedDateFood, setSelectedDateFood] = useState({
    id: null,
    food: [],
    symptoms: [],
  });
  const [listFood, setListFood] = useState(localData);

  // save the data to localstorage everytime listfood changed
  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(listFood));
  }, [listFood]);

  // view list
  useEffect(() => {
    console.log(listFood);
  }, [listFood]);

  // get date from calendar, iterate array in listfood based on the id(date)
  const callbackdate = (date) => {
    const selectedObject = listFood.find((item) => item.id === date);
    if (selectedObject) {
      setSelectedDateFood(selectedObject);
    } else {
      setSelectedDateFood({
        id: date,
        food: [],
        symptoms: [],
      });
    }
    setDate(date);
  };

  // callback function to save data from fooddialog and add input component
  // save to app component
  const addListFood = (data) => {
    // check if the date/id exist
    const checkDate = data.id;

    // if id exist, find the index
    // if no index found, it will return -1
    const indexUpdate = listFood.findIndex(
      (element) => element.id === checkDate
    );

    if (indexUpdate !== -1 && data.food.length > 0) {
      //the date exist, so update the list based on id
      const updatedList = data.food;
      listFood[indexUpdate].food = updatedList;
      setListFood([...listFood]);
      //date exist but empty list. remove the object
    } else if (indexUpdate !== -1 && data.food.length === 0) {
      const copyListFood = [...listFood];
      copyListFood.splice(indexUpdate, 1);
      setListFood(copyListFood);
      // no date and list empty, keep the original list
    } else if (indexUpdate === -1 && data.food.length === 0) {
      setListFood([...listFood]);
      //new date, insert new list
    } else {
      const newItem = {
        id: data.id,
        food: data.food,
      };
      setListFood([...listFood, newItem]);
    }
  };

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
