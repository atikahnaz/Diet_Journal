# FOOD JOURNAL

#### Video Demo: <URL HERE>

#### Description:

I've created a Food Journal responsive website that allow users to save list of foods and symptoms they have.

Users can select date on calendar, write and update foods and symptoms they wish to save. This will help users to monitor food intakes and record all the side effects that may help people to identify food allergens.

The website is created using React, Vite, and Material UI.

## COMPONENTS

#### App.jsx

- This is the main component that organize and save the main data to local storage.
- All the child components will have access to data from app.jsx.

**Local storage**
Retrieve saved data from local storage each time users open or refresh the page.

```jsx
const localData = JSON.parse(localStorage.getItem("foods")) || [];
```

**useState**
Using useState from react, I set the initial value for date, selectedDateFood based on date and listFood.

- Date
  - initial date is set to empty. Each time users click the calendar, DateSelect.jsx will run with callback function and sent the date to App.jsx. setDate function will save the date based on users input.
- selectedDateFood
  - this is object that have id(date) , food(list of foods) and symptoms(list of symptoms).
  ```jsx
  const [selectedDateFood, setSelectedDateFood] = useState({
    id: null,
    food: [],
    symptoms: [],
  });
  ```
  - each time users clicked the date on calendar, it will run callback function named **callbackdate** that iterate array to find the date match with the calendar. If date exist, **selectedDateFood** is set to match data. If not, new object will be created with id == date and food and symptoms set to empty array.
  ```jsx
  setSelectedDateFood({
    id: date,
    food: [],
    symptoms: [],
  });
  ```

#### AddInput.jsx and FoodDialog.jsx

    Child component that receive data from users. Users can add, delete and edit inputs.

#### DateSelect.jsx

    To save the inputs, users must select date from calendar. The date is sent to app.jsx and the data corespond to the same date will be choose and load into AddInput or FoodDialog components.

#### AddButton.jsx

    Render in AddInput components, when clicked it trigger the popup dialog.

#### CardFood.jsx

    Compenents that visualize all the data that shows date, foods and symptoms. Users are able to edit by clicking the edit button and run FoodDialog component.

#### Header.jsx

    Responsive image and title in the header.

#### BarApp.jsx
