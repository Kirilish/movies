import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";
import Favorit from "./pages/Favorit/Favorit";
import { useState, useEffect } from "react";
import Info from "./pages//Info//Info.jsx"

import { GlobalStyles } from "./components/Styled//GlobalStyles";
import { lightTheme, darkTheme } from "./components/Styled/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [isTheme, setIsTthem] = useState("");

  const setColor = (color) => localStorage.setItem("Color", color);

  const themeToggle = (e) => {
    setColor(e.target.value);
    setIsTthem(localStorage.getItem("Color"));
    localStorage.getItem("Color");
  };

  useEffect(() => {
    setIsTthem(localStorage.getItem("Color"));
  }, []);

  const theme = isTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header
          handleChangeTheme={themeToggle}
          selected={localStorage.getItem("Color")}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/favourite" element={<Favorit />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
