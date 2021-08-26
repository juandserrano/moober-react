import { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Main  from './routes/Main'
import  Navigation  from './routes/Navigation'


export const AppContext = createContext();

const App = () => {

  

  const [origin, setOrigin] = useState({
    address: null,
    latitude: null,
    longitude: null,
  });
  const [destination, setDestination] = useState({
    address: null,
    latitude: null,
    longitude: null,
  });

  return (
    <AppContext.Provider value={{origin, setOrigin, destination, setDestination}}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path={`/navigation`}>
            <Navigation />
          </Route>
          <Route path='*'>
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
    
  );
};

export default App;
