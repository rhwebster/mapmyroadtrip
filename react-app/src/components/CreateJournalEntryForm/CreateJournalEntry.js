import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setPic } from "../../store/session";
import styled from 'styled-components';
import JournalEntryMap from '../JournalEntryMap/JournalEntryMap';
import { useParams, useHistory } from 'react-router-dom';
import { addEntry } from '../../store/entry'
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/index'
import Profile from '../Trips/Profile'

const JournalEntry = styled.div`
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

function CreateJournalEntry() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { entryId } = useParams();
    // console.log('ENTRY:',entryId)

    const [title, setTitle] = useState("");
    const [profPic, setProfPic] = useState({'name': null});
    const [entry, setEntry] = useState("");
    const [imgPreview, setImagePreview] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const user = useSelector(state => state.session.user);
    const authenticate = useSelector((state) => state.session.authenticate);
    const addedLat = useSelector((state) => state.map.addedLat);
    const addedLon = useSelector((state) => state.map.addedLon);

    useEffect(() => {
        if (user) {
            setLat(addedLat);
            setLon(addedLon);
        }
    }, [dispatch, user, lat, lon]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setPic( profPic ))
            .then(file => {
                dispatch(addEntry({title, tripId: 1, profPic: file.output, entry, lat: addedLat, lon: addedLon }))
            }).catch(error => {
                console.log('😱 Error: ', error)
            });

        setProfPic(null);
    };

    const updateProfPic = (e) => {
        const file = e.target.files[0];
        if (file) setProfPic(file);

        const fileReader = new FileReader();
        if (file) {
            fileReader.readAsDataURL(file);
        }
        fileReader.onloadend = () => {
            setImagePreview(fileReader.result);
        }
    };

    if (!authenticate) {
        return null;
    }

    return (
        <div className='wrapper'>
        <Nav  />
        <main className="main">
        <JournalEntry>
            <div className='contact-us'>
                <div className='contact-map'>
                    <JournalEntryMap setLat={setLat} setLon={setLon}/>
                    {console.log('createJournalEntry:', addedLat, addedLon)}
                <div className='contact-form'>
                    <h3>New entry</h3>
                    <form onSubmit={handleSubmit}>
                        <input id='title'
                            type='title'
                            placeholder='Title'
                            className='contact-form-txt'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <textarea id='entry'
                            placeholder='Dear Journal'
                            className='contact-form-txtarea'
                            value={entry}
                            onChange={(e) => setEntry(e.target.value)}
                            required>
                        </textarea>
                        <img className="imgPreview" src={imgPreview} alt=''></img>
                        <label  className="custom-file-upload">CLICK HERE TO UPLOAD A PHOTO
                            <input onChange={updateProfPic} type="file" name="user_file" />
                        </label>
                        <br></br>
                        <button  className='contact-form-btn-upload' type="submit" >Upload</button>
                        <button  className='contact-form-btn-submit' type="submit" onClick={() => history.push("/dash")} >Submit Your Entry</button>
                    </form>
                </div>
                </div>
            </div>
        </JournalEntry>
        </main>
        <Profile  />
    </div>
    )
}

export default CreateJournalEntry;
