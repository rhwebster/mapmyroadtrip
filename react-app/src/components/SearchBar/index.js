import React from "react";
import { Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const SearchStyled = styled.div`
.search_box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.search_icon {
  margin-top: .33em;
}
`



export default function SearchBar() {
  return (
    <SearchStyled>
      <header className="header">
        <div className="header__wrapper">
          <form action="" className="search">
          <span className="search_box">
            <div>
              <input
                className="search__input focus--box-shadow"
                type="text"
                placeholder="Entry search"
              />
            </div>
            <div>
              <Link to="/SEARCHSUBMIT">
              <FontAwesomeIcon icon={faSearch} size="2x" className="search_icon"/>
              </Link>
            </div>
          </span>
          </form>

          {/* <div className="profile">
            <button className="profile__button">
              <span className="profile__name">Jessica</span>
              <img
                className="profile__img"
                // src="./img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                alt="Profile picture"
                loading="lazy"
              />
            </button>
          </div> */}
        </div>
      </header>
    </SearchStyled>
  );
}
