import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="container">
            <div className="main">
                <div className="content">
                    <h3>Welcome to <span>HandyMax!</span></h3>
                    <p>We specialize in a wide range of home repair and maintenance services, from plumbing and electrical work to carpentry and painting. Our skilled team is dedicated to providing reliable, efficient, and high-quality solutions for all your home improvement needs. Whether it’s a small fix or a major renovation, we’re here to help you keep your home in top shape. Get in touch today for a free estimate!</p>
                    <a href="#contact" className="link-btn">make appointment</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
