import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.css";
import { modeState } from "./atoms/modeAtom";
import Collections from "./components/Collections/Collections";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./components/Dashboard/DashboardHome/DashboardHome";
import RadishSquare from "./components/Dashboard/RadishSquare/RadishSquare";
import Rootpad from "./components/Dashboard/Rootpad/Rootpad";
import Home from "./components/HomeComponents/Home/Home";


// Design pallete customization
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: "#DE345E",
        },
        secondary: {
          main: "#3EB98E",
        },
        info: {
          main: "#fff",
        },

      }
      : {
        // palette values for dark mode
        primary: {
          main: "#DE345E",
        },
        secondary: {
          main: "#3EB98E",
        },
        info: {
          main: "#fff",
        },
      }),
  },
});



function App() {
  // Gobal states
  const mode = useRecoilValue(modeState)


  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);



  return (
    <div className="App">
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard" element={<DashboardHome />} />
                <Route
                  path="/dashboard/radish-square"
                  element={<RadishSquare />}
                />
                <Route path="/dashboard/radefi" element={<RadishSquare />} />
                <Route path="/dashboard/rootpad" element={<Rootpad />} />
                <Route path="/dashboard/setting" element={<RadishSquare />} />
                <Route path="/dashboard/faq" element={<RadishSquare />} />
              </Route>
              <Route path="/collections" element={<Collections />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
