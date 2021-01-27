import React from 'react'

export default function Header() {
    return (
      
    <div class="wrapper">
        {/* NavBar */}
      <nav class="nav">
        <ul class="nav__list" role="menubar">
          <li class="nav__item nav__item--isActive">
            <a
              href="#"
              class="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Home"
            >
              <svg
                class="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  fill="#6563ff"
                  d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
                />
              </svg>
            </a>
          </li>
          <li class="nav__item">
            <a
              href="#"
              class="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Favorite projects"
            >
              <svg
                class="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"
                />
              </svg>
            </a>
          </li>
          <li class="nav__item">
            <a
              href="#"
              class="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Analytics"
            >
              <svg
                class="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  d="M6,13H2a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V14A1,1,0,0,0,6,13ZM5,21H3V15H5ZM22,9H18a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,22,9ZM21,21H19V11h2ZM14,1H10A1,1,0,0,0,9,2V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V2A1,1,0,0,0,14,1ZM13,21H11V3h2Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      {/* End of Nav */}

      {/* main section */}

      {/* search bar */}

      <main class="main">
        <header class="header">
          <div class="header__wrapper">
            <form action="" class="search">
              <button class="search__button focus--box-shadow" type="submit">
                <svg
                  class="search__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                  />
                </svg>
              </button>
              <input
                class="search__input focus--box-shadow"
                type="text"
                placeholder="Entry search"
              />
            </form>
            <div class="profile">
              <button class="profile__button">
                <span class="profile__name">Jessica</span>
                <img
                  class="profile__img"
                  src="./img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                  alt="Profile picture"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </header>

        {/* end of SearchBar */}

        {/* trips */}
        <section class="section">
          <header class="section__header">
            <h2 class="section__title">Trips</h2>
            <a href="#" class="section__link">View all</a>
          </header>
          <ul class="team">
            <li class="team__item">
              <a class="team__link focus--box-shadow" href="#">
                <div class="team__header">
                  <button
                    class="setting setting--absolute focus--box-shadow"
                    type="button"
                  >
                    <svg
                      enable-background="new 0 0 515.555 515.555"
                      height="512"
                      viewBox="0 0 515.555 515.555"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
                      />
                      <path
                        d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
                      />
                      <path
                        d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
                      />
                    </svg>
                  </button>
                </div>
                <div class="team__inform">
                  <p class="team__name">Vegas</p>
                  <time class="date" datetime="2020-05-05T10:00:00"
                    >05 May, 2020</time
                  >
                </div>
              </a>
            </li>
          </ul>
        </section>
            {/* end of trips */}
            {/* entries */}
        <section class="section">
          <header class="section__header">
            <h2 class="section__title">Entries</h2>
            <div class="section__control">
              <button
                class="section__button section__button--painted focus--box-shadow"
                type="button"
                aria-label="Add New project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path
                    d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
                  />
                </svg>
              </button>
            </div>
          </header>
          <ul class="project">
            <li class="project__item">
              <a href="#" class="project__link focus--box-shadow">
                <div class="project__wrapper">
                  <div class="project__element project__icon">
                    <div
                      class="icon icon--viking"
                      aria-label="Icon of the 'Showcase Design' project"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="presentation"
                      >
                        <path
                          d="M7,10H9A1,1,0,0,0,9,8H7a1,1,0,0,0,0,2ZM21,4H13V3a1,1,0,0,0-2,0V4H3A1,1,0,0,0,2,5V15a3,3,0,0,0,3,3H9.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,19.41V21a1,1,0,0,0,2,0V19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,18H19a3,3,0,0,0,3-3V5A1,1,0,0,0,21,4ZM20,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6H20ZM7,14h6a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="project__element project__inform">
                    <span class="project__inform-name"
                      >Rest Stop</span
                    >
                  </div>
                  <div class="project__element project__photo">
                  </div>
                  <div class="project__element project__date">
                    <time class="date" datetime="2020-05-05T10:00:00"
                      >05 May, 2020</time
                    >
                  </div>
                  <div class="project__element project__status">
                    <span class="status status--published">Published</span>
                  </div>
                  <div class="project__element project__setting">
                    
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </main>
          {/* end of entries */}
        {/* end of section */}
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
              <a class="statistics__entry-description" href="#">Trips</a
              ><span class="statistics__entry-quantity">2</span>
            </li>
            <li class="statistics__entry">
              <a class="statistics__entry-description" href="#">Entries</a
              ><span class="statistics__entry-quantity">3</span>
            </li>
          </ul>
        </section>
      </aside>
    </div>
    )
}
