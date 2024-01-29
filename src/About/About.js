import React from 'react';
import './About.css';
import food from '../image/restauranfood.jpg'


function About() {
  return (
    <div className="about">
      <section style={{ float: 'left', width: '50%' }}>
        <h1>Little Lemon</h1>
        <p>Abuja</p>
        <p></p>
      </section>
      <section className="foodPic">
        <img src={food} height="200px" width="200px" alt="Logo of Little lemon"/>
      </section>
    </div>
  );
}

export default About;
