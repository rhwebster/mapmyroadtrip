import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import styled from 'styled-components';
import Avatar from '../../styles/Avatar';

export const StyledAuth = styled.div`
  /* width: 385px;
  padding: 3rem 1.5rem;
  background: ${(props) => props.theme.grey};
  border-radius: 4px;
  margin: 8% auto; */

  padding: 1rem;
  img {
    cursor: pointer;
    margin-right: 40px;
  }
  .input-group {
    margin-top: 1.5rem;
  }
  .input-group > label {
    display: inline-block;
    width: 100px;
  }
   input {
    overflow: hidden;
    border-radius: 3px;
    width: 100%;
    padding: 0.6rem 1.2rem;
    /* background: ${(props) => props.theme.black}; */
    border: 1px solid ${(props) => props.theme.black};
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.primaryColor};
  }

  textarea {
    overflow: hidden;
    width: 100%;
    padding: 0.6rem 1.2rem;
    background: ${(props) => props.theme.black};
    border: 1px solid ${(props) => props.theme.black};
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.primaryColor};
  }
  .textarea-group {
    display: flex;
  }
  .change-avatar {
    display: flex;
  }
  input[id="change-avatar"],
  input[id="change-avatar-link"] {
    display: none;
  }
  span {
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
   button {
    padding: 0.4rem 1rem;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.blue};
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
  }
  @media screen and (max-width: 550px) {
    width: 98%;
    .input-group {
      display: flex;
      flex-direction: column;
    }
    label {
      padding-bottom: 0.5rem;
      font-size: 1rem;
    }
    button {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 430px) {
    input,
    textarea {
      width: 99%;
    }
  }
`;

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [newAvatar, setNewAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        // setAuthenticated(true);
      }
    }
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
    return <Redirect to="/" />;
  }

  return (
    <StyledAuth>
    <form onSubmit={onSignUp}>
          <div className="input-group change-avatar">
          <div>
            <label htmlFor="change-avatar">
              <Avatar
                lg
                alt="avatar"
              />
            </label>
            <input
              id="change-avatar"
              accept="tripkeeper/*"
              type="file"
              // onChange={handleImageUpload}
            />
          </div>
          <div className="change-avatar-meta">
            <label htmlFor="change-avatar-link">
              <span>Change Profile Photo</span>
            </label>
            <input
              id="change-avatar-link"
              accept="tripkeeper/*"
              type="file"
              // onChange={handleImageUpload}
            />
          </div>
        </div>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </StyledAuth>
  );
};

export default SignUpForm;
