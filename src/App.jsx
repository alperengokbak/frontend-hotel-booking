// React
import React from "react";

// React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Material UI Components
import { Container } from "@mui/material";

// Context
import { AuthContext } from "./context/Authentication";

// Services
import { LoginAuthentication } from "./services/LoginCheck";

// Pages
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import Home from "./pages/Home";
import HotelDetail from "./pages/HotelDetail";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  const { customer, googleUser, setGoogleUser, setCustomer } = React.useContext(AuthContext);

  const checkUser = async () => {
    const loggedInCustomer = await LoginAuthentication();
    if (loggedInCustomer) {
      setCustomer(loggedInCustomer);
    } else {
      setCustomer(null);
    }
  };

  React.useEffect(() => {
    if (!googleUser) {
      const storedUserData = localStorage.getItem("googleUser");
      if (storedUserData) {
        const storedUserDataDecoded = JSON.parse(storedUserData);
        setGoogleUser(storedUserDataDecoded);
      }
    }
  }, [googleUser]);

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
          {customer || googleUser ? (
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
