import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import CreateRecipe from './components/newRecipe/newRecipe'
import LogoutPage from './components/logout/LogoutPage'
import RecipeList from './components/recipeList/recipeList'
import HomePage from './components/home/HomePage'
import './App.css'
import TopBar from './components/layout/TopBar'




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomePage} />   
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/list" component={RecipeList} />
            <Route exact path="/newRecipe" component={CreateRecipe} />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
