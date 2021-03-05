import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPic } from "../../store/session";
import { addProfPic } from "../../store/session";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [profPic, setProfPic] = useState({ name: null });

  const user = useSelector(state => state.session.user);
  const profilePic = useSelector(state => state.session.user.profile_pic);
  const tripCount = useSelector((state) => {
    if (state.trips.trips) {
      return state.trips.trips.length
    }
  });
  const entryCount = useSelector((state) => {
    if (state.trips.trips) {
      return state.journalEntries.journalEntries.length
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
              alt="Profile"
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
            </NavLink>
            <span className="statistics__entry-quantity">{tripCount}</span>
          </li>
          <li className="statistics__entry">
            <div className="statistics__entry-description">
              Entries
            </div>
            <span className="statistics__entry-quantity">{entryCount}</span>
          </li>
        </ul>
      </section>
    </aside>
  );
}
