import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllJournalEntries } from '../../store/entry';
import SingleEntry from '../SingleEntry/SingleEntry';
import Nav from '../Nav/Nav';
import Profile from '../Trips/Profile';
import { nanoid } from 'nanoid';
import './Entries.css';


function Entries() {
    const dispatch = useDispatch();
    const [key] = React.useState(nanoid);

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
            journalEntries.map(entry => {
                return (
                    <>
                        <SingleEntry key={key} title={entry.title} img={entry.image} entry={entry.entry}/>
                    </>
                )
            })}
        </div>
        </main>
        <Profile  />
    </div>
    )
}

export default Entries;
