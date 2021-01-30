import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Profile() {
    return (
            <aside className="aside">
        <section className="section">
          <div className="aside__control">
          </div>
          <div className="profile-main">
            <button
              className="profile-main__setting focus--box-shadow"
              type="button"
            >
              <img
                className="profile-main__photo"
                src="./img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                alt="Profile photo"
              />
            </button>
            <h1 className="profile-main__name">Jessica</h1>
          </div>
          <ul className="statistics">
            <li className="statistics__entry">
              <NavLink className="statistics__entry-description" exact to="/map">Trips
                <i className="fas fa-home"></i>
              </NavLink>
              <span className="statistics__entry-quantity">2</span>
            </li>
            <li className="statistics__entry">
              <a className="statistics__entry-description" href="#">Entries</a
              ><span className="statistics__entry-quantity">3</span>
            </li>
          </ul>
        </section>
      </aside>
    )
}
