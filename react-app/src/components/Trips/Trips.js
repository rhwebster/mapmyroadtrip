import React from "react";

export default function Trips() {
  return (
   
    
      <section class="section">
        <header class="section__header">
          <h2 class="section__title">Trips</h2>
          <a href="#" class="section__link">
            View all
          </a>
        </header>
        <ul class="trips">
          <li class="trips__item">
            <a class="trips__link focus--box-shadow" href="#">
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
                  </svg>
                </button>
              </div>
              <div class="trips__inform">
                <p class="trips__name">Vegas</p>
                <time class="date" datetime="2020-05-05T10:00:00">
                  05 May, 2020
                </time>
              </div>
            </a>
          </li>
        </ul>
      </section>
    
   
  );
}
