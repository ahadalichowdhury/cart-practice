import React, { useState } from 'react'
import Course from '../course/Course'
import courseData from '../../fakeData/courseData';
import Cart from '../cart/Cart';
import "./shop.css"


function Shop() {
    const [course, setCourse] = useState(courseData);
    const [cart, setCart] = useState([]);

    const handleButton=(course)=> {
        const newCart = [...cart, course];
        setCart(newCart);

    }
    
    return (
        <div className="shop">
            <div className="course-container">
            {
                course.map((course)=>(
                    <Course course={course} handleButton={handleButton}></Course>
    ))
                
             
            }
            

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
            
        </div>
    )
}

export default Shop
