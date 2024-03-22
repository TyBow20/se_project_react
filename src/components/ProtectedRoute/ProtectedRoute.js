import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ProtectedRoute = ({ children, ...rest }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLoggedIn = !!currentUser;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
