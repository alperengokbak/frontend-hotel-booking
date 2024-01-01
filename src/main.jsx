// React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App.jsx";

// Theme
import { MainTheme } from "./Theme.jsx";
import { ThemeProvider } from "@mui/material";

// Context
import { AuthContextProvider } from "./context/Authentication.jsx";

// Google Login
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={MainTheme}>
    <AuthContextProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </AuthContextProvider>
  </ThemeProvider>
);
