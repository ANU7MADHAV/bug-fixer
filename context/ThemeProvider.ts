'use client'
import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("");

  const handleChange = (newMode: string) => {
    setMode(newMode);
  };

  const contextValue: ThemeContextType = {
    mode,
    setMode: handleChange,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };