import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./homepage";
import Profile from "./profile";
import DribbleShots from "./dribbleShots";
import LoginForm from "./login";


function Navbar() {

    return (
        <div>
            <card className="nav">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <h1> <Link class="nav-link text-light bg-dark" aria-current="page" to="/">NewDrib</Link></h1>
                    </li>

                </ul>
            </card>
            
    <Routes>
    <Route path="/" element= {<Homepage/>}></Route>
      <Route path="/login" element= {<LoginForm/>}></Route>
      <Route path="/profile/*" element= {<Profile/>}></Route>
      <Route path="/dribbleShots" element= {<DribbleShots/>}></Route>
     </Routes>
            
        </div>
    )
}

export default Navbar