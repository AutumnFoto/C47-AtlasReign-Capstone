import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "../components/ApplicationViews";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import './AtlasReign.css';
import { NavBar } from "../components/nav/NavBar";



export const AtlasReign = () => {
  return (
    <>
    <Route
      render={() => {
        if (sessionStorage.getItem("atlasreign_id")) {
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