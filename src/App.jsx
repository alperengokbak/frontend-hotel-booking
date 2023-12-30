import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import { AuthContext } from "./services/Authentication";
import { LoginAuthentication } from "./services/LoginCheck";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import Home from "./pages/Home";

function App() {
  const { customer, setCustomer } = React.useContext(AuthContext);

  const checkUser = async () => {
    const customer = await LoginAuthentication();
    if (customer) {
      setCustomer(customer);
    } else {
      setCustomer(null);
    }
  };
  React.useEffect(() => {
    checkUser();
  }, [customer]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        overflow: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Router>
        <Routes>
          {customer ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </>
          )}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
