import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { format } from "date-fns";

export default function DateSelected({ callbackdate }) {
  const [date, setDate] = useState(null);
  // when onChange, setDate use callbackdate()
  const dateChange = (event) => {
    setDate(event);
    const formattedDate = format(event, "dd/MM/yyyy");
    callbackdate(formattedDate);
    console.log(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker value={date} onChange={dateChange} />
    </LocalizationProvider>
  );
}
