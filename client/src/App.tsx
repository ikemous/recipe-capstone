import React, { useEffect } from 'react';
import './App.css';
import { getUserRecipes } from "./utils/API";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider, useAuth } from './utils/contexts/AuthContext';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from "./components/PrivateRoute";
import NonUserRoute from "./components/NonUserRoute";
import UserProfilePage from "./pages/UserProfilePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SearchPage from "./pages/SearchPage";
import SavedRecipesPage from "./pages/SavedRecipesPage";
import MyRecipesPage from './pages/MyRecipesPage';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/search" component={SearchPage} />
          <NonUserRoute path="/signup" component={SignupPage} />
          <NonUserRoute path="/login" component={LoginPage} />
          <NonUserRoute path="/forgot-password" component={ForgotPasswordPage} />
          {/* <PrivateRoute exact path="/profile" component={UserProfilePage} /> */}
          <PrivateRoute exact path="/saved-recipes" component={SavedRecipesPage} />
          <PrivateRoute exact path="/my-recipes" component={MyRecipesPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
