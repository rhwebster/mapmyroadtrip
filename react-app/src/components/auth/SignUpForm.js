import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../services/auth';
import styled from 'styled-components';
import Avatar from '../../styles/Avatar';
import './SignUpForm.css'

const SignUpForm = ({authenticated}) => {

  const history = useHistory();
  const [newAvatar, setNewAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
    }
    history.push("/dash");
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/dash" />;
  }

  return (
    // <StyledAuth className="form">
    <>
      <div id="header" >Sign up! Track your adventures now!</div>
    <form className="form" onSubmit={onSignUp}>

      <div>
        <input
          placeholder="User Name"
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <input
          placeholder="Email"
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <input
          placeholder="Input Password Again"
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button id="submit-button" type="submit">Sign Up</button>
    </form>
    </>
    // </StyledAuth>
  );
};

export default SignUpForm;
