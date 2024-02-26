import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const withAuth = (WrappedComponent) => {
  const ComposedComponent = (props) => {
    const navigate = useNavigate();

    const shouldNavigateAway = useCallback(() => {
      if (!props.auth) {
        navigate("/");
      }
    }, [props.auth, navigate]);

    useEffect(() => {
      shouldNavigateAway();
    }, [shouldNavigateAway]);

    useEffect(() => {
      shouldNavigateAway();
    }, [props.auth, shouldNavigateAway]);

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default withAuth;
