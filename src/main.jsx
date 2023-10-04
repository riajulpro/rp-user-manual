import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProvider from "./context/ContextProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/AllRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
