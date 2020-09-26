import React from "react";
import "./Fresh.css";
import citrus1 from "./Images/citrus1.png";
import green1 from "./Images/green1.png";
import water1 from "./Images/water1.png";
import fruity1 from "./Images/fruity1.png";
const Fresh = () => (
  <main className="fre">
    <h2 className="fre">
      {" "}
      FRESH PAGE{" "}
      <span className="flip">(Flip the card for more information.)</span>
    </h2>
    <section className="fresec">
      <div>
        <h2 className="olfa">D-Fruity</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={fruity1} alt="perfumepic" />
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
        <h2 className="olfa">E-Green</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={green1} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2>Olfactory Group </h2>
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
        <h2 className="olfa">F-Water</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={water1} alt="perfumepic" />
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
        <h2 className="olfa">G-Citrus</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={citrus1} alt="perfumepic" />
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

export default Fresh;
