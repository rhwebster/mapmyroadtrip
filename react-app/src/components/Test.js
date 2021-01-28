import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPic } from "../store/session";

export default function Test() {
  const dispatch = useDispatch();
  const [profPic, setProfPic] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setPic({ profPic })).then(() => {
      setProfPic(null);
    });
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

  const updateProfPic = async (e) => {
    const file = e.target.files[0];
    if (file) setProfPic(file);
    console.log(file);
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        action="/"
        method="POST"
        enctype="multipart/form-data"
      >
        <label for="user_file">Upload Your File</label>
        <br></br>
        <input accept="image/*" type="file" name="user_file" />
        <br></br>
        <button value={profPic} onChange={updateProfPic} type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
