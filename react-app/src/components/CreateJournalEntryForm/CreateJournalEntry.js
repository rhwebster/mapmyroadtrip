import React from 'react'
import styled from 'styled-components';
import RoadTripMap from '../Map/RoadTripMap'

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
.contact-form-btn {
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
}
`

export default function CreateJournalEntry() {
    return (
        <JournalEntry>
        <div>
            <div className='contact-us'>
                <div className='contact-map'>
                    <RoadTripMap className='map'/>
                <div className='contact-form'>
                    <h3>New entry</h3>
                    <form>
                        <input type='text' placeholder='Title' className='contact-form-txt'/>
                        <input type='text' placeholder='Photos?' className='contact-form-txt'/>
                        <textarea placeholder='Dear Journal' className='contact-form-txtarea'></textarea>
                        <input type='submit' name='Submit' className='contact-form-btn'/>
                    </form>
               </div>
            </div>
            </div>
        </div>
        </JournalEntry>
    )
}
