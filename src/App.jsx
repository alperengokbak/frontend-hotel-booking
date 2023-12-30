import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import { AuthContext } from "./services/Authentication";
import { LoginAuthentication } from "./services/LoginCheck";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import Home from "./pages/Home";

function App() {
  /* const { user, setUser } = React.useContext(AuthContext);

  const checkUser = async () => {
    const user = await LoginAuthentication();
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  };
  React.useEffect(() => {
    checkUser();
  }, []); */

  /* if (user === undefined) {
    return null;
  } */
  /*  if (user === null) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  } */
  return (
    <Container maxWidth="xl">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
