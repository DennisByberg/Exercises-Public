import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Searchpage from "./pages/Searchpage/Searchpage";

function App() {
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
    <section className="App">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
