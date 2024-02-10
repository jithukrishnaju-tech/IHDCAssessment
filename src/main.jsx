import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Join from "./components/Join.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products.jsx";
import Transactions from "./components/Transactions.jsx";
import Journal from "./components/Journal.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/journal",
        element: <Journal />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
