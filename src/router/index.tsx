import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Educators } from "../pages/Educators";
import { Login } from "../pages/Login";
import { QuestionCreate } from "../pages/QuestionCreate";
import { QuestionsList } from "../pages/QuestionsList";
import { Success } from "../pages/Success";
import { Route } from "./Route";

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/educators' component={Educators} />

      <Route path='/dashboard' component={Dashboard} isPrivate />
      <Route path='/questions/create' component={QuestionCreate} isPrivate />
      <Route path='/questions/list' component={QuestionsList} isPrivate />
      <Route path='/success' component={Success} isPrivate />
    </Switch>
  );
}

