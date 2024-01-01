import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authentication";

export default function RegisterScreen() {
  const { setCustomer } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    city: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      city: data.get("city"),
      country: data.get("country"),
    });

    fetch("https://booking-hotel-api.onrender.com/customer/register", {
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setValues({ ...values, firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="lastName"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoFocus
                onChange={(e) => setValues({ ...values, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setValues({ ...values, password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={values.country}
                  label="country"
                  onChange={(e) => setValues({ ...values, country: e.target.value })}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Turkey"}>Turkey</MenuItem>
                  <MenuItem value={"Germany"}>Germany</MenuItem>
                  <MenuItem value={"America"}>America</MenuItem>
                </Select>
                <FormHelperText>Enter your country of residence</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={values.city}
                  label="city"
                  onChange={(e) => setValues({ ...values, city: e.target.value })}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Bodrum"}>Bodrum</MenuItem>
                  <MenuItem value={"Mugla"}>Mugla</MenuItem>
                  <MenuItem value={"Antalya"}>Antalya</MenuItem>
                </Select>
                <FormHelperText>Enter your city of residence</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2, background: "#FF0000" }}>
              Sign Up
            </Button>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Link href="/login" variant="body2" sx={{ color: "#FF0000" }}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
