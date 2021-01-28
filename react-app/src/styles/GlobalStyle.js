import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
  --font-roboto: "Roboto", Arial, sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  --athens-gray: #e9e8ec;
  --dune: #242221;
  --dune-rgba-2: rgba(36, 34, 33, 0.2);
  --dune-rgba-5: rgba(36, 34, 33, 0.5);
  --alabaster: #f8f8f8;
  --true-v: #9174d8;
  --true-v-rgba-5: rgba(145, 116, 216, 0.5);
  --silver: #c7c7c7;
  --blue-violet: #7a61b7;
  --viking: #aae5e5;
  --geraldine: #f98f8e;
  --cornflower-blue: #727ef7;
  --rajah: #fdd3d6;
}

html {
    background-color: var(--athens-gray);
    font-size: 12px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		font-size: 1rem;
		font-family: ${(props) => props.theme.font}, sans-serif;
		color: var(--dune);
		background-color: --athens-gray;
		line-height: 1.8;
	}

ul,
ol {
  list-style-type: none;
}

h1 {
  font-size: 2.4rem;
}

h2 {
  font-size: 2.2rem;
}

h3 {
  font-size: 2rem;
}

h4,
h5,
h6 {
  font-size: 1.8rem;
}

svg,
img {
  max-width: 100%;
  max-height: 100%;
}

svg path {
  fill: var(--dune);
  transition: fill 0.3s ease;
}

a {
  text-decoration: none;
  color: var(--dune);
  transition: color 0.3s ease;
}

@media (hover: hover) {
  a:hover {
    color: var(--blue-violet);
  }
}

button {
  padding: 0.85rem;
  background-color: var(--white);
  border: 0;
  font-weight: var(--alabaster);
  color: var(--dune);
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.focus--box-shadow:focus {
  z-index: 1;
  outline: none;
  box-shadow: 0 0 0 3px var(--true-v-rgba-5);
}

@media (max-width: 1800px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.85rem;
  }

  h3 {
    font-size: 1.7rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1.55rem;
  }
}

@media (max-width: 1200px) {
  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.65rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1.35rem;
  }
}

@media (max-width: 992px) {
  h1 {
    font-size: 1.6rem;
  }

  h2,
  h3 {
    font-size: 1.4rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1.2rem;
  }
}

/* Wrapper */

.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
}

@media (max-width: 992px) {
  .wrapper {
    flex-wrap: wrap;
  }
}


/* Main */

.main {
  width: calc(100% - 46.125rem);
  margin: 0 3.75rem 6rem 1.875rem;
}

@media (max-width: 1800px) {
  .main {
    width: calc(100% - 38.8125rem);
    margin: 0 3rem 6rem 1.5rem;
  }
}

@media (max-width: 1400px) {
  .main {
    width: calc(100% - 33.8125rem);
    margin: 0 2rem 6rem 1rem;
  }
}

@media (max-width: 1200px) {
  .main {
    width: calc(100% - 27.125rem);
  }
}

@media (max-width: 992px) {
  .main {
    width: 100%;
    order: 2;
    margin: 0 1rem 6rem 1rem;
  }
}

/* Header */

.header {
  padding: 3.05rem 0 5rem;
}

.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  display: flex;
  width: 100%;
  height: 3.525rem;
  max-width: 32.5rem;
  background-color: var(--alabaster);
  border-radius: 0.625rem;
}

.search__button {
  width: 4.125rem;
  height: 3.525rem;
  padding: 0;
  border-radius: 0.625rem 0 0 0.625rem;
  font-size: 0;
  background-color: var(--alabaster);
  transition: background-color 0.3s ease;
}

@media (hover: hover) {
  .search__button:hover {
    background-color: var(--true-v);
  }

  .search__button:hover .search__icon path {
    fill: var(--alabaster);
  }
}

.search__icon {
  width: 1.5rem;
  height: 1.5rem;
}

.search__input {
  /* position: relative; */
  width: calc(100% - 4.125rem);
  padding: 0 1rem;
  border: 1px solid var(--alabaster);
  background-color: var(--alabaster);
  font-size: 1.2rem;
  color: var(--dune);
  border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
  transition: border-color 0.3s ease;
}

@media (hover: hover) {
  .search__input:hover {
    border-color: var(--true-v);
  }
}

.search__input::placeholder {
  color: var(--silver);
  font-size: 1.2rem;
}

.profile__button {
  display: flex;
  align-items: center;
  padding: 0.1625rem 0;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.profile__button:focus {
  outline: none;
}

.profile__button:focus .profile__img {
  box-shadow: 0 0 0 3px var(--true-v-rgba-5);
}

.profile__button:focus .profile__name {
  color: var(--blue-violet);
}

@media (hover: hover) {
  .profile__button:hover {
    color: var(--blue-violet);
  }
}

.profile__name {
  margin-right: 1.5rem;
}

.profile__img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
}

@media (max-width: 1800px) {
  .header {
    padding: 2.5rem 0 4rem;
  }

  .search__input,
  .search__input::placeholder,
  .profile__button {
    font-size: 1rem;
  }

  .search,
  .search__button {
    height: 3.125rem;
  }

  .search {
    max-width: 28.5rem;
  }
}

@media (max-width: 1400px) {
  .header {
    padding: 1.5rem 0 3rem;
  }

  .search {
    max-width: 21.5rem;
  }

  .profile__button {
    padding: 0;
  }

  .profile__img {
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 768px) {
  .search {
    max-width: calc(100% - 5rem);
  }

  .search__button {
    width: 3.125rem;
  }

  .search__input {
    width: calc(100% - 3.125rem);
  }

  .profile__name {
    display: none;
  }
}

/* Section */

.section:not(:last-child) {
  margin-bottom: 4rem;
}

.section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.section__link {
  font-size: 1.2rem;
}

.section__link:focus {
  outline: none;
  color: var(--blue-violet);
}

.section__button {
  padding: 0.85rem 2rem;
  margin: 0 0.6rem;
  background-color: var(--alabaster);
  font-size: 0;
  border-radius: 10px;
}

.section__button--painted {
  background-color: var(--dune);
}

.section__button svg {
  width: 2rem;
}

.section__button--painted svg path {
  fill: var(--alabaster);
}

.section__button--painted:focus {
  box-shadow: 0 0 0 3px var(--dune-rgba-5);
}

@media (hover: hover) {
  .section__button:hover {
    background-color: var(--true-v);
  }

  .section__button:hover svg path {
    fill: var(--alabaster);
  }
}

@media (max-width: 1800px) {
  .section__link {
    font-size: 1rem;
  }

  .section__button {
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 1400px) {
  .section__button {
    padding: 0.65rem 1.25rem;
  }

  .section__button svg {
    width: 1.8rem;
  }
}

@media (max-width: 992px) {
  .section:not(:last-child) {
    margin-bottom: 2rem;
  }

  .section__header {
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .section__button {
    padding: 0.6rem;
    margin: 0 0.3rem;
  }
}

/* Trips */

.trips {
  display: flex;
  justify-content: start;
  margin: 0 -0.6rem;
}

.trips__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.trips__item {
  width: calc(100% / 3);
  margin: 0 0.6rem;
}

.trips__link {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--alabaster);
  padding: 2.4rem 1.6rem;
  border-radius: 10px;
  text-align: left;
  transition: background-color 0.3s ease;
}

@media (hover: hover) {
  .trips__link:hover {
    background-color: var(--true-v);
  }

  .trips__link:hover .trips__name,
  .trips__link:hover .date {
    color: var(--alabaster);
  }

  .trips__link:hover .setting svg path {
    fill: var(--alabaster);
  }

  .trips__link:hover .photo__item {
    border-color: var(--true-v);
    background-color: var(--alabaster);
  }

  .trips__link:hover .photo__item .photo__substrate {
    color: var(--dune);
  }
}

.trips__name {
  margin-bottom: 0.7rem;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.5;
  color: var(--dune);
}

@media (max-width: 1800px) {
  .trips__header {
    margin-bottom: 2rem;
  }

  .trips__item {
    width: calc(100% / 2);
  }

  .trips__item:nth-child(3n) {
    display: none;
  }

  .trips__link {
    padding: 1.8rem 1.6rem;
  }
}

@media (max-width: 1400px) {
  .trips__header {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 992px) {
  .trips__name {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .trips__item {
    width: 100%;
  }

  .trips__item:nth-child(2n) {
    display: none;
  }
}

/* Photo */

.photo {
  display: flex;
  align-items: center;
  margin-left: -3px;
}

.photo__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  margin-right: -12px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--alabaster);
  background-color: var(--dune);
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.photo__substrate {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--alabaster);
  transition: color 0.3s ease;
}

@media (max-width: 1400px) {
  .photo__item {
    width: 3rem;
    height: 3rem;
  }
}

/* Date */

.date {
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--dune);
}

@media (max-width: 1800px) {
  .date {
    font-size: 1rem;
  }
}

/* Icon */

.icon {
  background-color: var(--dune);
  padding: 0.8rem;
  border-radius: 10px;
  font-size: 0;
}

.icon svg path {
  fill: var(--alabaster);
}

.icon--viking {
  background-color: var(--viking);
}

.icon--rajah {
  background-color: var(--rajah);
}

@media (max-width: 768px) {
  .icon {
    padding: 0.6rem;
  }
}


/* Setting button */

.setting {
  width: 3.2rem;
  height: 3.2rem;
  padding: 1rem;
  border-radius: 10px;
}

.setting--absolute {
  position: absolute;
  top: 2.3rem;
  right: 1rem;
}

.setting--rotate {
  transform: rotate(90deg);
}

@media (hover: hover) {
  .setting:hover svg path {
    fill: var(--true-v);
  }
}

.setting svg path {
  fill: var(--dune);
}

@media (max-width: 1400px) {
  .setting--absolute {
    top: 1.7rem;
  }
}

@media (max-width: 992px) {
  .setting {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
  }

  .setting--absolute {
    top: 2.2rem;
  }
}

/* Aside */

.aside {
  width: 30rem;
  background-color: var(--alabaster);
  padding: 3.05rem 1.875rem;
}

.aside__control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -0.3rem 4rem;
}

.aside__button {
  position: relative;
  padding: 0.3rem;
  font-size: 0;
  border-radius: 10px;
}

.aside__button svg {
  width: 2.5rem;
}

.aside__button--notification:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 11px;
  width: 8px;
  height: 8px;
  border: 2px solid var(--alabaster);
  background-color: var(--viking);
  border-radius: 50%;
}

@media (max-width: 1800px) {
  .aside {
    width: 27rem;
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 1400px) {
  .aside {
    width: 24rem;
    padding: 1.5rem 1rem;
  }

  .aside__control {
    margin: 0 -0.3rem 3rem;
  }
}

@media (max-width: 992px) {
  .aside {
    width: 100%;
    order: 1;
    padding: 2rem 1rem 4rem;
  }
}

/* Profile main */

.profile-main {
  margin-bottom: 6rem;
  text-align: center;
}

.profile-main__setting {
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  padding: 0;
  border-radius: 50%;
  overflow: hidden;
}

.profile-main__photo {
  width: 100%;
}

@media (max-width: 1800px) {
  .profile-main__setting {
    max-width: 250px;
  }
}

@media (max-width: 1400px) {
  .profile-main {
    margin-bottom: 4rem;
  }

  .profile-main__setting {
    max-width: 225px;
  }
}

/* Statistics */

.statistics {
  margin-bottom: 4rem;
}

.statistics__entry {
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0.5rem;
}

.statistics__entry:not(:last-child) {
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--athens-gray);
}

.statistics__entry-description,
.statistics__entry-quantity {
  font-size: 1.5rem;
}

.statistics__entry-description:focus {
  outline: none;
  color: var(--blue-violet);
}

.statistics__entry-quantity {
  font-weight: var(--font-weight-medium);
}

@media (max-width: 1800px) {
  .statistics__entry {
    padding: 1rem 0.5rem;
  }

  .statistics__entry-description,
  .statistics__entry-quantity {
    font-size: 1.3rem;
  }
}

@media (max-width: 992px) {
  .statistics {
    max-width: 480px;
    margin: 0 auto 3rem;
  }

  .statistics__entry {
    padding: 0.75rem 0.35rem;
  }

  .statistics__entry-description,
  .statistics__entry-quantity {
    font-size: 1.1rem;
  }
}
`;

export default GlobalStyle;
