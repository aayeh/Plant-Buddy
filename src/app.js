import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar, Footer, Loading, PlantInfo } from './components';
import { Home, Profile, Search} from './views';
import ProtectedRoute from './auth/protected-route';

import './app.css';

export const PlantContext = React.createContext({
  plants: [],
  addPlant: () => {}
});
const App = () => {
  const [plants, addPlant] = useState([])
  const value = {plants, addNewPlant}
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

function addNewPlant(plantName){
  addPlant([...plants,plantName])
}

  return (
    <div id="app" className="d-flex flex-column h-100">
      <PlantContext.Provider value={value}>
        <NavBar />
        <div className="container flex-grow-1">
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/search" exact component={Search} />
            <Route path="/search/:name" component={PlantInfo}/>
          </Switch>
        </div>
      </PlantContext.Provider>
    </div>
  );
};

export default App;
