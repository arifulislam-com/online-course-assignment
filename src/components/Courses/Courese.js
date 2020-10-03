import React from 'react';
import './Courses.css';

const Courese = (props) => {
    const data = props.data;
    const {coursesName, img, price} = data;
    const handleAddCourses = props.handleAddCourses;
    return (
        <div className="courses">
            <div>
            <h1>{coursesName}</h1>
            <img src={img} alt=""/>
            <h3>Price: ${price}</h3>
            <button onClick={()=>handleAddCourses(data)} className="mainBtn">Enrol now</button>
            </div>
        </div>
    );
};

export default Courese;