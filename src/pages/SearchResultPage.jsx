// React
import React from "react";

// React Router
import { useLocation } from "react-router-dom";

// Material UI Components
import { Stack } from "@mui/material";

// Components
import HotelInfo from "../components/SearchResultPage/HotelInfo";

function SearchResultPage() {
  const location = useLocation();
  const hotel = location.state.hotel;
  console.log(hotel);

  return (
    <Stack>
      <h2>Search Results</h2>
      {hotel.hotelsWithCommentsCount.map((hotel) => (
        <HotelInfo
          key={hotel.id}
          id={hotel.id}
          name={hotel.name}
          city={hotel.city}
          country={hotel.country}
          price={hotel.price}
          rating={hotel.rating}
          image={hotel.image}
          memberPrice={hotel.memberPrice}
          specialPrice={hotel.specialPrice}
          commentsCount={hotel.commentsCount}
          features={hotel.features}
        />
      ))}
    </Stack>
  );
}

export default SearchResultPage;
