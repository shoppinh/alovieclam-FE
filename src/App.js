import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecruiterHomepage from "./views/recruiter/RecruiterHomepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/tuyen-dung">
            <RecruiterHomepage />
          </Route>
          <Route exact path="/dang-ky">
            <Signin />
          </Route>
          <Route exact path="/dang-nhap">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
