import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
