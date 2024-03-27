import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Error from "./components/Error/Error.jsx";
import Homepage from "./components/HomePage/Homepage.jsx";
import Card from "./components/Card/Card.jsx";
import ListedBook from "./components/ListedBook/ListedBook.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contact from "./components/Contact/Contact.jsx";
import PageToRead from "./components/PageToRead/PageToRead.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: () => {
          return fetch("/fake.json");
        },
      },
      {
        path: "/books/:id",
        element: <Card />,
        loader: () => {
          return fetch("/fake.json");
        },
      },
      {
        path: "/listedbooks",
        element: <ListedBook />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/pagetoread", element: <PageToRead /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
