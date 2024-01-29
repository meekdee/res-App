import React from 'react';
import './About.css';
import food from '../image/restauranfood.jpg'


function About() {
  return (
    <div className="about">
      <section style={{ float: 'left', width: '50%' }}>
        <h1>Little Lemon</h1>
        <p>Abuja</p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>
      <section className="foodPic">
        <img src={food} height="300px" width="250px" alt="Logo of Little lemon"/>
      </section>
      <div className="button">
        
      </div>
    </div>
  );
}

export default About;
