import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Signin = React.lazy(() => import("./components/Signin"));
const RecruiterHomepage = React.lazy(() =>
  import("./views/recruiter/RecruiterHomepage")
);
const Signup = React.lazy(() => import("./components/Signup"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Account = React.lazy(() => import("./views/account/Account"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/tuyen-dung">
              <RecruiterHomepage />
            </Route>
            <Route exact path="/tuyen-dung/dang-ky">
              <Signup />
            </Route>
            <Route exact path="/tuyen-dung/dang-nhap">
              <Signin />
            </Route>
            <Route exact path="/tuyen-dung/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/tuyen-dung/tai-khoan">
              <Account />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
