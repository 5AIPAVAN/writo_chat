import React from 'react'
import './Courses.css';
import { Link } from 'react-router-dom';

export default function Courses1() {
  return (
    <div className = "outercourse my-3">
        <div className="flex justify-center items-center mt-10">
         <p className='text-center text-[#ED7E0A] text-2xl item5'>- - - -  What we offer  - - - </p>
        </div>
        <h2 className="coursetitle item2 mt-3"> Our Courses</h2>
        <div className="innercourse">
         <div className="rownum1 my-5 mt-5">
          <Link to ='/class-6beforepay'>
            <p className="classnum">Class 6</p>
            </Link>
            <Link to ='/class-7beforepay'>
            <p className="classnum">Class 7</p>
            </Link>
            <Link to ='/class-8beforepay'>
            <p className="classnum">Class 8</p>
            </Link>
            <Link to ='/class-9beforepay'>
            <p className="classnum">Class 9</p>
            </Link>
            <Link to ='/class-10beforepay'>
            <p className="classnum">Class 10</p>
            </Link>
            
         </div>


    


      </div>
    </div>
  )
}