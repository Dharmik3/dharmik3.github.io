import React from "react";
import "../cv_img/style.css";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade"
import educationIcon from "../../assets/img/educationIcon.png"


function CRI()
{
  return (
    <Bounce>
      <section className="colorlib-experience" data-section="leadership">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="about-desc">
                <Fade top cascade>
                  <h2 className="cvl_header">Educations</h2>
                </Fade>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <Fade right cascade> */}
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box "
                    data-animate-effect="fadeInRight"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <img src={educationIcon} height="40" alt="education icon"/>
                        {/* <HiAcademicCap className="timeline-icon color-3"/> */}
                      </div>
                      <div className="timeline-label box-1">
                        <p className="acd-year">2020 - Present</p>
                        <h2>Bachelor’s Degree (B.E)</h2>
                        <p className="edu-para">
                          <strong>
                            I am currently doing Information Technology from
                            GCET.
                          </strong>
                          <br />
                          CGPA : 9.6 out of 10
                          <br />
                        </p>
                      </div>
                    </div>
                  </article>

                  <br></br>
                  <article
                    className="timeline-entry animate-box "
                    data-animate-effect="fadeInRight"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <img src={educationIcon} height="40"alt="education icon"/>
                      </div>
                      <div className="timeline-label box-2">
                        <p className="acd-year">2018 - 2020</p>
                        <h2>High School (10+2) </h2>
                        <p className="edu-para">
                          <strong>
                            I did a Science with PCM in 2020 From Gujarat board.
                            <br />
                          </strong>
                          Percentile Rank : 99.20
                          <br />
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </section>
    </Bounce>
  );
}

export default CRI;