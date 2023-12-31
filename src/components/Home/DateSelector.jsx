import React from "react";

// Material UI Components
import { TextField, Stack } from "@mui/material";

export default function DateSelector({ entryDate, setEntryDate, exitDate, setExitDate }) {
  const handleEntryDateChange = (event) => {
    setEntryDate(event.target.value);
  };

  const handleExitDateChange = (event) => {
    setExitDate(event.target.value);
  };
  return (
    <Stack spacing={1.5} width="400px">
      <TextField
        id="date"
        label="Entry Date"
        type="date"
        value={entryDate}
        onChange={handleEntryDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="Exit Date"
        type="date"
        value={exitDate}
        onChange={handleExitDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
