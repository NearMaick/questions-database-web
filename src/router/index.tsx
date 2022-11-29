import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Educators } from "../pages/Educators";
import { Login } from "../pages/Login";
import { Questions } from "../pages/Questions";
import { Success } from "../pages/Success";
import { PrivateRoutes } from "./PrivateRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />,
      <Route path='/' element={<PrivateRoutes />}>
        <Route path='/educators' element={<Educators />} />,
        <Route path='/questions' element={<Questions />} />,
        <Route path='/success' element={<Success />} />,
      </Route>
    </>
  )
);

