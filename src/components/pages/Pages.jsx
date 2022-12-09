import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import Alumini from "../alumini/Alumini"
import Resources from "../resources/Resources"
import Apply from "../apply/Apply"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/apply' component={Apply} />
          <Route exact path='/alumini' component={Alumini } />
          <Route exact path='/resources' component={Resources} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
