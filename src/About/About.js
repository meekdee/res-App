import React from 'react';
import './About.css';


function About() {
  return (
    <div className="about">
      <section>
        <h1>Little Lemon</h1>
        <p>Abuja</p>
        <p></p>
      </section>
      <section>
        <img src={Logo} height="70px" width="150px" alt="Logo of Little lemon"/>
      </section>
    </div>
  );
}

export default About;
