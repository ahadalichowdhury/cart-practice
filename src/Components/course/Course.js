import React from 'react'
import "./course.css"

const Course = (props)=>{
    const {name,  instractor, price, image}= props.course
    return (
        <div className="course">
           <div>
                <img src={image} />
           </div>
            <div>
                <h2>Name: {name}</h2>
                <h3>Instractor: {instractor}</h3>
                <h3>price: {price}</h3>
                <button onClick={()=> (props.handleButton(props.course))}>Enroll Now</button>
            </div>
           
            
        </div>

    );
}
export default Course
