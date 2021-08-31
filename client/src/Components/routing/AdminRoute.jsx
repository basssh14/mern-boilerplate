import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

function AdminRoute({
  component: Component,
  auth: { loading, isAuthenticated, user },
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={
        (props) =>
          loading || (isAuthenticated && user === null) ? (
            <Spinner />
          ) : isAuthenticated && user.tipo === "admin" ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        // !isAuthenticated && !loading ? (
        //   <Redirect to="/" />
        // ) : (
        //   <Component {...props} />
        // )
      }
    />
  );
}

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);
