import React, { useEffect } from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllJournalEntries } from '../../store/entry';
import SingleEntry from "../SingleEntry/SingleEntry";

const EntriesStyle = styled.div`
.entries__item:not(:last-child) {
  margin-bottom: 1.2rem;
}

.entries__link {
  position: relative;
  display: block;
  width: 100%;
  background-color: var(--alabaster);
  padding: 1.5rem 0.7rem;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

@media (hover: hover) {
  .entries__link:hover .entries__inform-name {
    color: var(--blue-violet);
  }
}

.entries__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.entries__element {
  padding: 0 0.8rem;
}

.entries__icon {
  width: 8%;
  max-width: 90px;
  min-width: 80px;
}

.entries__inform {
  width: 10%;
}

.entries__date {
  width: 80%;
}

.entries__photo {
  width: 0%;
}

.entries__status {
  width: 12%;
}

.entries__setting {
  width: 8%;
  text-align: center;
}

.entries__inform-name {
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--dune);
}

@media (max-width: 1800px) {
  .entries__link {
    padding: 1.2rem 0.7rem;
  }

  .entries__element {
    padding: 0 0.5rem;
  }

  .entries__icon {
    max-width: 80px;
    min-width: 70px;
  }

  .entries__inform-name {
    font-size: 1rem;
  }
}

@media (max-width: 1400px) {
  .entries__wrapper {
    flex-wrap: wrap;
  }

  .entries__icon {
    order: 1;
    margin-bottom: 1.5rem;
    width: 75px;
  }

  .entries__inform {
    order: 2;
    width: calc(100% - 90px);
    margin-bottom: 1.5rem;
    padding-right: 4rem;
  }

  .entries__photo {
    order: 4;
    width: 33.333%;
  }

  .entries__date {
    order: 5;
    width: 33.333%;
    text-align: center;
  }

  .entries__status {
    order: 6;
    width: 33.333%;
    text-align: right;
  }

  .entries__setting {
    position: absolute;
    top: 1.2rem;
    right: 0.7rem;
    order: 3;
    width: 4rem;
    height: 4rem;
    margin: 0;
  }
}

@media (max-width: 992px) {
  .entries__link {
    padding: 1rem 0.5rem;
  }

  .entries__element {
    padding: 0 0.3rem;
  }

  .entries__inform {
    padding-right: 3rem;
  }

  .entries__setting {
    right: 0.2rem;
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 768px) {
  .entries__date {
    order: 5;
    width: 50%;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .entries__status {
    order: 5;
    width: 50%;
    margin-bottom: 1.5rem;
  }

  .entries__photo {
    display: flex;
    justify-content: center;
    order: 6;
    width: 100%;
    text-align: center;
  }

  .entries__icon {
    max-width: 50px;
    min-width: 50px;
  }

  .entries__inform {
    width: calc(100% - 55px);
  }
}
`

export default function Entry({...props}) {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);
  const journalEntries = useSelector((state) => state.journalEntries.journalEntries);
    useEffect(() => {
        if (user) {
            dispatch(getAllJournalEntries(user.id))
        }
    }, [dispatch, user]);

  let mostRecentJournalEntry = {};

  return (
    <EntriesStyle>
      {console.log(mostRecentJournalEntry)}
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Entries</h2>
          <div className="section__control">
          <NavLink exact to="/entry">
            <button
              className="section__button section__button--painted focus--box-shadow"
              type="button"
              aria-label="Add New project"
            >
              <svg
                xmlns={props.img}
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
              </svg>
            </button>
            </NavLink>
          </div>
        </header>
        {journalEntries &&
            journalEntries.map((entry, i) => {
              return (
                    <>
                        <SingleEntry title={(entry.title)} img={entry.image} entry={entry.entry}/>
                    </>
                    )
            })}
      </section>
  </EntriesStyle>
  );
}
