// React
import React from "react";

// Material UI Components
import { Stack, Typography, Link } from "@mui/material";

function HomePageHeader({ customer, setCustomer, setGoogleUser, googleUser }) {
  const customerlabel = `Welcome, ${customer?.firstName} ${customer?.lastName}`;
  const googleUserLabel = `Welcome, ${googleUser?.given_name} ${googleUser?.family_name}`;
  return (
    <Stack
      className="header"
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px",
      }}
    >
      <Stack
        direction="row"
        alignItems="flex-end"
        sx={{
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/240/761/small/initial-letter-b-tech-logo-design-template-element-eps10-vector.jpg"
          style={{
            width: "50px",
            height: "50px",
            marginRight: "8px",
            borderRadius: "50%",
          }}
        />
        <Typography variant="h3">MyDreamHotels</Typography>
        <Typography padding="4px" variant="body1">
          .com
        </Typography>
      </Stack>
      {customer || googleUser ? (
        <Stack>
          <Typography>
            {customer ? customerlabel : null}
            {googleUser ? googleUserLabel : null}
          </Typography>
          <Typography
            onClick={() => {
              setCustomer(null);
              setGoogleUser(null);
              localStorage.removeItem("token");
              localStorage.removeItem("googleUser");
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
  );
}

export default HomePageHeader;
