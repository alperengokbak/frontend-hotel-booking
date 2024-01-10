import React from "react";

// Context
import { AuthContext } from "../../context/Authentication";

// Material UI Components
import { TextField, Stack } from "@mui/material";

export default function DateSelector({ entryDate, setEntryDate, exitDate, setExitDate }) {
  const { isDesktop } = React.useContext(AuthContext);
  const handleEntryDateChange = (event) => {
    setEntryDate(event.target.value);
  };

  const handleExitDateChange = (event) => {
    setExitDate(event.target.value);
  };
  return (
    <Stack
      spacing={1.5}
      width={isDesktop ? "350px" : "250px"}
      marginBottom={isDesktop ? 0 : 3}
      marginTop={isDesktop ? 0 : 3}
    >
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
