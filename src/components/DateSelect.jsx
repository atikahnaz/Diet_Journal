import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateSelected({ callbackdate }) {
  const [date, setDate] = useState(null);
  // when onChange, setDate use callbackdate()
  const dateChange = (event) => {
    setDate(event);
    callbackdate(event);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker value={date} onChange={dateChange} />
    </LocalizationProvider>
  );
}
