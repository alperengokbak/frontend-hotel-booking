import React from "react";
import { TextField, Stack } from "@mui/material";

function DateSelectorComponent({ onChange, value }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="date"
      label="Select Date"
      type="date"
      value={value}
      onChange={handleInputChange}
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
