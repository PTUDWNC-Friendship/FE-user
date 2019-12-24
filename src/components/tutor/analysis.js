import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LineChart } from 'react-chartkick'
import 'chart.js'
import { fetchUserById } from '../../actions/user';
import { fetchTutorContracts, setTutor, setStudent, setDetailContract } from '../../actions/contract';

class Analysis extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false
    };
  }

  componentDidMount() {
    const { user } = this.props.userState;

    if (user !== null && !this.state.fetching ) {
      this.props.fetchUserByIdAction(user._id);
      this.props.fetchTutorContractsAction(user._id);
    }

    const { allContracts } = this.props.contractState;
    if (allContracts.length !== 0 && !this.state.fetching)
    {
      this.setState({
        fetching: true
      });

    }
  }

  componentDidUpdate() {
    const { user } = this.props.userState;

    if (user !== null && !this.state.fetching ) {
      this.props.fetchUserByIdAction(user._id);
      this.props.fetchTutorContractsAction(user._id);
    }

    const { allContracts } = this.props.contractState;
    if (allContracts.length !== 0 && !this.state.fetching)
    {
      this.setState({
        fetching: true
      });
    }
  }

  getRevenueFromContracts()
  {
    const { allContracts } = this.props.contractState;
    let listRevenue = {};

    for (let i = 0; i < allContracts.length; i+=1)
    {
      const date = new Date(allContracts[i].createdDate);
      const dateFomartted = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getUTCDate()}`;
      const revenue = allContracts[i].totalPrice - allContracts[i].revenue;

      const temp = {};
      temp[dateFomartted] = revenue;

      Object.assign(listRevenue, temp);
    }

    return listRevenue;
  }



  showContentTable() {



    return (
      <div className="col-md-12" data-aos="fade">

        <Grid fluid>

          <div className="site-section bg-light">

            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                  <h2 className="mb-5 h3">Your Revenue</h2>
                  <div className="rounded border jobs-wrap">

                    <LineChart data={this.getRevenueFromContracts()} />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }


  render() {

    return (
      <div>
        <div style={{ height: '113px' }} />

        <div
          className="unit-5 overlay"
          style={{
            backgroundImage: "url('images/tutor-1.jpg')",
            minHeight: '200px'
          }}
        />
        <div className="site-section bg-light">
          <div className="container">
            <div className="row align-items-center">


              { this.showContentTable() }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contractState: state.contractState,
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetTutorContract: (tutor) => {
      dispatch(setTutor(tutor));
    },
    onSetStudentContract: (student) => {
      dispatch(setStudent(student));
    },
    onSetDetailContract: (detailContract) =>{
      dispatch(setDetailContract(detailContract));
    },
    fetchTutorContractsAction: id => dispatch(fetchTutorContracts(id)),
    fetchUserByIdAction: id => dispatch(fetchUserById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Analysis));
