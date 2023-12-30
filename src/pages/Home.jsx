import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import axios from "axios";
import { AuthContext } from "../services/Authentication";
import GuestRoomSelector from "../components/GuestRoomSelector";
import DestinationSelector from "../components/DestinationSelector";
import DateSelector from "../components/DateSelector";
import HotelCard from "../components/HotelCard";

function Home() {
  const { setCustomer, customer } = React.useContext(AuthContext);
  const [hotelCard, setHotelCard] = React.useState([]);
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const getHotelsForMainPage = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/hotel/weekend`, {
        params: {
          country: "Turkey",
        },
      });
      if (response.status === 200) {
        const jsonData = response.data;
        setHotelCard(jsonData);
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
      <Stack
        className="header"
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px",
        }}
      >
        <Stack direction="row" alignItems="flex-end">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/006/240/761/small/initial-letter-b-tech-logo-design-template-element-eps10-vector.jpg"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "8px",
              borderRadius: "50%",
            }}
          />
          <Typography variant="h3">Hotels</Typography>
          <Typography padding="4px" variant="body1">
            .com
          </Typography>
        </Stack>
        {customer ? (
          <Stack>
            <Typography>
              Welcome, {customer.firstName} {customer.lastName}
            </Typography>
            <Typography
              onClick={() => {
                setCustomer(null);
                localStorage.removeItem("token");
              }}
              variant="h6"
              sx={{
                cursor: "pointer",
                color: "#FF0000",
                fontWeight: "bold",
                marginRight: 12,
                textDecoration: "none",
                ":hover": {
                  color: "#000",
                },
              }}
            >
              Sign Out
            </Typography>
          </Stack>
        ) : (
          <Link
            href="/login"
            variant="h6"
            sx={{
              cursor: "pointer",
              color: "#FF0000",
              fontWeight: "bold",
              marginRight: 12,
              textDecoration: "none",
              ":hover": {
                color: "#000",
              },
            }}
          >
            Sign In
          </Link>
        )}
      </Stack>
      <Typography variant="h5">Where ?</Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "18px",
        }}
      >
        <DestinationSelector />
        <DateSelector />
        <GuestRoomSelector />
        <Typography
          variant="body1"
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
            console.log("Search");
          }}
        >
          Search
        </Typography>
      </Stack>
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
          <Stack flexDirection="row" justifyContent="space-around" width="100%">
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
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
