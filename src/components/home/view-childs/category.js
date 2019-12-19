import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center mb-5 section-heading">
              <h2 className="mb-5">Categories</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link to="/list-tutors" className="h-100 feature-item">
                <span className="d-block icon mb-3">
                  <img
                    width="90"
                    height="90"
                    alt=""
                    src="images/calculator.svg"
                  />
                </span>
                <h2> </h2>
                <span className="counting">Math</span>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/" className="h-100 feature-item">
                <span className="d-block icon mb-3">
                  <img width="90" height="90" alt="" src="images/study.svg" />
                </span>
                <h2> </h2>
                <span className="counting">Literature</span>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/" className="h-100 feature-item">
                <span className="d-block icon mb-3">
                  <img width="90" height="90" alt="" src="images/dna.svg" />
                </span>
                <h2> </h2>
                <span className="counting">Biology</span>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link to="/" className="h-100 feature-item">
                <span className="d-block icon mb-3">
                  <img
                    width="90"
                    height="90"
                    alt=""
                    src="images/translate.svg"
                  />
                </span>
                <h2> </h2>
                <span className="counting">Languages</span>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link to="/" className="h-100 feature-item">
                <span className="d-block icon mb-3">
                  <img width="90" height="90" alt="" src="images/global.svg" />
                </span>
                <h2> </h2>
                <span className="counting">Geography</span>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link to="/" className="h-100 feature-item">
                <span className="d-block icon mb-3">
                  <img width="90" height="90" alt="" src="images/atom.svg" />
                </span>
                <h2> </h2>
                <span className="counting">Physics</span>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <Link to="/" className="h-100 feature-item">
                <span className="d-block icon mb-3">
                  <img
                    width="90"
                    height="90"
                    alt=""
                    src="images/chemistry.svg"
                  />
                </span>
                <h2> </h2>
                <span className="counting">Chemistry</span>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Link to="/" className="h-100 feature-item">
                <span className="d-block icon mb-3">
                  <img width="90" height="90" alt="" src="images/history.svg" />
                </span>
                <h2> </h2>
                <span className="counting">History</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
