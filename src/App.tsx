import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import darkTheme from "./themes/dark";
import lightTheme from "./themes/light";
import { ThemeProvider, useMediaQuery } from "@mui/material";

const queryClient = new QueryClient();
function App() {

  // const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { darkMode, setDarkMode, render } = Home()
  console.log(darkMode);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Routes>
            <Route path="/" element={render} />
            <Route path="/:id" element={render} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
