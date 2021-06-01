import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Search from './RecipeSearch'
import Random from './WineSearch'
import Contact from './Contact'
import './index.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Nav/>
          <Switch>
            <Route path="/" exact component ={Home}/>
            <Route path="/recipe/search" component ={Search}/>
            <Route path="/wine/search" component ={Random}/>
            <Route path="/Contact" component ={Contact}/>
          </Switch>
      </Router>
  )
}

export default App;



