// React
import React from "react";

// React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Material UI Components
import { Container } from "@mui/material";

// Context
import { AuthContext } from "./services/Authentication";

// Services
import { LoginAuthentication } from "./services/LoginCheck";

// Pages
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import Home from "./pages/Home";
import HotelDetail from "./pages/HotelDetail";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  const { customer, setCustomer } = React.useContext(AuthContext);

  const checkUser = async () => {
    const loggedInCustomer = await LoginAuthentication();
    if (loggedInCustomer) {
      setCustomer(loggedInCustomer);
    } else {
      setCustomer(null);
    }
  };
  React.useEffect(() => {
    if (!customer) {
      checkUser();
    }
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
              <Route path="/hotel/:id" element={<HotelDetail />} />
              <Route path="/search" element={<SearchResultPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/hotel/:id" element={<HotelDetail />} />
              <Route path="/search" element={<SearchResultPage />} />
            </>
          )}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
