import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Route, Redirect } from "react-router-dom";
import './AtlasReign.css';
import { NavBar } from "../components/nav/NavBar";
import { ApplicationViews } from "../components/ApplicationViews";

export const AtlasReign = () => {
  return (
    <>
    <Route
      render={() => {
        if (sessionStorage.getItem("atlasreign_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
  );
}