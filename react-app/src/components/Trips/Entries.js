import React from "react";

export default function Entries() {
  return (
    
    <div className="main">
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
                <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
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
                      <path d="M7,10H9A1,1,0,0,0,9,8H7a1,1,0,0,0,0,2ZM21,4H13V3a1,1,0,0,0-2,0V4H3A1,1,0,0,0,2,5V15a3,3,0,0,0,3,3H9.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,19.41V21a1,1,0,0,0,2,0V19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,18H19a3,3,0,0,0,3-3V5A1,1,0,0,0,21,4ZM20,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6H20ZM7,14h6a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z" />
                    </svg>
                  </div>
                </div>
                <div class="project__element project__inform">
                  <span class="project__inform-name">Rest Stop</span>
                </div>
                <div class="project__element project__photo"></div>
                <div class="project__element project__date">
                  <time class="date" datetime="2020-05-05T10:00:00">
                    05 May, 2020
                  </time>
                </div>
                <div class="project__element project__status">
                  <span class="status status--published">Published</span>
                </div>
                <div class="project__element project__setting"></div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
