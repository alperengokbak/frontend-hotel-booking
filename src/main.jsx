import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MainTheme } from "./Theme.jsx";
import { ThemeProvider } from "@mui/material";
import { AuthContextProvider } from "./services/Authentication.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={MainTheme}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ThemeProvider>
);
