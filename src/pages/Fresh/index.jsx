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
                  FRESH FRUITY  The fresh category was always zestily juicy
                  with fruit notes – traditionally citrus, in the past. But
                  today, lusher fruits – including mango, peach, melon,
                  pineapple and berries – are being blended into scents,
                  softening the freshness with a light yet sensual touch of
                  summery sweetness.
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
                  FRESH GREEN So clean, so sporty, the fresh greens showcase
                  elements like green tea, grass, herbs, vines and leaves
                  (violet leaf, for instance), and occasionally a little whisper
                  of fruit. This family, evokes a cool, shaded spot.
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
                  Gifted perfumers can actually make fresh aquatic fragrances
                  seem positively icy, or just dew-drenched, or simply conjure
                  up the fragrance of just-washed linen. Fragrances in this
                  family are also sometimes referred to as ‘ozonic’, such as the
                  smell of mountain air, or a sea breeze. Many (but not all)
                  fresh aquatic fragrances are created for men.
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
                  Citrus fragrances are old and abundant. Its compositions are
                  based on lemon, orange, bergamot, grapefruit or mandarin, with
                  other citrusy, aromatic and tart notes for men and floral
                  notes for women.
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
