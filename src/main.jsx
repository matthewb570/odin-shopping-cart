import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import RouterConfig from "./router/RouterConfig.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={RouterConfig.router} />
  </StrictMode>,
);
