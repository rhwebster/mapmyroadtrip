import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPic } from "../store/session";
import './Test.css'

export default function Test() {
  const dispatch = useDispatch();
  const [profPic, setProfPic] = useState("");
  const [imgPreview, setImagePreview] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setPic( profPic ))
  };

  //Create thunk to updata user profile

  // const updateFile = (e) => {
  //   const file = e.target.files[0];
  //   if (file) setVidPic(file);
  //   const fileReader = new FileReader();
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  //   fileReader.onloadend = () => {
  //     setImagePreview(fileReader.result);
  //   };
  // };

  const updateProfPic = (e) => {
    const file = e.target.files[0];
    setProfPic(file);

    const fileReader = new FileReader();
    if (file) {
        fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = () => {
        setImagePreview(fileReader.result);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        // action="/"
        // method="POST"
        encType="multipart/form-data"
      >

        <img className="imgPreview" src={imgPreview} alt=''></img>
        <label  className="custom-file-upload">CLICK HERE TO UPLOAD A PHOTO
          <input onChange={updateProfPic} type="file" name="user_file" />
        </label>
        <br></br>
        <button  type="submit">Upload</button>
      </form>
    </div>
  );
}
