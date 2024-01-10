import React from "react";
import { Stack, Typography } from "@mui/material";

// Axios
import axios from "axios";

// Context
import { AuthContext } from "../context/Authentication";

// Components
import HotelCard from "../components/Home/HotelCard";
import HomePageHeader from "../components/Home/HomePageHeader";
import HomePageSearchComponent from "../components/Home/HomePageSearchComponent";

function Home() {
  const { setCustomer, customer, setGoogleUser, googleUser, isDesktop } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const [hotelCard, setHotelCard] = React.useState([]);
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const getHotelsForMainPage = async () => {
    try {
      const response = await axios.get(`https://booking-hotel-api.onrender.com/hotel/weekend`, {
        params: {
          country: "Turkey",
        },
      });
      if (response.status === 200) {
        const jsonData = response.data;
        setHotelCard(jsonData);
        setLoading(false);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  React.useEffect(() => {
    getHotelsForMainPage();
  }, []);

  return (
    <Stack>
      <HomePageHeader
        customer={customer}
        setCustomer={setCustomer}
        setGoogleUser={setGoogleUser}
        googleUser={googleUser}
      />
      <Typography variant={isDesktop ? "h5" : "h6"} margin={isDesktop ? "0px" : "12px 0 20px 0"}>
        Where to ?
      </Typography>
      <HomePageSearchComponent />
      <Stack
        sx={{
          marginTop: "24px",
          padding: "18px",
        }}
      >
        <Typography variant="h5">Take a vacation this weekend !</Typography>

        <Stack flexDirection="row" marginTop="18px">
          <Typography variant="body1" marginRight={1}>
            Opportunities are shown for the following date range:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Dec 30 - Dec 31
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px",
          }}
        >
          <Stack flexDirection={isDesktop ? "row" : "column"} justifyContent="space-around" width="100%">
            {hotelCard.map((post) => (
              <HotelCard
                key={post.id}
                id={post.id}
                name={post.name}
                address={post.address}
                city={post.city}
                country={post.country}
                price={post.price}
                image={post.image}
                rating={post.rating}
                commentsCount={post.commentsCount}
                memberPrice={post.memberPrice}
                specialPrice={post.specialPrice}
                loading={loading}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
