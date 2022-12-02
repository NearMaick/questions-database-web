import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Educators } from "../pages/Educators";
import { Login } from "../pages/Login";
import { QuestionCreate } from "../pages/QuestionCreate";
import { Success } from "../pages/Success";
import { Route } from "./Route";

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/dashboard' component={Dashboard} isPrivate />
      <Route path='/questions/create' component={QuestionCreate} isPrivate />
      <Route path='/educators' component={Educators} />
      <Route path='/success' component={Success} isPrivate />
    </Switch>
  );
}

