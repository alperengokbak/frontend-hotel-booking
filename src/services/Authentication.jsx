import React, { createContext, useState } from "react";
import { useMediaQuery } from "@mui/material";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [customer, setCustomer] = useState(undefined);
  return (
    <AuthContext.Provider
      value={{
        customer,
        setCustomer,
        isDesktop,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
