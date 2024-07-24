import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import OTP from "./pages/OTP.jsx";
import DragAndDrop from "./pages/DragAndDrop.jsx";
import PaginateTable from "./pages/PaginateTable.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <OTP />,
      },
      {
        path: "drag-drop",
        element: <DragAndDrop />,
      },
      {
        path: "paginate-table",
        element: <PaginateTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
