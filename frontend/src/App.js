import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'
import Essays from './views/essays'
import Theses from './views/theses'
import Research_papers from './views/research_papers'
import Team from './views/team';

function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />
          <Route component={Essays} path="/essays" />
          <Route component={Research_papers} path="/research_papers" />
          <Route component={ Theses } path="/theses" />
          <Route component={ Team } path="/team" />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App