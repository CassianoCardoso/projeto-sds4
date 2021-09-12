import Home from 'pages/Home';
import Dashboard from 'pages/DashBoard';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import react from 'react';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />  
        </Route>
        <Route path="/dashboard">
          <Dashboard />  
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
