import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './utils/contexts/AuthContext';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from "./components/PrivateRoute";
import UserProfilePage from "./pages/UserProfilePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/profile" component={UserProfilePage} />
          <PrivateRoute exact path="/saved-recipes" component={UserProfilePage} />
          <PrivateRoute exact path="/my-recipes" component={UserProfilePage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
