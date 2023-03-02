import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

const accessToken = '43179613111cce84d49ba4171c92163f0088573c1e513aef414a4766e41350a3';

// component to fetch and list shots form dribble api

const DribbleShots = () => {
    const [shots, setShots] = useState([]);

    useEffect(() => {
        fetch('https://api.dribbble.com/v2/user/shots?access_token=' + accessToken)
            .then(res => res.json())
            .then(data => {
                setShots(data);
            })
    }, []);

    return (
        
        <div>
       <div className="dribble-shots">
            <h1>These are your shots</h1>
            <div>
            <Link to="/create">
              <button className="btn btn-primary">Add Project</button>
            </Link>
            <br/>
            <Link to="/delete">
              <button className="btn btn-primary">Delete</button>
            </Link>
            <br/>
            <Link to= "/">
              <button className="btn btn-primary">Logout</button>
            </Link>
            <br/>
          </div>
          <div className="photos">
            {shots.map(shot => (
                <div className="shot" key={shot.id}>
                   <br/> <img src={shot.images.hidpi} alt={shot.title}/> <br/>
                </div>
            ))}
                </div>

        </div>
        </div>
        
    )
}

export default DribbleShots