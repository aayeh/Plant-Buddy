import React, {useContext} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {PlantContext} from "../app.js"
import { Route, Link } from 'react-router-dom';
import PlantInfo from "../components/plantInfo.js"


const Profile = () => {
  const {plants} = useContext(PlantContext)
  const { user } = useAuth0();
  const { username, name, picture, email } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{username}</h2>
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <hr/>
      <h2 className = "search">
      Your Plants
      </h2>
      <div className="row">
        <pre className="search">
          {plants.map((val,key)=>{
            <Route path={'/search'+val} render={() => <PlantInfo/>}/>
              return (

                <Link to= {'/search/'+val}>
                <button className="button">
                {val}
                </button>
                </Link>
              )
          })}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
