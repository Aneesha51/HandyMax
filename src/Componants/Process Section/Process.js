import React from 'react'
import './Process.css'
import process1 from '../../images/process1.png'
import process2 from '../../images/process2.png'
import process3 from '../../images/process3.jpg'
import process4 from '../../images/process4.avif'

const Process = () => {
  return (
    <section className="process">

    <h1 className="heading">work process</h1>

    <div className="box-container container">

    <div className="box">
           <img src={process1} alt=""></img>
           <h3>Initial Consultation & Assessment</h3>
           <p>We start by understanding your needs. During our initial consultation, we'll discuss your project goals, budget, and timeline. Our team will assess the scope of the work required, ensuring we tailor our approach to meet your specific requirements.</p>
       </div>

       <div className="box">
           <img src={process2} alt=""></img>
           <h3>Approval & Scheduling</h3>
           <p>After reviewing the plan together, we'll make any necessary adjustments to ensure your satisfaction. Once approved, we'll schedule the work at a time that’s convenient for you, minimizing any disruptions to your daily routine.</p>
       </div>

       <div className="box">
           <img src={process3} alt=""></img>
           <h3>Skilled & Efficient Execution</h3>
           <p>Our experienced team arrives on time and ready to work. We follow the highest standards of craftsmanship, ensuring that each task is completed with precision and attention to detail. We’ll keep you updated throughout the process so that you’re never out of the loop.</p>
       </div>

       <div className="box">
           <img src={process4} alt=""></img>
           <h3>Quality check and follow up </h3>
           <p>Before we consider the job done, we perform a thorough quality check to make sure everything meets our high standards — and yours. Once the project is complete, we’ll walk through the finished work with you to confirm your satisfaction. If you have any questions or need further assistance after the project, we’re just a call away.</p>
       </div>
    </div>
    </section>
  )
}

export default Process
