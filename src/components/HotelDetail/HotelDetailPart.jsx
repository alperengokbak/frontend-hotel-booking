import React from "react";

// Services
import ratingCalculator from "../../services/RatingCalculator";

// Material UI Components
import { Stack, Typography, ListItem, List, ListItemIcon, Grid } from "@mui/material";

// Contexts
import { AuthContext } from "../../services/Authentication";

// Material UI Icons
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PoolIcon from "@mui/icons-material/Pool";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function HotelDetailPart({ hotelDetail, rating }) {
  const { customer } = React.useContext(AuthContext);
  const featureData = [
    { icon: <RestaurantIcon /> },
    { icon: <PoolIcon /> },
    { icon: <LocalBarIcon /> },
    { icon: <WifiIcon /> },
    { icon: <AcUnitIcon /> },
    { icon: <DirectionsCarIcon /> },
  ];
  return (
    <Stack>
      <Typography variant="h3">{hotelDetail?.hotel.name}</Typography>
      <Typography variant="h5" marginBottom={2}>
        {hotelDetail?.hotel.description}
      </Typography>
      {ratingCalculator({ rating })}
      <Typography
        variant="body1"
        marginTop={2}
        marginBottom={2}
        color="#1DA1F2"
        fontWeight="bold"
        sx={{
          cursor: "pointer",
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        Show all {hotelDetail?.hotel.commentsCount} Comments
      </Typography>
      <Typography variant="h6">Popular accommodation facilities and features</Typography>
      <Typography variant="h6">
        {hotelDetail?.hotel.features.length > 0 && (
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={6}>
              <List>
                {hotelDetail?.hotel.features.slice(0, 3).map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>{featureData[index].icon}</ListItemIcon>
                    {feature}
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Right Column */}
            <Grid item xs={6}>
              <List>
                {hotelDetail?.hotel.features.slice(3, 6).map((feature, index) => (
                  <ListItem key={index + 3}>
                    <ListItemIcon>{featureData[index + 3].icon}</ListItemIcon>
                    {feature}
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        )}
      </Typography>
      <Stack flexDirection="row" alignItems="center">
        <Typography variant="h4" color="text.primary">
          {hotelDetail?.hotel.price} TL
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            textDecoration: "line-through",
            marginLeft: "8px",
          }}
        >
          {hotelDetail?.hotel.price * 2} TL
        </Typography>
      </Stack>
      <Stack marginTop={1}>
        <Typography variant="h6" color="text.secondary">
          For one night
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Taxes and fees are included.
        </Typography>
      </Stack>
      {hotelDetail?.hotel.memberPrice && customer ? (
        <Typography
          sx={{
            width: "fit-content",
            fontWeight: "bold",
            color: "#1DA1F2",
            marginTop: "12px",
          }}
          variant="h6"
        >
          Member Price: {hotelDetail?.hotel.price - hotelDetail?.hotel.price * (10 / 100)} TL
        </Typography>
      ) : null}
    </Stack>
  );
}

export default HotelDetailPart;
