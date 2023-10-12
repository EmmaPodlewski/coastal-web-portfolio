import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/UI/RootLayout";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/emma", element: <Expertise /> },
        { path: "/alex", element: <Portfolio /> },
      ],
    },
  ],
  { basename: "/" }
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
