import React from 'react'
import './Fresh.css';
import citrus1 from "./Images/citrus1.png";
import green1 from "./Images/green1.png";
import water1 from "./Images/water1.png";
const Fresh = () => (
    <main className="fre">
      <h2 className="fre"> FRESH PAGE</h2>
      <h3 className="flip">Flip the card for information.</h3>
      <section className="fresec">
      <div>
        <h2 className="olfa">D-Fruity</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={citrus1} alt="perfumepic" />
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
        <h2 className="olfa">E-Green</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={green1} alt="perfumepic" />
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
        <h2 className="olfa">F-Water</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={water1} alt="perfumepic" />
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
        <h2 className="olfa">G-Citrus</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={citrus1} alt="perfumepic" />
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
  
export default Fresh;

