import React from "react";
import "../cv_img/style.css";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade"
import educationIcon from "../../assets/img/educationIcon.png"


function CRI() {
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
                  <h2 className="cvl_header">Experience</h2>
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
                      <img src={educationIcon} height="40" alt="education icon" />
                      {/* <HiAcademicCap className="timeline-icon color-3"/> */}
                    </div>
                    <div className="timeline-label box-2">
                      <h2>Frontend Developer  </h2>
                      <p className="acd-year">
                        <span className="acd-year">IQM Corporation </span>
                        <span className="acd-year">(Jan 2024 - Present)</span></p>

                      <p className="edu-para">
                        <strong style={{ display: 'block' }}>
                          • Worked on the database tooling project, converting Figma designs into functional code.
                        </strong>
                        <strong style={{ display: "block" }}> • Utilized React, Remix, Zustand, Sass, React Query, Sanity, Jira, and numerous other tools and technologies.</strong>
                      </p>
                    </div>
                  </div>
                </article>

                <br></br>
              </div>
              {/* </Fade> */}
            </div>
          </div>
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
                      <img src={educationIcon} height="40" alt="education icon" />
                      {/* <HiAcademicCap className="timeline-icon color-3"/> */}
                    </div>
                    <div className="timeline-label box-1">
                      <p className="acd-year">2020 - 2024</p>
                      <h2>Bachelor’s Degree (B.E)</h2>
                      <p className="edu-para">
                        <strong>
                          Learned fundamental subjects includes DBMS, Computer Networs, OS, Data Structure and Algorithm, etc.
                        </strong>
                        <br />
                        CGPA : 9.39 out of 10
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
                      <img src={educationIcon} height="40" alt="education icon" />
                    </div>
                    <div className="timeline-label box-2">
                      <p className="acd-year">2018 - 2020</p>
                      <h2>High School (10+2) </h2>
                      <p className="edu-para">
                        <strong>
                          I done my high schooling with PCM  (Physics,Chemistry,Maths) in 2020 From Gujarat board.
                          <br />
                        </strong>
                        Percentile : 99.20
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