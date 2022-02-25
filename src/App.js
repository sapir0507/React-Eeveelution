import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import './css/App.css';
import PopupWindow from "./PopupWindow";
import Login from "./Login";
import Eeveelution from "./Eeveelution";




function App() {
 
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="react-card-game/">
                  <Home/>
              </Route>  
              <Route exact path="react-card-game/homepage">
                  <Home/>
              </Route>  
              <Route exact path="react-card-game/MemoryGame">
                  <PopupWindow/>
              </Route>    
              <Route exact path="react-card-game/Eeveelution">
                <Eeveelution/>  
              </Route>   
              <Route exact path="react-card-game/Login">
                <Login/>  
              </Route>   
              <Route path="*">
                <NotFound/>
              </Route>   
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
