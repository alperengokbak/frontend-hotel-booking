import React from "react";
import { Stack, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ratingCalculator from "../services/RatingCalculator";

function HotelCard({ name, address, price, image, rating, commentsCount, memberPrice }) {
  return (
    <Card sx={{ maxWidth: 380, boxShadow: "none" }}>
      <CardMedia sx={{ height: 200, borderRadius: 2 }} image={image} title="Hotel" />
      <CardActions
        sx={{
          marginTop: "12px",
          marginLeft: "4px",
        }}
      >
        {ratingCalculator({ rating })}
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ({commentsCount} Comment)
        </Typography>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Stack flexDirection="row" alignItems="center">
          <Typography variant="h5" color="text.primary">
            {price * 2} TL
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              textDecoration: "line-through",
              marginLeft: "8px",
            }}
          >
            {price * 3} TL
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          For 2 nights
        </Typography>
        <Typography variant="body2" color="text.secondary">
          For the night {price} TL
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Taxes and fees are included.
        </Typography>

        {memberPrice && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              backgroundColor: "#673ab7",
              letterSpacing: "1px",
              alignItems: "center",
              display: "flex",
              padding: "4px",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "#FFF",
              marginTop: "12px",
            }}
          >
            <LocalOfferIcon
              sx={{
                marginRight: "8px",
              }}
            />
            Member price available
          </Typography>
        )}
      </CardContent>
      {memberPrice && (
        <Typography
          sx={{
            maxWidth: "200px",
            marginLeft: "17%",
            marginBottom: "18px",
            marginTop: "12px",
            letterSpacing: "1px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "8px",
            borderRadius: "16px",
            border: "1px solid #000",
            fontWeight: "bold",
            color: "#1DA1F2",
            cursor: "pointer",
          }}
          variant="body2"
        >
          Login for member price
        </Typography>
      )}
    </Card>
  );
}

export default HotelCard;
