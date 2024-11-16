import React from 'react'
import './Service.css'
import plumber from '../../images/plumber.svg'
import electrical from '../../images/electrical.svg'
import carpentry from '../../images/carpentry.svg'
import painting from '../../images/painting.svg'
import drywall from '../../images/drywall.svg'

const Service = () => {
  return (
    <section className="services" id='services'>

    <h1 className="heading">our services</h1>

    <div className="box-container container">
        
    <div className="box">
        <img src={plumber} alt=""></img>
        <h3>Plumbing Repairs</h3>
        <p>From leaky faucets to clogged drains, our expert plumbers can handle any issue to ensure your home’s plumbing runs smoothly.
        </p>
    </div>

    <div className="box">
        <img src={electrical} alt=""></img>
        <h3>Electrical Services</h3>
        <p>Whether you need new outlets, lighting installations, or troubleshooting electrical issues, we ensure your home is safe and well-lit.
        </p>
    </div>

    <div className="box">
        <img src={carpentry} alt=""></img>
        <h3>Carpentry</h3>
        <p>Our skilled carpenters can create custom shelves, furniture, and repairs to enhance your home’s functionality and aesthetic.
        </p>
    </div>

    <div className="box">
        <img src={painting} alt=""></img>
        <h3>painting</h3>
        <p>Refresh your space with our professional painting services, including interior and exterior options that add beauty and protection.
        </p>
    </div>

    <div className="box">
        <img src={drywall} alt=""></img>
        <h3>Drywall Repair</h3>
        <p>We provide seamless drywall patching and installation, ensuring your walls look perfect and are ready for a new coat of paint.
        </p>
    </div>

    </div>
    </section>
  )
}

export default Service
