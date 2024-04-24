/*import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react';
import { Link } from 'react-router-dom';
function SavedPages() {
  const savedActivities = JSON.parse(localStorage.getItem('savedActivities')) || [];
  const handleGoogleClick = () => {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(savedActivities.activity)}/images/`;
    window.location.href = googleUrl;
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
      <div id='sec'>
        {savedActivities.map(activity => (
          <div key={activity.key} style={{width:"100%"}}>
            <div id='sec1'>
              <div style={{margin:"20px"}}>
              <h3>{activity.activity}</h3>
              <p>{activity.type}</p>
              <p>{activity.participants}</p>
              {activity.link ? (
                <div>
                  <div>
                    <p id='type'>
                      <Link to={activity.link} id='type'>{activity.link}</Link>
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <p id='type'>
                    <Link onClick={handleGoogleClick} id='type'>How about you google it?</Link>
                  </p>
                </div>
              )}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <button id='remove'>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedPages;*/

import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react';
import { Link } from 'react-router-dom';

function SavedPages() {
  const savedActivities = JSON.parse(localStorage.getItem('savedActivities')) || [];

  const handleGoogleClick = () => {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(savedActivities.activity)}/images/`;
    window.location.href = googleUrl;
  };

  const handleRemove = (activityKey) => {
    const updatedActivities = savedActivities.filter(activity => activity.key !== activityKey);
    localStorage.setItem('savedActivities', JSON.stringify(updatedActivities));
    window.location.reload(); // Refresh the page to reflect the changes
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
      <div id='sec'>
        {savedActivities.map(activity => (
          <div key={activity.key} style={{ width: "100%" }}>
            <div id='sec1'>
              <div style={{ margin: "20px" }}>
                <h3>{activity.activity}</h3>
                <p style={{ color: getRandomColor(), fontSize: "20px" }}>{activity.type}</p>
                <p>{activity.participants}</p>
                {activity.link ? (
                  <div>
                    <div>
                      <p id='type'>
                        <Link to={activity.link} id='type'>{activity.link}</Link>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p id='type'>
                      <Link onClick={handleGoogleClick} id='type'>How about you google it?</Link>
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <button id='remove' onClick={() => handleRemove(activity.key)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div id='lastp'>
        <Link id='click'>Made with ❤️ by <b>Gurijala Nageswara Rao</b></Link>
      </div>
    </div>
  )
}

export default SavedPages;
