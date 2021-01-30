import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import JournalEntryMap from '../JournalEntryMap/JournalEntryMap';
import { addTrip } from '../../store/addTrip';
import MapAutoComplete from '../MapAutoComplete/MapAutoComplete';
import DestinationAutoComplete from '../MapAutoComplete/DestinationAutoComplete';

const NewTrip = styled.div`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    width: 100vw;
    height: 100px;
    display: grid;
    align-items: center;
    background: #8e2de2;
}
.contact-in {
    width: 80%;
    height: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px #666;
}
.contact-map {
    width: 100%;
    height: auto;
    flex: 50%;
}
.contact-map .map{
    width: 100%;
    height: 100%;
}
.contact-form {
    width: 100%;
    height: auto;
    flex: 50%;
    padding: 30px;
    text-align: center;
}
.contact-form h1 {
    margin-bottom: 10px;
    text-align: center;
}
.contact-form-txt {
    width: 100%;
    height: 40px;
    color: #000;
    border: 1px solid #bcbcbc;
    border-radius: 50px;
    outline: none;
    margin-bottom: 20px;
    padding: 15px;
}
.contact-form-txt::placeholder {
    color: #aaa;
}
.contact-form-txtarea {
    width: 100%;
    height: 130px;
    color: #000;
    border: 1px solid #bcbcbc;
    border-radius: 10px;
    outline: none;
    margin-bottom: 20px;
    padding: 15px;
}
.contact-form-txtarea::placeholder {
    color: #aaa;
}
.contact-form-btn-upload {
    width: 30%;
    border:none;
    outline: none;
    border-radius: 50px;
    background: #8e2de2;
    color: #fff;
    text-transform: uppercase;
    padding: 10px 0;
    cursor: pointer;
    font-size: 10px;
    margin: 5px;
}
.contact-form-btn-submit {
    width: 100%;
    border:none;
    outline: none;
    border-radius: 50px;
    background: #8e2de2;
    color: #fff;
    text-transform: uppercase;
    padding: 10px 0;
    cursor: pointer;
    font-size: 10px;
    margin: 5px;
}
input[type="file"] {
    display: none;
}
.imgPreview {
    width: auto;
    height:100px;
    border-radius: 50%;
}
label.custom-file-upload:hover {
    color: #8E2DE2;
}
`

function CreateNewTrip () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errors, setErrors] = useState([]);
    const [startLat, setStartLat] = useState(null);
    const [startLon, setStartLon] = useState(null);
    const [endLat, setEndLat] = useState(null);
    const [endLon, setEndLon] = useState(null);
    const [route, setRoute] = useState('')
    const addedStartLat = useSelector((state) => state.map.addedLat);
    const addedStartLon = useSelector((state) => state.map.addedLon);
    const addedEndLat = useSelector((state) => state.map.addedLat);
    const addedEndLon = useSelector((state) => state.map.addedLon);


    const user = useSelector(state => state.session.user);
    const authenticate = useSelector((state) => state.session.authenticate);

    useEffect(() => {
        if (user) {
            setStartLat(addedStartLat);
            setStartLon(addedStartLon);
        }
    }, [dispatch, user, startLat,startLon]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(addTrip({ title, startDate, endDate, startLat: addedStartLat, startLon: addedStartLon, endLat: addedEndLat, endLon: addedEndLon, route}))
            .catch (res => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    };

    if (!authenticate) {
        return null;
    }

    return (
        <NewTrip>
            <div className='contact-us'>
                <div className='contact-map'>
                    <JournalEntryMap setLat={setStartLat} setLon={setStartLon} />
                    <div className='contact-form'>
                        <h3>New Trip</h3>
                        <form onSubmit={handleSubmit}>
                            <input id='title'
                                type='title'
                                placeholder='Title'
                                className='contact-form-txt'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            {/* <input id='start-city'
                                type='start-city'
                                placeholder='Starting City'
                                className='contact-form-txt'
                            /> */}
                            <MapAutoComplete />
                            <input id='start-date'
                                type='start-date'
                                placeholder='Start Date'
                                className='contact-form-txt'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                            {/* <input id='end-city'
                                type='end-city'
                                placeholder='Final Destination'
                                className='contact-form-txt'
                            /> */}
                            <DestinationAutoComplete />
                            <input id='end-date'
                                type='end-date'
                                placeholder='End Date (optional)'
                                className='contact-form-txt'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                            <br></br>
                            <button className='contact-form-btn-submit' type="submit" onClick={() => history.push("/dash")} >Start Your Trip!</button>
                        </form>
                    </div>
                </div>
            </div>
        </NewTrip>
    )
}

export default CreateNewTrip;