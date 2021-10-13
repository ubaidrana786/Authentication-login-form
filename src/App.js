import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AllUser from "./components/AllUser";
import Update from "./components/Update";
import { Login } from "./components/Login";
import Protected from "./components/Protected";
function App(props) {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Switch>
          <Route exact path="/add">
            {/* <Protected comp={AddUser} /> */}
            <AddUser/>
          </Route>
          <Route exact path="/all">
            <AllUser/>
            {/* <Protected comp={AllUser} /> */}
          </Route>
          <Route exact path="/update/:id">
            <Update/>
            {/* <Protected comp={Update} /> */}
          </Route>
         
          <Route exact path="/">

          <Login/>
          
          </Route>
 


          <Route exact path="/home">
           <Home/>
            {/* <Protected comp={Home} /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
