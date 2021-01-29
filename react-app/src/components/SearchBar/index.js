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
      <header class="header">
        <div class="header__wrapper">
          <form action="" class="search">
          <span class="search_box">
            <div>
              <input
                class="search__input focus--box-shadow"
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
          
          {/* <div class="profile">
            <button class="profile__button">
              <span class="profile__name">Jessica</span>
              <img
                class="profile__img"
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
