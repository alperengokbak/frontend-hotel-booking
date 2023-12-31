import { Stack } from "@mui/material";
import React from "react";

function HotelMap({ hotelDetail }) {
  return <Stack>{hotelDetail?.hotel.address}</Stack>;
}

export default HotelMap;
