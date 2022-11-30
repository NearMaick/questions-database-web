import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Educators } from "../pages/Educators";
import { Login } from "../pages/Login";
import { QuestionCreate } from "../pages/QuestionCreate";
import { Success } from "../pages/Success";
import { PrivateRoutes, PublicRoutes } from "./Routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement path='/' element={<PublicRoutes />}>
        <Route path='/' element={<Login />} />,
      </Route>

      <Route path='/dashboard' element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />,
        <Route
          path='/dashboard/questions/create'
          element={<QuestionCreate />}
        />
        ,
        <Route path='/dashboard/educators' element={<Educators />} />,
        <Route path='/dashboard/success' element={<Success />} />,
      </Route>
    </>
  )
);

