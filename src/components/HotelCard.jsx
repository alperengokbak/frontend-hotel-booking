import React from "react";
import { Card, CardMedia, CardContent, Typography, Rating, CardActions } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function HotelCard({ name, address, price, image, rating, commentsCount, memberPrice }) {
  const newRating = rating / 20;
  return (
    <Card sx={{ maxWidth: 380, boxShadow: "none" }}>
      <CardMedia sx={{ height: 200, borderRadius: 2 }} image={image} title="Hotel" />
      <CardActions
        sx={{
          marginTop: "12px",
        }}
      >
        <Rating name="read-only" value={newRating} readOnly />
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          (Comment {commentsCount})
        </Typography>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography variant="h5" color="text.primary">
          {price * 2} TL
        </Typography>
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
            padding: "4px",
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
