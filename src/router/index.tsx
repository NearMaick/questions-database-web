import { createBrowserRouter } from "react-router-dom";
import { Educators } from "../pages/Educators";
import { Home } from "../pages/Home";
import { Questions } from "../pages/Questions";

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
]);

