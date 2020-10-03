import React from 'react';
import './Container.css';
import fakeData from '../../fakeData/user.json'
import { useState } from 'react';
import Courese from '../Courses/Courese';

const Container = () => {
    const [data, setData] = useState(fakeData);
    let [cart, setCart] = useState([]);
    const handleAddCourses = (courses) =>{
        const newCart = [...cart, courses];
        setCart(newCart)
    }
    const totalPrice = cart.reduce((total, cart)=> total + cart.price, 0);
    return (
        <div className="Container">
            <div className="coureseComponent">
                {
                    data.map(data=><Courese
                        data = {data}
                        handleAddCourses = {handleAddCourses}
                        ></Courese>)
                }
            </div>
            <div className="cart">
                <h2 className="text-primary">Order Summary</h2>
                <br></br>
                <h3>Toatl Courses: {cart.length}</h3>
                <h4>Total Price: {totalPrice}</h4>
                <button className="btn btn-primary">Continue Course</button>
            </div>
        </div>
    );
};

export default Container;