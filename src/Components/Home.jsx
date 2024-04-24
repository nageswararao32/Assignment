import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomeStyles.css';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
    const [loading, setLoading] = useState(true);
    const [saved, setSaved] = useState(false);
    const activityData = useSelector(state => state.activityData);
    const colors = useSelector(state => state.colors);
    const selectedColorIndex = useSelector(state => state.selectedColorIndex);
    const dispatch = useDispatch();

    const fetchActivity = useCallback(() => {
        axios.get('http://www.boredapi.com/api/activity/')
            .then(response => {
                const key = Math.random().toString(36).substring(7);
                dispatch({ type: 'SET_ACTIVITY_DATA', payload: { ...response.data, key } });
                const newColorIndex = Math.floor(Math.random() * colors.length);
                dispatch({ type: 'SET_SELECTED_COLOR_INDEX', payload: newColorIndex });
                setSaved(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [dispatch, colors.length]);

    useEffect(() => {
        fetchActivity();
    }, [fetchActivity]);

    useEffect(() => {
        const savedActivities = JSON.parse(localStorage.getItem('savedActivities')) || [];
        setSaved(savedActivities.includes(activityData?.key));
        setLoading(false);
    }, [activityData]);

    const handleGoogleClick = () => {
        const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(activityData.activity)}/images/`;
        window.location.href = googleUrl;
    };

    const handleNewClick = () => {
        fetchActivity();
    };

    const handleSaveClick = () => {
        if (!saved) {
            const savedActivities = JSON.parse(localStorage.getItem('savedActivities')) || [];
            localStorage.setItem('savedActivities', JSON.stringify([...savedActivities, activityData]));
            setSaved(true);
        }
    };
    console.log(activityData);
    return (
        <div id='container'>
            <nav>
                <Link to={"/"} id='home'>Getting Bored?</Link>
                <div>
                    <Link to={"/settings"} id='icon'><SettingsIcon style={{ height: "25px", width: "25px", color: "black" }} /></Link>
                    <Link to={"/savedPages"} id='icon'><BookmarkIcon style={{ height: "25px", width: "25px", color: "black" }} /></Link>
                </div>
            </nav>
            <div id='section1'>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    activityData && (
                        <div id='card'>
                            <h2>{activityData.activity}</h2>
                            <p style={{ color: colors[selectedColorIndex], fontSize: "20px" }}>{activityData.type}</p>
                            <p id='type'>{activityData.participants}</p>
                            {activityData.link ? (
                                <div>
                                    <p id='type'>
                                        <Link to={activityData.link} id='type'>{activityData.link}</Link>
                                    </p>
                                </div>
                            ) : (
                                <p id='type'>
                                    <Link onClick={handleGoogleClick} id='type'>How about you google it?</Link>
                                </p>
                            )}
                        </div>
                    )
                )}
            </div>
            <div id='section2'>
                <div id="btns">
                    <button style={{ backgroundColor: colors[selectedColorIndex] }} onClick={handleSaveClick} id='save'><p id="btn">{saved ? 'Saved' : 'Save'}</p></button>
                    <button style={{ backgroundColor: colors[selectedColorIndex] }} onClick={handleNewClick} id='new'><p id='btn'>New</p></button>
                </div>
                <div id='para'>
                    <p>* Try configuring your settings to get what you want!</p>
                    <p>* Number in the card indicates the number of participants required.</p>
                    <p>* Click on the link to know more about the activity.</p>
                </div>
                <div>
                    <Link to={"https://www.boredapi.com/contributing"} style={{ color: "gray" }}>Interested in contributing an activity to this database? Click here!</Link>
                </div>
                <div id='lastp'>
                    <Link id='click'>Made with ❤️ by <b>Gurijala Nageswara Rao</b></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
