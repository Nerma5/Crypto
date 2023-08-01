import React from "react";
import "./index.scss";

const About = () => {
  return (
    <div className="About">
      <p className="covidText">
        Our application is made on the basis of accurate data regarding
        information about covid-19.
        <br />
        You can see about our team below.
      </p>
      <div className="cards">
        <div className="cardText">
          <p className="name">Edin Mavric</p>
          <div className="text">
            <p className="profesion">Web developer</p>
            <p>Edin was in charge of Home page and Coin page.</p>
          </div>
        </div>
        <div className="cardText">
          <p className="name">Umer Sacirovic</p>
          <div className="text">
            <p className="profesion">Web developer</p>
            <p>
              Umer was in charge of the main functionalities of the application,
              as well as the arrangement of components in the project.
            </p>
          </div>
        </div>
        <div className="cardText">
          <p className="name">Nerma Hot</p>
          <div className="text">
            <p className="profesion">Web developer</p>
            <p>
              Nerma was the most deserving when it comes to the Account page.
            </p>
          </div>
        </div>
        <div className="cardText">
          <p className="name">Ensar Vragic</p>
          <div className="text">
            <p className="profesion">Web developer</p>
            <p>
              Ensar was the most deserving when it comes to the Exchange page.
            </p>
          </div>
        </div>
        <div className="cardText">
        <p className="name">Hamza Zukovic</p>
        <div className="text">
          <p className="profesion">Web developer</p>
          <p>
            Hamza was the most deserving when it comes to the Favorites page.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
