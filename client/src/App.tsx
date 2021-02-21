import React from 'react';
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './utils/contexts/AuthContext';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from "./components/PrivateRoute";
import NonUserRoute from "./components/NonUserRoute";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import SavedRecipesPage from "./pages/SavedRecipesPage";
import MyRecipesPage from './pages/MyRecipesPage';
import GuidePage from "./pages/GuidePage";
import "./app.css";

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/guide" component={GuidePage} />
          <NonUserRoute path="/signup" component={SignupPage} />
          <NonUserRoute path="/login" component={LoginPage} />
          <NonUserRoute path="/forgot-password" component={ForgotPasswordPage} />
          <PrivateRoute exact path="/saved-recipes" component={SavedRecipesPage} />
          <PrivateRoute exact path="/my-recipes" component={MyRecipesPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
