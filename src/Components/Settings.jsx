/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Slider from '@mui/material/Slider';



function Settings() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleReset = () => {
        setValue(0);
    };
    return (
        <div id='container'>
            <nav>
                <Link to={"/"} id='home'>Getting Bored?</Link>
                <div>
                    <Link to={"/settings"} id='icon'><SettingsIcon style={{ height: "25px", width: "25px", color: "black" }} /></Link>
                    <Link to={"/savedPages"} id='icon'><BookmarkIcon style={{ height: "25px", width: "25px", color: "black" }} /></Link>
                </div>
            </nav>
            <h4>Accessibility <span id="accessibility-value">{value.toFixed(1)}</span> <button id="reset-accessibility"
                style={{ marginLeft: "10px" }} onClick={handleReset}>Reset</button>
            </h4>
            <div style={{ width: "95%", margin: "15px" }}>
                <Slider
                    value={value}
                    min={0}
                    max={1}
                    step={0.1}
                    onChange={handleChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    sx={{
                        '& .MuiSlider-rail': {
                            backgroundColor: "#ddd",
                            border: "none",
                            borderRadius: "3px",
                            cursor: "pointer"
                        },
                        '& .MuiSlider-track': {
                            display: 'none',
                        },
                    }}
                    style={{ height: "15px" }}
                />
            </div>
            <h4>Type of Activity</h4>
            <div id="typ">
                <button className="type-button" id="all" style={{backgroundColor: "rgb(149, 165, 166)",color:"white"}}>All</button>
                <button className="type-button" id="education">Education</button>
                <button className="type-button" id="recreational">Recreational</button>
                <button className="type-button" id="social">Social</button>
                <button className="type-button" id="diy">DIY</button>
                <button className="type-button" id="charity">Charity</button>
                <button className="type-button" id="cooking">Cooking</button>
                <button className="type-button" id="relaxation">Relaxation</button>
                <button className="type-button" id="music">Music</button>
                <button className="type-button" id="busywork">Busywork</button>
            </div>

            <h4>Number of Participants</h4>
            <div id="participants">
                <button className="participants-button" id="-1" style={{ backgroundColor: "#ddd", color: "#666" }}>Random</button>
                <button className="participants-button" id="1">Alone</button>
                <button className="participants-button" id="2">2 people</button>
                <button className="participants-button" id="3">3 people</button>
                <button className="participants-button" id="4">4 people</button>
            </div>

            <div>
                <button id="restore-defaults" style={{width:"97%"}}>Restore Defaults</button>
            </div>
            <div id='lastp'>
                <Link id='click'>Made with ❤️ by <b>Gurijala Nageswara Rao</b></Link>
            </div>
        </div>
    )
}

export default Settings;*/

/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Slider from '@mui/material/Slider';

function Settings() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleReset = () => {
        setValue(0);
    };

    return (
        <div id='container'>
            <nav>
                <Link to={"/"} id='home'>Getting Bored?</Link>
                <div>
                    <Link to={"/settings"} id='icon'><SettingsIcon style={{ height: "25px", width: "25px", color: "black" }} /></Link>
                    <Link to={"/savedPages"} id='icon'><BookmarkIcon style={{ height: "25px", width: "25px", color: "black" }} /></Link>
                </div>
            </nav>
            <h4>Accessibility <span id="accessibility-value">{value.toFixed(1)}</span> <button id="reset-accessibility"
                style={{ marginLeft: "10px" }} onClick={handleReset}>Reset</button>
            </h4>
            <div style={{ width: "95%", margin: "15px" }}>
                <Slider
                    value={value}
                    min={0}
                    max={1}
                    step={0.1}
                    onChange={handleChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    sx={{
                        '& .MuiSlider-rail': {
                            backgroundColor: "#ddd",
                            border: "none",
                            borderRadius: "3px",
                            cursor: "pointer"
                        },
                        '& .MuiSlider-track': {
                            display: 'none',
                        },
                    }}
                    style={{ height: "15px" }}
                />
            </div>
            <h4>Type of Activity</h4>
            <div id="typ">
                <button className="type-button" id="all"style={{backgroundColor: "rgb(149, 165, 166)",color:"white"}}>All</button>
                <button className="type-button" id="education" >Education</button>
                <button className="type-button" id="recreational">Recreational</button>
                <button className="type-button" id="social">Social</button>
                <button className="type-button" id="diy">DIY</button>
                <button className="type-button" id="charity">Charity</button>
                <button className="type-button" id="cooking" >Cooking</button>
                <button className="type-button" id="relaxation">Relaxation</button>
                <button className="type-button" id="music">Music</button>
                <button className="type-button" id="busywork" >Busywork</button>
            </div>

            <h4>Number of Participants</h4>
            <div id="participants">
                <button className="participants-button" id="-1" style={{ backgroundColor: "#ddd", color: '#666' }}>Random</button>
                <button className="participants-button" id="1">Alone</button>
                <button className="participants-button" id="2">2 people</button>
                <button className="participants-button" id="3">3 people</button>
                <button className="participants-button" id="4">4 people</button>
            </div>

            <div>
                <button id="restore-defaults" style={{ width: "97%" }}>Restore Defaults</button>
            </div>
            <div id='lastp'>
                <Link id='click'>Made with ❤️ by <b>Gurijala Nageswara Rao</b></Link>
            </div>
        </div>
    )
}

export default Settings;*/


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Slider from '@mui/material/Slider';

function Settings() {
    const [value, setValue] = useState(0);
    const [selectedActivity, setSelectedActivity] = useState('all');
    const [selectedParticipants, setSelectedParticipants] = useState('-1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleReset = () => {
        setValue(0);
    };

    const handleActivityClick = (activity) => {
        setSelectedActivity(activity);
    };

    const handleParticipantsClick = (participants) => {
        setSelectedParticipants(participants);
    };

    const getActivityButtonStyle = (activity) => {
        return selectedActivity === activity ? { backgroundColor: 'rgb(149, 165, 166)', color: 'white' } : {};
    };
    const getParticipantsButtonStyle = (participants) => {
        return selectedParticipants === participants ? { backgroundColor: '#ddd', color: '#666' } : {};
    };
    return (
        <div id='container'>
            <nav>
                <Link to={"/"} id='home'>Getting Bored?</Link>
                <div>
                    <Link to={"/settings"} id='icon'><SettingsIcon style={{ height: "25px", width: "25px", color: "black" }} /></Link>
                    <Link to={"/savedPages"} id='icon'><BookmarkIcon style={{ height: "25px", width: "25px", color: "black" }} /></Link>
                </div>
            </nav>
            <h4>Accessibility <span id="accessibility-value">{value.toFixed(1)}</span> <button id="reset-accessibility"
                style={{ marginLeft: "10px" }} onClick={handleReset}>Reset</button>
            </h4>
            <div style={{ width: "95%", margin: "15px" }}>
                <Slider
                    value={value}
                    min={0}
                    max={1}
                    step={0.1}
                    onChange={handleChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    sx={{
                        '& .MuiSlider-rail': {
                            backgroundColor: "#ddd",
                            border: "none",
                            borderRadius: "3px",
                            cursor: "pointer"
                        },
                        '& .MuiSlider-track': {
                            display: 'none',
                        },
                    }}
                    style={{ height: "15px" }}
                />
            </div>
            <h4>Type of Activity</h4>
            <div id="typ">
                <button className="type-button" id="all" style={getActivityButtonStyle('all')} onClick={() => handleActivityClick('all')}>All</button>
                <button className="type-button" id="education" style={getActivityButtonStyle('education')} onClick={() => handleActivityClick('education')}>Education</button>
                <button className="type-button" id="recreational" style={getActivityButtonStyle('recreational')} onClick={() => handleActivityClick('recreational')}>Recreational</button>
                <button className="type-button" id="social" style={getActivityButtonStyle('social')} onClick={() => handleActivityClick('social')}>Social</button>
                <button className="type-button" id="diy" style={getActivityButtonStyle('diy')} onClick={() => handleActivityClick('diy')}>DIY</button>
                <button className="type-button" id="charity" style={getActivityButtonStyle('charity')} onClick={() => handleActivityClick('charity')}>Charity</button>
                <button className="type-button" id="cooking" style={getActivityButtonStyle('cooking')} onClick={() => handleActivityClick('cooking')}>Cooking</button>
                <button className="type-button" id="relaxation" style={getActivityButtonStyle('relaxation')} onClick={() => handleActivityClick('relaxation')}>Relaxation</button>
                <button className="type-button" id="music" style={getActivityButtonStyle('music')} onClick={() => handleActivityClick('music')}>Music</button>
                <button className="type-button" id="busywork" style={getActivityButtonStyle('busywork')} onClick={() => handleActivityClick('busywork')}>Busywork</button>
            </div>

            <h4>Number of Participants</h4>
            <div id="participants">
                <button className="participants-button" id="-1" style={getParticipantsButtonStyle('-1')} onClick={() => handleParticipantsClick('-1')}>Random</button>
                <button className="participants-button" id="1" style={getParticipantsButtonStyle('1')} onClick={() => handleParticipantsClick('1')}>Alone</button>
                <button className="participants-button" id="2" style={getParticipantsButtonStyle('2')} onClick={() => handleParticipantsClick('2')}>2 people</button>
                <button className="participants-button" id="3" style={getParticipantsButtonStyle('3')} onClick={() => handleParticipantsClick('3')}>3 people</button>
                <button className="participants-button" id="4" style={getParticipantsButtonStyle('4')} onClick={() => handleParticipantsClick('4')}>4 people</button>
            </div>

            <div>
                <button id="restore-defaults" style={{ width: "97%" }}onClick={()=>{window.location.reload();}}>Restore Defaults</button>
            </div>
            <div id='lastp'>
                <Link id='click'>Made with ❤️ by <b>Gurijala Nageswara Rao</b></Link>
            </div>
        </div>
    )
}

export default Settings;


