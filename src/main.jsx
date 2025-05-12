import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import RentalCatalog from "./pages/RentalCatalog";
import SeasonalItems from "./pages/SeasonalItems";
import BookEvent from "./pages/BookEvent";
import Error from "./pages/Error";

// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
// 

const router = BrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/seasonal-items",
        element: <SeasonalItems />
      },
      {
        path: "/rental-catalog",
        element: <RentalCatalog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/book-event",
        element: <BookEvent />
      },
    ],
    errorElement: <Error />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={router} />

);
