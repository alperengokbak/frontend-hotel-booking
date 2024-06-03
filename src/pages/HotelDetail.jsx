// React and React Router DOM
import React from "react";
import { useParams } from "react-router-dom";

// Components
import HotelMap from "../components/HotelDetail/HotelMap";
import HotelDetailPart from "../components/HotelDetail/HotelDetailPart";

// Context
import { AuthContext } from "../context/Authentication";

// Material UI Components
import { Stack } from "@mui/material";

// Axios
import axios from "axios";

function HotelDetail() {
  const { isDesktop } = React.useContext(AuthContext);
  const { id } = useParams();
  const [hotelDetail, setHotelDetail] = React.useState(null);
  const rating = hotelDetail?.hotel.rating;

  const getHotelDetail = async () => {
    try {
      const response = await axios.get(`https://booking-hotel.azurewebsites.net/hotel/${id}`);
      if (response.status === 200) {
        const jsonData = response.data;
        setHotelDetail(jsonData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  React.useEffect(() => {
    getHotelDetail();
  }, []);

  return (
    <Stack flexDirection={isDesktop ? "row" : "column"} justifyContent="space-between">
      <HotelDetailPart hotelDetail={hotelDetail} rating={rating} />
      <HotelMap hotelDetail={hotelDetail} />
    </Stack>
  );
}

export default HotelDetail;
