import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

function ratingCalculator({ rating }) {
  const newRating = rating / 20;
  const message = () => {
    if (newRating >= 4.5) {
      return "Excellent";
    } else if (newRating >= 4) {
      return "Good";
    } else if (newRating >= 3) {
      return "Average";
    } else if (newRating >= 2) {
      return "Poor";
    } else {
      return "Terrible";
    }
  };
  return (
    <Stack flexDirection="row">
      <Rating name="read-only" value={newRating} readOnly />
      <Typography variant="body1" marginLeft={1}>
        {message()}
      </Typography>
    </Stack>
  );
}

export default ratingCalculator;
