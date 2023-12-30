import React from "react";
import Rating from "@mui/material/Rating";

function ratingCalculator({ rating }) {
  const newRating = rating / 20;
  return <Rating name="read-only" value={newRating} readOnly />;
}

export default ratingCalculator;
