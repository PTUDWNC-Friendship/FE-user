import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { value } = e.target;
        this.setState({
            keywords: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search?keywords=${this.state.keywords}`); 
    }

    render() {
        return (
            <div
            className="site-blocks-cover overlay"
            data-aos="fade"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url('images/tutor-1.jpg')" }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12" data-aos="fade">
                  <h1>Find Tutor</h1>
                  <h4 style={{color: "white", marginBottom: "15px"}}>Teachers are highly qualified and extremely dedicated</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-12 mb-3 mb-md-0">
                            <input
                              type="text"
                              className="mr-3 form-control border-0 px-4"
                              placeholder="subject, tutor name or tutor title "
                              name="search"
                              value={this.state.keywords}
                              onChange={this.handleChange}
                            />
                          </div>
                          {/* <div className="col-md-6 mb-3 mb-md-0">
                            <div className="input-wrap">
                              <span className="icon icon-room" />
                              <input
                                type="text"
                                className="form-control form-control-block search-input  border-0 px-4"
                                id="autocomplete"
                                placeholder="city, province or region"
                                onFocus="geolocate()"
                              />
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <input
                          type="submit"
                          className="btn btn-search btn-success btn-block"
                          value="Search"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <p className="small">
                          or browse by subject category down below
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(Search);