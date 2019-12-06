import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";





class RolePicking extends React.Component {


  render() {
    return (
      <div
        className="site-blocks-cover overlay"
        data-aos="fade"
        data-stellar-background-ratio="0.5"
        style={{backgroundImage: "url('images/tutor-1.jpg')"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center text-white" data-aos="fade">
              <Typography component="h1" variant="h5">
                What Are You Applying For?
              </Typography>
              <p/>
              <Link to="/register-student" className="btn btn-outline-warning py-3 px-4" style={{width: '30%'}}><strong>Student</strong></Link>
              <p/>
              <Link to="/register-tutor" className="btn btn-outline-warning py-3 px-4" style={{width: '30%'}}><strong>Tutor</strong></Link>


            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default RolePicking;
