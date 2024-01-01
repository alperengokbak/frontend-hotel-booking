// React
import React from "react";

// Material UI Components
import { Button, Stack } from "@mui/material";

// Axios
import axios from "axios";

// Components
import DestinationSelector from "./DestinationSelector";
import DateSelector from "./DateSelector";
import GuestRoomSelector from "./GuestRoomSelector";

// React Router
import { useNavigate } from "react-router-dom";

function HomePageSearchComponent() {
  const [hotel, setHotel] = React.useState([]);
  const [destination, setDestination] = React.useState("");
  const [entryDate, setEntryDate] = React.useState("");
  const [exitDate, setExitDate] = React.useState("");
  const [selectedGuests, setSelectedGuests] = React.useState(1);
  const [selectedRooms, setSelectedRooms] = React.useState(1);
  const navigate = useNavigate();

  const handleSearchHotel = async () => {
    try {
      const response = await axios.get("https://booking-hotel-api.onrender.com/hotel/search", {
        params: {
          city: destination,
          guestCount: selectedGuests,
          entryDate: entryDate,
          exitDate: exitDate,
        },
      });
      if (response.status === 200) {
        setHotel(response.data);
        navigate("/search", { state: { hotel: response.data } });
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred", error);
    }
  };
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <DestinationSelector destination={destination} setDestination={setDestination} />
      <DateSelector entryDate={entryDate} setEntryDate={setEntryDate} exitDate={exitDate} setExitDate={setExitDate} />
      <GuestRoomSelector
        selectedGuests={selectedGuests}
        setSelectedGuests={setSelectedGuests}
        selectedRooms={selectedRooms}
        setSelectedRooms={setSelectedRooms}
      />
      <Button
        variant="body1"
        type="submit"
        sx={{
          cursor: "pointer",
          color: "#FFF",
          fontWeight: "bold",
          marginRight: "18px",
          backgroundColor: "#FF0000",
          padding: "8px",
          borderRadius: "12px",
          ":hover": {
            color: "#000",
          },
        }}
        onClick={() => {
          handleSearchHotel();
        }}
      >
        Search
      </Button>
    </Stack>
  );
}

export default HomePageSearchComponent;
