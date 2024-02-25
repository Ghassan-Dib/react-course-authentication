import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";

const Signup = (props) => {
  const onSubmit = (formProps) => {
    props.signup(formProps);
  };
  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <button>Submit form</button>
    </form>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: "signup" })
)(Signup);
