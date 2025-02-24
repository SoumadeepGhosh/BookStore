import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home/home'
import Courses from './courses/Courses'
import Signup from './components/Signup'

function App() {
  return (
    <>
      {/* <Home/>
      <Course/> */}
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </div>
    </>
  )
}

export default App