# FOOD JOURNAL

#### Video Demo: [https://youtu.be/ujkXW2i_Ncw]

#### Live Site : [https://atikahnaz.github.io/Diet_Journal/]

#### Description:

I've created a responsive Food Journal website that allows users to save lists of foods and symptoms they experience.

Users can select a date on the calendar, write, and update the foods and symptoms they wish to save. This will help users monitor their food intake and record any side effects, aiding in the identification of food allergens.

The website is built using React, Vite, and Material UI.

## COMPONENTS

### App.jsx

- This is the main component that organizes and saves the main data to local storage.
- All child components have access to data from app.jsx.

#### Local Storage

Retrieve saved data from local storage each time users open or refresh the page.

```jsx
const localData = JSON.parse(localStorage.getItem("foods")) || [];
```

#### useState

Using useState from React, I set the initial values for date, selectedDateFood based on the date, and listFood.

- **Date**

  - The initial date is set to empty. Each time users click the calendar, DateSelect.jsx runs with a callback function and sends the date to App.jsx. The setDate function saves the date based on user input.

- **selectedDateFood**

  - This object has id (date), food (list of foods), and symptoms (list of symptoms).

  ```jsx
  const [selectedDateFood, setSelectedDateFood] = useState({
    id: null,
    food: [],
    symptoms: [],
  });
  ```

  - Each time users click the date on the calendar, the callback function named callbackdate iterates through the array to find the date that matches the calendar. If the date exists, selectedDateFood is set to match the data. If not, a new object is created with id equal to the date, and food and symptoms set to empty arrays.

  ```jsx
  setSelectedDateFood({
    id: date,
    food: [],
    symptoms: [],
  });
  ```

#### Save Inputs

- Each time users click the save button, the callback function named addListFood runs, and data from child components (AddInput.jsx, FoodDialog.jsx) will be saved. This function iterates and finds the matched date.

```jsx
const addListFood = (data) => {
  const checkDate = data.id;
  const indexUpdate = listFood.findIndex((element) => element.id === checkDate);
};
```

- If the date is matched, and data is available, replace the array with the updated array using the spread operator.

```jsx
if (
  indexUpdate !== -1 &&
  (data.food.length !== 0 || data.symptoms.length !== 0)
) {
  const updatedList = data.food;
  const updatedListSymptoms = data.symptoms;
  listFood[indexUpdate].food = updatedList;
  listFood[indexUpdate].symptoms = updatedListSymptoms;
  setListFood([...listFood]);
}
```

- If no date is matched and no input is received (empty), ListFood is set to the original value.

```jsx
else if (
      indexUpdate === -1 &&
      data.food.length === 0 &&
      data.symptoms.length === 0
    ) {
      setListFood([...listFood]);
    }
```

- If no date is matched, and data input is available, insert a new object into the array of listFood.

```jsx
const newItem = {
  id: data.id,
  food: data.food,
  symptoms: data.symptoms,
};
setListFood([...listFood, newItem]);
```

### AddInput.jsx and FoodDialog.jsx

- Child components that receive data from users. Users can add, delete, and edit inputs.
- Get a copy of data from App.jsx and set the listFood to data that contains the date, foods, and symptoms.

```jsx
const [listFood, setListFood] = useState(listobjectFood);
```

- Add, edit, and delete the data and update the listFood. When users click the save button, the callback function saveUpdatedList runs and sends the data to App.jsx.

```jsx
const saveUpdatedList = () => {
  callbackAddFood(listFood);
  handleClose();
};
```

### DateSelect.jsx

- To save the inputs, users must select a date from the calendar. The date is sent to App.jsx, and the data corresponding to the same date will be chosen and loaded into AddInput or FoodDialog components.

### AddButton.jsx

- Rendered in AddInput components, when clicked, it triggers the popup dialog.

### CardFood.jsx

- Components that visualize all the data, showing the date, foods, and symptoms. Users can edit by clicking the edit button and run the FoodDialog component.

### Header.jsx

- Responsive image and title in the header.
