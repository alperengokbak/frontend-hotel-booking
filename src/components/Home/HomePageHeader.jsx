// React
import React from "react";

// Context
import { AuthContext } from "../../context/Authentication";

// Material UI Components
import { Stack, Typography, Link } from "@mui/material";

function HomePageHeader({ customer, setCustomer, setGoogleUser, googleUser }) {
  const customerlabel = `Welcome, ${customer?.firstName} ${customer?.lastName}`;
  const googleUserLabel = `Welcome, ${googleUser?.given_name} ${googleUser?.family_name}`;
  const { isDesktop } = React.useContext(AuthContext);
  return (
    <Stack
      className="header"
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isDesktop ? "18px" : "0px",
        width: isDesktop ? "100%" : "420px",
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
            width: isDesktop ? "50px" : "40px",
            height: isDesktop ? "50px" : "40px",
            marginRight: "8px",
            borderRadius: "50%",
          }}
        />
        <Typography variant={isDesktop ? "h3" : "h5"}>MyDreamHotels</Typography>
        <Typography padding="4px" variant={isDesktop ? "body1" : "body2"}>
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
            variant={isDesktop ? "h6" : "body2"}
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
          variant={isDesktop ? "h6" : "body2"}
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
