// sass
import "./App.scss";
// components
import Homepage from "./pages/Homepage/Homepage";
import Searchpage from "./pages/Searchpage/Searchpage";
//other
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
// context
import { createContext } from "react";
const DarkModeContext = createContext();
const ChangeDarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/Searchpage",
      element: <Searchpage />,
    },
  ]);

  return (
    <section className={isDarkMode ? "App" : "App lightMode"}>
      <DarkModeContext.Provider value={isDarkMode}>
        <ChangeDarkModeContext.Provider value={setIsDarkMode}>
          <RouterProvider router={router} />
        </ChangeDarkModeContext.Provider>
      </DarkModeContext.Provider>
    </section>
  );
}

export { App, DarkModeContext, ChangeDarkModeContext };
