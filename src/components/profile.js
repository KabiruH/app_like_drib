import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DribbleShots from "./dribbleShots";
import { Route, Routes } from "react-router-dom";

let accessToken = "43179613111cce84d49ba4171c92163f0088573c1e513aef414a4766e41350a3";

function Profile () {
  const [userData, setUserData] = useState(null);
  const fetchUser = () => {
    axios
      .get(`https://api.dribbble.com/v2/user?access_token=` + accessToken)
      .then((res) => {
        const fetchedUser = res.data;
        setUserData(fetchedUser);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderUser = () => {
    if (userData) {
      return (
        <div className="App">
          <div className="card">
            <h1>Hi, here's your dribble</h1>
            <Link to= "/">
              <button className="btn btn-primary">Logout</button>
            </Link>
            <br/>            
            <Link to= "/dribbleShots">
              <button className="btn btn-primary">Your Shots</button>
            </Link>
          <div className="user-details">
            <div className="user-avatar">
              <img src={userData.avatar_url} alt={userData.name} />
            </div>
            <div className="user-info">
              <h2>{userData.name}</h2>
              <p>
                <b>Bio:</b>
                {userData.bio}
              </p>
              <b>location:</b>{userData.location} <br/>
              <b>Username: </b>{userData.login} <br/>
              <b>Username: </b>{userData.email} <br/>

              <button className="btn btn"><a href="mailto:{userData.email}">Send email</a> </button>
              <button className="btn btn"><a href={userData.html_url}>
                
               Your Dribbble Profile
              </a></button>
            </div>
          </div>
          </div>
          </div>
        
      );
    } else {
      return (
        <div className="user-details">
          <p>User details not available...</p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderUser()}
      <Routes>
        <Route path="/dribbleShots" element={<DribbleShots/>}></Route>
      </Routes>
          </div>
  );
}

export default Profile;