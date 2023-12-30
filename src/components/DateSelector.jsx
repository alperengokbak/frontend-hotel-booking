import React from "react";
import { TextField, Stack } from "@mui/material";

function DateSelectorComponent({ onChange, value }) {
  return (
    <TextField
      id="date"
      label="Dates"
      type="date"
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = React.useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Stack width="400px">
      <DateSelectorComponent onChange={handleDateChange} value={selectedDate} />
    </Stack>
  );
}
