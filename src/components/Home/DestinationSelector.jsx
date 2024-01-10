import React from "react";

// Material UI Components
import { TextField, Stack, InputAdornment } from "@mui/material";

// Context
import { AuthContext } from "../../context/Authentication";

// Material UI Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function DestinationSelector({ destination, setDestination }) {
  const { isDesktop } = React.useContext(AuthContext);
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <Stack width={isDesktop ? "350px" : "250px"}>
      <TextField
        id="destination"
        placeholder="Where are you going?"
        label="City"
        value={destination}
        onChange={handleDestinationChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}
