import './Entries.css';

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setPic } from "../../store/session";
import styled from 'styled-components';
import JournalEntryMap from '../JournalEntryMap/JournalEntryMap';
import { useParams, useHistory } from 'react-router-dom';
import { getAllJournalEntries } from '../../store/entry';


function Entries() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const authenticate = useSelector((state) => state.session.authenticate);
    const journalEntries = useSelector((state) => state.session.journalEntries);

    useEffect(() => {
        if (user) {
            dispatch(getAllJournalEntries(user.id))
        }
    }, [dispatch, user]);

    if (!authenticate) {
        return null;
    }

    return (
        <div>
            {journalEntries &&
            journalEntries.map(entry => {
                console.log(entry)
                return (
                    <div>{entry.title}</div>
                )
            })}
        </div>
    )
}

export default Entries;
