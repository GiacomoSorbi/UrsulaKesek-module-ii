import React from "react";
import "./Floral.css";
import floral1 from "./Images/floral1.png";
import floral2 from "./Images/floral4.png";
import floral3 from "./Images/floral3.png";
const Floral = () => (
  <main className="flo">
    <h2 className="flo"> FLORAL PAGE</h2>
    <h3>Hover on images for more information</h3>
    <section className="flosec">
      <div>
        <h2 className="olfa">Floral</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={floral1} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2> lalala</h2>
              </div>
              <div>
                <p className="fcb">more lalala</p>
              </div>
              <div>
                <p className="fcb">we love lalala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">SoftFloral</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={floral2} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2> lalala</h2>
              </div>
              <div>
                <p className="fcb">more lalala</p>
              </div>
              <div>
                <p className="fcb">we love lalala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">Floral Oriental</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={floral3} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2> lalala</h2>
              </div>
              <div>
                <p className="fcb">more lalala</p>
              </div>
              <div>
                <p className="fcb">we love lalala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Floral;
