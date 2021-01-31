import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad, faMapMarkedAlt, faCameraRetro, faUserCog, faNewspaper} from '@fortawesome/free-solid-svg-icons'
import Photos from '../Photos/Photos';
import './Nav.css'

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
  margin: 0px 0px 0px 0px;
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
    padding: 3.5rem 0.625rem;
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
      <nav className="nav">
        <ul className="nav__list" role="menubar">
          <li className="nav__item">
            <Link to="/entries">
            <FontAwesomeIcon icon={faNewspaper} size="2x" className="nav__link" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/trips">
            <FontAwesomeIcon icon={faRoad} size="2x" className="nav__link" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/map">
            <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" className="nav__link" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/photos">
            <FontAwesomeIcon icon={faCameraRetro} size="2x" className="nav__link" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/settings">
            <FontAwesomeIcon icon={faUserCog} size="2x" className="nav__link" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </NavStyled>
  );
}
