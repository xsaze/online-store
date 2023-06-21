import React from "react";
import image from '../images/home.jpg';

const Home = () => {
    return(
        <div className='content'>
            <h3>Welcome to the world of fashion!</h3>
            <img className='home-img' src={image} width='700px'></img>
        </div>
    )
}

export default Home;