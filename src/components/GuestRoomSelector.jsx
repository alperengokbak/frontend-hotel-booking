import React from "react";
import { Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function GuestRoomSelectorComponent({ onChange, selectedGuests, selectedRooms }) {
  const handleGuestsChange = (event) => {
    onChange({
      selectedGuests: event.target.value,
      selectedRooms,
    });
  };

  const handleRoomsChange = (event) => {
    onChange({
      selectedGuests,
      selectedRooms: event.target.value,
    });
  };

  return (
    <Stack flexDirection="row">
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

function GuestRoomSelector() {
  const [selectedOptions, setSelectedOptions] = React.useState({
    selectedGuests: 1,
    selectedRooms: 1,
  });

  const handleOptionsChange = (newOptions) => {
    setSelectedOptions(newOptions);
  };

  return (
    <form>
      <GuestRoomSelectorComponent
        onChange={handleOptionsChange}
        selectedGuests={selectedOptions.selectedGuests}
        selectedRooms={selectedOptions.selectedRooms}
      />
    </form>
  );
}

export default GuestRoomSelector;
