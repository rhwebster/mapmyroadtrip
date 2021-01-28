import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Profile() {
    return (
            <aside class="aside">
        <section class="section">
          <div class="aside__control">
          </div>
          <div class="profile-main">
            <button
              class="profile-main__setting focus--box-shadow"
              type="button"
            >
              <img
                class="profile-main__photo"
                src="./img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                alt="Profile photo"
              />
            </button>
            <h1 class="profile-main__name">Jessica</h1>
          </div>
          <ul class="statistics">
            <li class="statistics__entry">
              <NavLink class="statistics__entry-description" exact to="/map">Trips
                <i className="fas fa-home"></i>
              </NavLink>
              <span class="statistics__entry-quantity">2</span>
            </li>
            <li class="statistics__entry">
              <a class="statistics__entry-description" href="#">Entries</a
              ><span class="statistics__entry-quantity">3</span>
            </li>
          </ul>
        </section>
      </aside>
    )
}
