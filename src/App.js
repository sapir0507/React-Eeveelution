import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import './css/App.css';
import PopupWindow from "./PopupWindow";
import Login from "./Login";
import Eeveelution from "./Eeveelution";



function App() {
 
  return (

    // <Router>
      <div className="App">   
          <HashRouter>  
            <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                  <Home/>
              </Route> 
              <Route exact path="/react-card-game/">
                  <Home/>
              </Route>  
              <Route exact path="/MemoryGame">
                  <PopupWindow/>
              </Route>    
              <Route exact path="/Eeveelution">
                <Eeveelution/>  
              </Route>   
              <Route exact path="/Login">
                <Login/>  
              </Route>   
              <Route path="*">
                <NotFound/>
              </Route>   
            </Switch> 
          </div> 
          </HashRouter>
      </div>
    // </Router>
  );
}

export default App;
