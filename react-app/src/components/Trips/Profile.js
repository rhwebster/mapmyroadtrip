import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { setPic } from "../../store/session";
import { addProfPic } from "../../store/session";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [imgPreview, setImagePreview] = useState(null);
  const [profPic, setProfPic] = useState({ name: null });

  const user = useSelector(state => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profPic)
    dispatch(setPic(profPic))
      .then((file) => {
        dispatch(
          addProfPic({
            id: user.id,
            profPic: file.output,
          })
        );
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });

    setProfPic(null);
  };

  const updateProfPic = (e) => {
    const file = e.target.files[0];
    if (file) setProfPic(file);
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = () => {
      setImagePreview(fileReader.result);
    };
  };

  return (
    <aside class="aside">
      <section class="section">
        <div class="aside__control"></div>
        <div class="profile-main">
          <button class="profile-main__setting focus--box-shadow" type="button">
            
            <img
              class="profile-main__photo"
              src={imgPreview}
              alt="Profile photo"
            />
            
          </button>
          <form onSubmit={handleSubmit}>
          <label className="custom-file-upload">
            
          </label>
          <br></br>
          <input onChange={updateProfPic} type="file" name="user_file" />
          <button className="contact-form-btn-upload" type="submit">
            Upload
          </button>
          <button
            className="contact-form-btn-submit"
            type="submit"
            onClick={() => history.push("/dash")}
          >
          </button>
          </form>
          <h1 class="profile-main__name">User</h1>
        </div>
        <ul class="statistics">
          <li class="statistics__entry">
            <NavLink class="statistics__entry-description" exact to="/map">
              Trips
              <i className="fas fa-home"></i>
            </NavLink>
            <span class="statistics__entry-quantity">2</span>
          </li>
          <li class="statistics__entry">
            <a class="statistics__entry-description" href="#">
              Entries
            </a>
            <span class="statistics__entry-quantity">3</span>
          </li>
        </ul>
      </section>
    </aside>
  );
}
