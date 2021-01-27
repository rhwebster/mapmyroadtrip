import React from "react";
import styled from 'styled-components';

const NavStyled = styled.div`
.nav {
  display: flex;
  width: 5.6rem;
  height: calc(100vh - 19.25rem);
  min-height: 40rem;
  max-height: 50rem;
  margin: 11.53rem 2.45rem;
  padding: 7.5rem 0.825rem;
  background-color: var(--alabaster);
  border-radius: 20px;
}

.nav__list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.nav__link {
  display: block;
  padding: 10px;
  font-size: 0;
  border-radius: 10px;
  background-color: var(--alabaster);
  text-align: center;
  transition: background-color 0.3s ease;
}

@media (hover: hover) {
  .nav__link:hover {
    background-color: var(--true-v);
  }

  .nav__link:hover .nav__icon path {
    fill: var(--alabaster);
  }
}

.nav__item--isActive .nav__link {
  background-color: var(--dune);
}

.nav__item--isActive .nav__link .nav__icon path {
  fill: var(--alabaster);
}

.nav__item--isActive .nav__link:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--dune-rgba-5);
}

.nav__icon {
  width: 100%;
}

@media (max-width: 1800px) {
  .nav {
    width: 4.6875rem;
    height: calc(100vh - 16.25rem);
    min-height: 35rem;
    max-height: 45rem;
    margin: 9.625rem 1.5rem;
    padding: 7.5rem 0.625rem;
  }
}

@media (max-width: 1400px) {
  .nav {
    height: calc(100vh - 21.25rem);
    margin: 7.625rem 1rem;
    padding: 5.5rem 0.625rem;
  }
}

@media (max-width: 1200px) {
  .nav {
    z-index: 5;
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - 27.125rem);
    height: auto;
    min-height: auto;
    margin: 0 1rem;
    padding: 0.5rem 5rem;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 3px 10px 4px var(--dune-rgba-2);
  }

  .nav__list {
    justify-content: space-around;
  }

  .nav__item {
    width: 3.3rem;
    height: 3.3rem;
  }
}

@media (max-width: 992px) {
  .nav {
    width: calc(100% - 2rem);
  }

  .nav__item {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (max-width: 768px) {
  .nav {
    padding: 0.5rem 1rem;
  }
}
`

export default function Nav() {
  return (
    <NavStyled>
    <div>
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
                <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
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
                <path d="M6,13H2a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V14A1,1,0,0,0,6,13ZM5,21H3V15H5ZM22,9H18a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,22,9ZM21,21H19V11h2ZM14,1H10A1,1,0,0,0,9,2V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V2A1,1,0,0,0,14,1ZM13,21H11V3h2Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </NavStyled>
  );
}
