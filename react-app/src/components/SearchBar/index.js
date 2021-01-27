import React from "react";

export default function SearchBar() {
  return (
      
    
      <header class="header">
        <div class="header__wrapper">
          <form action="" class="search">
            <button class="search__button focus--box-shadow" type="submit">
              <svg
                class="search__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
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
   
  );
}
