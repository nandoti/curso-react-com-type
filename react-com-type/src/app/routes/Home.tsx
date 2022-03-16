import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";

import { Dashboard, Login } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/Home" />} />
      </Switch>
    </BrowserRouter>
  );
};
