// React
import React from "react";

// Material UI Components
import { Stack, Typography, Link } from "@mui/material";

// React Router
import { useNavigate } from "react-router-dom";

// Services
import ratingCalculator from "../../services/RatingCalculator";

// Context
import { AuthContext } from "../../context/Authentication";

function HotelInfo({
  id,
  name,
  city,
  country,
  price,
  rating,
  image,
  commentsCount,
  memberPrice,
  specialPrice,
  features,
}) {
  const navigate = useNavigate();
  const { isDesktop } = React.useContext(AuthContext);

  return (
    <Stack
      flexDirection={isDesktop ? "row" : "column"}
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
        marginBottom: "18px",
      }}
    >
      <img
        src={image}
        alt="Hotel"
        style={{
          width: isDesktop ? "490px" : "340px",
          maxHeight: "270px",
          backgroundColor: "#E0E0E0",
          objectFit: "contain",
          borderRadius: "10px",
          borderTopRightRadius: isDesktop ? "0px" : "10px",
          borderBottomRightRadius: isDesktop ? "0px" : "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/hotel/${id}`);
        }}
      />
      <Stack padding={2} width={isDesktop ? "100%" : "300px"}>
        <Typography
          variant="h5"
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`/hotel/${id}`);
          }}
        >
          {name}
        </Typography>
        <Typography variant="body1">
          {city}/{country}
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {features[0]}
          {features[1] ? `, ${features[1]}` : ""}
        </Typography>

        <Stack flexDirection="row" justifyContent="space-between">
          <Stack
            sx={{
              marginTop: "12px",
              width: "fit-content",
              justifyContent: "flex-end",
              height: "142px",
            }}
            spacing={3}
          >
            {ratingCalculator({ rating })}
            <Typography variant="body2" color="text.secondary">
              {commentsCount} comments
            </Typography>
            <Link
              href={`/hotel/${id}`}
              underline="none"
              sx={{
                color: "#673ab7",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              See details
            </Link>
          </Stack>

          <Stack alignItems="flex-end" justifyContent="flex-end" spacing={0.5}>
            {specialPrice && (
              <Typography
                variant="body2"
                color="#FFF"
                sx={{
                  display: "flex",
                  width: "fit-content",
                  letterSpacing: "1px",
                  padding: "6px",
                  borderRadius: "8px",
                  backgroundColor: "#FF0000",
                }}
              >
                42% discount
              </Typography>
            )}
            {memberPrice && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#FFF",
                  backgroundColor: "#673ab7",
                  display: "flex",
                  width: "fit-content",
                  letterSpacing: "1px",
                  padding: "6px",
                  borderRadius: "8px",
                }}
              >
                Member price
              </Typography>
            )}
            <Typography variant="body1" fontWeight="bold">
              {memberPrice ? price - price * (10 / 100) : price} TL
            </Typography>
            <Typography variant="body2" color="text.secondary">
              For one night
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Taxes and fees are included.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HotelInfo;
