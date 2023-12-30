import React from "react";
import { TextField, Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function DestinationSelectorComponent({ onChange, value }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="destination"
      placeholder="Where are you going?"
      label="City"
      value={value}
      onChange={handleInputChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationOnIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default function DestinationSelector() {
  const [destination, setDestination] = React.useState("");

  const handleDestinationChange = (newDestination) => {
    setDestination(newDestination);
  };

  return (
    <Stack width="400px">
      <DestinationSelectorComponent onChange={handleDestinationChange} value={destination} />
    </Stack>
  );
}
