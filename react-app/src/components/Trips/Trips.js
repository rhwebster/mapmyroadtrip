import React from "react";

export default function Trips() {
  return (


      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Trips</h2>
          <a href="#" className="section__link">
            View all
          </a>
        </header>
        <ul className="trips">
          <li className="trips__item">
            <a className="trips__link focus--box-shadow" href="#">
              <div className="trips__header">
                <button
                  className="setting setting--absolute focus--box-shadow"
                  type="button"
                >
                  <svg
                    enableBackground="new 0 0 515.555 515.555"
                    height="512"
                    viewBox="0 0 515.555 515.555"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </button>
              </div>
              <div className="trips__inform">
                <p className="trips__name">Vegas</p>
                <time className="date" dateTime="2020-05-05T10:00:00">
                  05 May, 2020
                </time>
              </div>
            </a>
          </li>
          <li className="trips__item">
            <a className="trips__link focus--box-shadow" href="#">
              <div className="trips__header">
                <button
                  className="setting setting--absolute focus--box-shadow"
                  type="button"
                >
                  <svg
                    enableBackground="new 0 0 515.555 515.555"
                    height="512"
                    viewBox="0 0 515.555 515.555"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </button>
              </div>
              <div className="trips__inform">
                <p className="trips__name">Cali</p>
                <time className="date" dateTime="2020-05-05T10:00:00">
                  05 May, 2020
                </time>
              </div>
            </a>
          </li>
        </ul>
      </section>


  );
}
