import React from "react";
import "./Floral.css";
import floral1 from "./Images/floral1.png";
import floral2 from "./Images/floral4.png";
import floral3 from "./Images/floral3.png";
const Floral = () => (
  <main className="flo">
    <h2 className="flo"> FLORAL PAGE</h2>
    <h3>Flip the card for more information</h3>
    <section className="flosec">
      <div>
        <h2 className="olfa">A-Floral</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={floral1} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2>Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis doloribus delectus, incidunt quisquam quidem
                  reiciendis minus illum necessitatibus nam animi veritatis
                  voluptas consequuntur natus maxime minima molestias ratione!
                  Amet, dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">B-SoftFloral</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={floral2} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2>Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis doloribus delectus, incidunt quisquam quidem
                  reiciendis minus illum necessitatibus nam animi veritatis
                  voluptas consequuntur natus maxime minima molestias ratione!
                  Amet, dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">C-Floral Oriental</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={floral3} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2>Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis doloribus delectus, incidunt quisquam quidem
                  reiciendis minus illum necessitatibus nam animi veritatis
                  voluptas consequuntur natus maxime minima molestias ratione!
                  Amet, dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Floral;
