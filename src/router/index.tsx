import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Educators } from "../pages/Educators";
import { Login } from "../pages/Login";
import { Questions } from "../pages/Questions";
import { Success } from "../pages/Success";
import { PrivateRoutes, PublicRoutes } from "./Routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement path='/' element={<PublicRoutes />}>
        <Route path='/' element={<Login />} />,
      </Route>

      <Route path='/dashboard' element={<PrivateRoutes />}>
        <Route path='/dashboard/educators' element={<Educators />} />,
        <Route path='/dashboard/questions' element={<Questions />} />,
        <Route path='/dashboard/success' element={<Success />} />,
      </Route>
    </>
  )
);

