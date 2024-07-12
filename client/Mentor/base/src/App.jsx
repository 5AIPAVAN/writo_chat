import React from 'react'
import './App.css'

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Components/Home_men'
import Blogs from './Components/Blogs'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blogs' element={<Blogs/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default App
