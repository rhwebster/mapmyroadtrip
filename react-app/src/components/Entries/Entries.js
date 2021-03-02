import './Entries.css';

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setPic } from "../../store/session";
import styled from 'styled-components';
import JournalEntryMap from '../JournalEntryMap/JournalEntryMap';
import { useParams, useHistory } from 'react-router-dom';
import { getAllJournalEntries } from '../../store/entry';
import SingleEntry from '../SingleEntry/SingleEntry'
import Nav from '../Nav/Nav'
import Profile from '../Trips/Profile'


function Entries() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const authenticate = useSelector((state) => state.session.authenticate);
    const journalEntries = useSelector((state) => state.journalEntries.journalEntries);
    useEffect(() => {
        if (user) {
            dispatch(getAllJournalEntries(user.id))
        }
    }, [dispatch, user]);

    if (!authenticate) {
        return null;
    }

    return (
        <div className='wrapper'>
        <Nav  />
        <main className="main">
        <div>
            {journalEntries &&
            journalEntries.reverse().map(entry => {
                return (
                    <>
                        <SingleEntry title={entry.title} img={entry.image} entry={entry.entry}/>
                    </>
                )
            }).reverse()}
        </div>
        </main>
        <Profile  />
    </div>
    )
}

export default Entries;
