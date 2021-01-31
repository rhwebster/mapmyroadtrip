import React, { useState } from 'react';
import { useSelector } from "react-redux";
import './SplashPage.css'

const SplashPage = () => {
  const authenticate = useSelector((state) => state.session.authenticate);

  return (
    <>
        <img id="background-image" src="./images/splash.jpg"></img>
    </>

  );
}

export default SplashPage;
