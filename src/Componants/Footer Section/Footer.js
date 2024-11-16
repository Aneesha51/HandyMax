import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faLocationDot, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <section className="footer">

     <div className="box-container container">

     <div className="box">
        <i className="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
        <h3>phone number</h3>
        <p>+27 5863962545</p>
        <p>(011) 259 5236</p>
     </div>

     <div className="box">
        <i className="fas fa-map-marker-alt"><FontAwesomeIcon icon={faLocationDot} /></i>
        <h3>address</h3>
        <p>Johannesburg, South Africa</p>
     </div>

     <div className="box">
        <i className="fas fa-clock"><FontAwesomeIcon icon={faClock} /></i>
        <h3>working hours</h3>
        <p>07:00am to 10:00pm</p>
     </div>

     <div className="box">
        <i className="fas fa-phone"><FontAwesomeIcon icon={faEnvelope} /></i>
        <h3>email address</h3>
        <p>handymax05@gamil.com</p>
        <p>handymax03@gmail.com</p>
     </div>
     </div>

     <div className="credit">© copyright @ 2024 by <span>Aneesha Rangan</span></div>
     </section>
  )
}

export default Footer