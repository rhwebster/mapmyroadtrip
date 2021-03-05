import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { setPic } from "../../store/session";
import { addProfPic } from "../../store/session";
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { faRoad, faPencil } from '@fortawesome/free-solid-svg-icons'
import './Trips.css';

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [imgPreview, setImagePreview] = useState(null);
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
            </NavLink>
            <span className="statistics__entry-quantity">{tripCount}</span>
          </li>
          <li className="statistics__entry">
            <a className="statistics__entry-description" href="#">
              Entries
            </a>
            <span className="statistics__entry-quantity">{entryCount}</span>
          </li>
        </ul>
        <div id='links'>
          View Our Team
          <br></br>
          <ul className='social-links'>
            <h4>Sami Butler</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Sbutler8"
            >
              <AiOutlineGithub className="github-button" style={{ color: 'purple' }} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/samantha-butler-410675178/"
            >
              <AiOutlineLinkedin className="linkedin-button" style={{ color: 'purple' }} />
            </a>
            <h4>Ahdari Scott</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/koran23"
            >
              <AiOutlineGithub className="github-button" style={{ color: 'purple' }} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ahdari-scott-916225117/"
            >
              <AiOutlineLinkedin className="linkedin-button" style={{ color: 'purple' }} />
            </a>
            <h4>Ryan Webster</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/rhwebster"
            >
              <AiOutlineGithub className="github-button" style={{ color: 'purple' }} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ryan-webster-a784509b/"
            >
              <AiOutlineLinkedin className="linkedin-button" style={{ color: 'purple' }} />
            </a>
            <h4>Autumn Wiggins</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/fairy-scary"
            >
              <AiOutlineGithub className="github-button" style={{ color: 'purple' }} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/autumnwiggins/"
            >
              <AiOutlineLinkedin className="linkedin-button" style={{ color: 'purple' }} />
            </a>
          </ul>
        </div>
      </section>
    </aside>
  );
}
