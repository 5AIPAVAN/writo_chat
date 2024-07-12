import React from 'react'
import './Courses2.css'
import { Link } from 'react-router-dom';

export default function Courses2() {
    return (
        <div className="outercourse2 my-1">
            <div className="innercourse2">

            <Link to ='/class-11'>
            <div className="outertype2">
                <div className="type2">
                    <h4> Class 11</h4>
                    <h5> JEE/NEET Exam</h5>
                </div>
                </div>
                </Link>

                <Link to ='/class-12'>
                <div className="outertype2">
                <div className="type2">
                    <h4> Class 12</h4>
                    <h5> JEE/NEET Exam</h5>
                </div>
                </div>
                </Link>
         
            </div>
        </div>
    )
}