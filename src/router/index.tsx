import { createBrowserRouter } from "react-router-dom";
import { Educators } from "../pages/Educators";
import { Login } from "../pages/Login";
import { Questions } from "../pages/Questions";
import { Success } from "../pages/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/educators",
    element: <Educators />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

