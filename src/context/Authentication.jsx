// React
import React, { createContext, useState } from "react";

// Material UI Components
import { useMediaQuery } from "@mui/material";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [customer, setCustomer] = useState(undefined);
  const [googleUser, setGoogleUser] = useState(undefined);

  return (
    <AuthContext.Provider
      value={{
        customer,
        setCustomer,
        googleUser,
        setGoogleUser,
        isDesktop,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
