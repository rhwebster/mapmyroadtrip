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
  const profilePic = useSelector(state => state.session.user.profile_pic);

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
    <aside className="aside">
      <section className="section">
        <div className="aside__control"></div>
        <div className="profile-main">
          <button className="profile-main__setting focus--box-shadow" type="button">

            <img
              className="profile-main__photo"
              src={profilePic}
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
          <h1 className="profile-main__name">User</h1>
        </div>
        <ul className="statistics">
          <li className="statistics__entry">
            <NavLink className="statistics__entry-description" exact to="/map">
              Trips
              <i className="fas fa-home"></i>
            </NavLink>
            <span className="statistics__entry-quantity">2</span>
          </li>
          <li className="statistics__entry">
            <a className="statistics__entry-description" href="#">
              Entries
            </a>
            <span className="statistics__entry-quantity">3</span>
          </li>
        </ul>
      </section>
    </aside>
  );
}
