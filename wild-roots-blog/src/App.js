import React from 'react';
import Navigation from './components/navigation';
// import Axios from 'axios';
import Home from './components/Home';
import Gardening from './components/Gardening';
import Cooking from './components/Cooking';
import LocalBusiness from './components/LocalBusiness';
import Scripture from './components/Scripture';
import Contact from './components/Contact';
import Recipie from './components/Recipie';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Recipie from './components/Recipie';


// import UserContext from './context/UserContext';

function App() {

  // const UserContext = UserContext();

  // //updates currently logged in users data.
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined
  // });

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem('auth-token');
  //     if (token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenRes = await Axios.post('http://localhost:3001/users/tokenIsValid', null, {headers: { 'x-auth-token': token }});

  //     if (tokenRes.data) {
  //       const userRes = await Axios.get('http://localhost:3001/users', {headers: { 'x-auth-token': token }});
  //       setUserData({
  //         token,
  //         user: userRes.data,
  //       })
  //     }
  //   }

  //   checkLoggedIn();
  // }, []);
  
  return (
    //BEM
    <Router>
    {/* <UserContext.Provider value={{userData, setUserData}}> */}
    <Router>
      <div className="app">
        <div>
          <Navigation />
        </div>
        <div className="app__body">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/gardening">
              <Gardening />
            </Route>
            <Route path="/cooking">
              <Cooking />
            </Route>
            <Route path="/recipies">
              <Recipie />
            </Route>
            <Route path="/local-business">
              <LocalBusiness />
            </Route>
            <Route path="/scripture">
              <Scripture />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    {/* </UserContext.Provider> */}
    </Router>
    
        );
}

export default App;

