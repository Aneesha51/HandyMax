import React from 'react'
import './Review.css'
import review1 from '../../images/review1.jpg'
import review2 from '../../images/review2.jpg'
import review3 from '../../images/review3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'


const Review = () => {
  return (
    <section className="reviews" id="reviews">

    <h1 className="heading">satisfied clients</h1>

    <div className="box-container container">
       <div className="box">
       <img src={review1} alt=""></img>
       <p>Handymax was an absolute lifesaver! We needed urgent plumbing repairs, and their team responded quickly, fitting us in the next day. They were professional, friendly, and finished the job with precision. The quality of work exceeded our expectations, and they left everything spotless. I highly recommend Handymax to anyone in need of reliable, high-quality service!</p>
       <div className="stars">
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStarHalf} />
       </div>
       <h3>Sarah T</h3>
       <span>satified client</span>
   </div>

   <div className="box">
       <img src={review2} alt=""></img>
       <p>This was my first time working with Handymax, and I’m so glad I did. They helped with several small repairs around my home, and everything was handled with care and professionalism. The team arrived on time, communicated clearly, and completed the job efficiently. They even followed up afterward to make sure everything was working well. I highly recommend Handymax for any home improvement needs!</p>
       <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
       </div>
       <h3>Emma R</h3>
       <span>satified client</span>
   </div>

   <div className="box">
       <img src={review3} alt=""></img>
       <p>We hired Handymax for a full kitchen renovation, and the entire process was seamless from start to finish. They provided a clear timeline and kept us updated every step of the way. Their attention to detail is fantastic, and they took the time to make sure we were satisfied with every part of the project. Our kitchen looks incredible — we couldn't be happier!</p>
       <div className="stars">
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStarHalf} />
       </div>
       <h3>Mike L</h3>
       <span>satified client</span>
   </div>
    </div>
    </section>
  )
}

export default Review