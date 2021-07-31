import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecruiterHomepage from "./views/recruiter/RecruiterHomepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./views/dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <RecruiterHomepage />
          </Route>
          <Route exact path="/dang-ky">
            <Signup />
          </Route>
          <Route exact path="/dang-nhap">
            <Signin />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
