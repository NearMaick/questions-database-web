import { createBrowserRouter } from "react-router-dom";
import { Educators } from "../pages/Educators";
import { Home } from "../pages/Home";
import { Questions } from "../pages/Questions";
import { Success } from "../pages/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

