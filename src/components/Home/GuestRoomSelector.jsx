import React from "react";

// Context
import { AuthContext } from "../../context/Authentication";

// Material UI Components
import { Stack, FormControl, Select, MenuItem } from "@mui/material";

export default function GuestRoomSelector({ setSelectedGuests, setSelectedRooms, selectedGuests, selectedRooms }) {
  const { isDesktop } = React.useContext(AuthContext);
  const handleGuestsChange = (event) => {
    setSelectedGuests(event.target.value);
  };

  const handleRoomsChange = (event) => {
    setSelectedRooms(event.target.value);
  };

  return (
    <Stack flexDirection={isDesktop ? "row" : "column"} spacing={isDesktop ? 0 : 1.5} marginBottom={isDesktop ? 0 : 2}>
      <FormControl
        sx={{
          marginRight: "10px",
          width: "200px",
        }}
      >
        <Select labelId="guests-label" id="guests-select" value={selectedGuests} onChange={handleGuestsChange}>
          <MenuItem value={1}>1 Guest</MenuItem>
          <MenuItem value={2}>2 Guests</MenuItem>
          <MenuItem value={3}>3 Guests</MenuItem>
          <MenuItem value={4}>4 Guests</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{
          width: "200px",
        }}
      >
        <Select labelId="rooms-label" id="rooms-select" value={selectedRooms} onChange={handleRoomsChange}>
          <MenuItem value={1}>1 Room</MenuItem>
          <MenuItem value={2}>2 Rooms</MenuItem>
          <MenuItem value={3}>3 Rooms</MenuItem>
          <MenuItem value={4}>4 Rooms</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
