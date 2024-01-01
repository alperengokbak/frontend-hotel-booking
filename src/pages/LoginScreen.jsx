// React and react router
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Google Login
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

// Material UI Components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

// Context
import { AuthContext } from "../context/Authentication.jsx";

export default function LoginScreen() {
  const { setCustomer, setGoogleUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);

    // Save user data to localStorage
    localStorage.setItem("googleUser", JSON.stringify(credentialResponseDecoded));

    setGoogleUser(credentialResponseDecoded);
    navigate("/");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    await fetch("http://localhost:3000/customer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Success") {
          setCustomer(data.user);
          localStorage.setItem("token", data.token);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#FF0000" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Stack alignItems="center">
            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
          </Stack>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <Grid container justifyContent="center">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                background: "#FF0000",
              }}
            >
              Sign In
            </Button>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Link href="/register" variant="body2" color={"#FF0000"}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
