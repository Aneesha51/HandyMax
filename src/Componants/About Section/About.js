import React from 'react'
import '../About Section/About.css'
import image1 from '../../images/image2.jpg'

function About() {
    return (
        <section className="about" id="about">
            <h1 className="heading">About</h1>
        <div className="container">
            <div className="row">

            <div className="image">
                <img src={image1} className="image" alt=""></img> 
                
                <div className="content">
                <span>about us</span>
                <h3>Handymax: Your Trusted Partner for Every Project, Big or Small!</h3>
                <p>Handymax is dedicated to providing high-quality, reliable, and accessible solutions for homeowners and businesses alike. Our mission is to make home and workplace improvements easier, faster, and more efficient, offering a comprehensive range of services that are tailored to meet the unique needs of each client. From expert repairs and maintenance to customized upgrades, Handymax combines skilled craftsmanship with a commitment to customer satisfaction. Whether you’re tackling a small fix or a major project, our team brings professionalism, attention to detail, and a passion for excellence to every job. Trust Handymax to handle the heavy lifting so you can focus on what truly matters.</p>
                <a href="#contact" className="link-btn">make appointment</a>
            </div>
            </div>

           

            </div>
        </div>
    </section>
    )
}

export default About
