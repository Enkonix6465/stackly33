import React, { createContext, useContext, useState } from "react";

// Create context
export const DarkModeContext = createContext();

// Provider
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// ✅ Custom hook
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};