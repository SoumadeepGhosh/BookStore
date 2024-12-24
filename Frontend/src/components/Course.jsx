import React from 'react'
import Cards from "./Cards"
import list from "../list.json"
import { Link } from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-29 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl pt-28">
            Welcome to <span className="text-pink-500">Our Learning Hub!</span>
          </h1>
          <p className="mt-12">
            Discover a curated selection of courses designed to help you grow, 
            learn, and thrive. Whether you're exploring new skills, diving into 
            your passions, or aiming for professional growth, you'll find resources 
            tailored to your journey. Start exploring today and unlock your full potential!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course
