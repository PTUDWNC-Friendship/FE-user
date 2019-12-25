
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { fetchTutorContracts } from '../../../actions/contract';


class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      fetching: false,
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      dataPerPage: 5,
      currentStudents: []
    };

    this.loadMorePage = this.loadMorePage.bind(this);
  }

  componentDidMount() {
    const { user } = this.props.userState;

    if (user !== null && !this.state.fetching ) {
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

  componentDidUpdate(oldProps) {
    const { user } = this.props.userState;

    if (user !== null && !this.state.fetching ) {
      this.props.fetchTutorContractsAction(user._id);
    }

    const { allContracts } = this.props.contractState;
    if (allContracts.length !== 0 && !this.state.fetching)
    {
      this.setState({
        fetching: true
      });
    }
    if (oldProps.contractState.allContracts !== this.props.contractState.allContracts) {
      const { search } = this.props;
      const { dataPerPage } = this.state;
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        currentStudents: this.props.contractState.allContracts
          .filter(element => {
            if (!search) {
              return true;
            }
            return true;
            // return (
            //   element.category.toLowerCase().search(search.toLowerCase()) !==
            //     -1 ||
            //   element.name.toLowerCase().search(search.toLowerCase()) !== -1
            // );
          })
          .slice(0, dataPerPage)
      });
    }
  }

  loadMorePage() {
    const { search } = this.props;

    this.setState(prevState => ({
      indexLast: (prevState.currentPage + 1) * prevState.dataPerPage,
      currentPage: prevState.currentPage + 1,
      currentStudents: this.props.contractState.allContracts
        .filter(element => {
          if (!search) {
            return true;
          }
          return true;
        //   return (
        //     element.category.toLowerCase().search(search.toLowerCase()) !==
        //       -1 ||
        //     element.name.toLowerCase().search(search.toLowerCase()) !== -1
        //   );
        })
        .slice(
          prevState.indexFirst,
          (prevState.currentPage + 1) * prevState.dataPerPage
        )
    }));
  }

  passingProps(element) {
    if(element!==null) {
      $("#imgModal").attr("src",element.imageURL);
      $('#genderModal').text(element.gender!==null?`Gender: ${element.gender} `:'Gender: Other');
      $('#phoneModal').text(element.phone!==null?`Contact: ${element.phone} `:'Phone number: Non-available');
      $('#nameModal').text(`${element.firstName} ${element.lastName}`);
      $('#addressModal').text(element.address!==null?`Address: ${element.address} `:'Address: Non-available');
      $('#bioModal').text(element.bio);

      $('#modalButton').click();
    }
  }

  render() {
    const { currentStudents } = this.state;
    return (
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 mb-5 mb-md-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="mb-5 h3">
                Current <strong>Students</strong>
              </h2>
              <div className="rounded border jobs-wrap">
              {currentStudents !== null ? (currentStudents.map((value, index) => {
                if (value.status.toLowerCase() === 'confirmed')
                {
                  return (
                    <a key={index.toString()}
                      href="#detailModal" id="modalButton" data-toggle='modal' data-target="#myModal" onClick={() => this.passingProps(value.student)}
                      className="job-item d-block d-md-flex align-items-center  border-bottom fulltime">
                      <div className="company-logo blank-logo text-center text-md-left pl-3">
                        <img src={value.student.imageURL} alt="" className="img-fluid mx-auto" />
                      </div>
                      <div className="job-details h-100">
                        <div className="p-3 align-self-center">
                          <h3>{`${value.student.firstName} ${value.student.lastName}`}</h3>
                          <div className="d-block d-lg-flex">
                            <div style={{width: '40%'}}><span className="icon-room mr-1" /> {value.student.address}</div>
                            <div style={{width: '20%'}}><span className="icon-user mr-1" /> {value.student.gender}</div>
                            <div><span className="icon-phone mr-1" /> {value.student.phone}</div>
                          </div>
                        </div>
                      </div>
                      <div className="job-category align-self-center">
                        <div className="p-3">
                          <span className="text-info p-2 rounded border border-info">
                            Tutoring
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                }
                return null;
              })
              ) : null}

              </div>

              <div className="col-md-12 text-center mt-5">
                <button type="button" onClick={this.loadMorePage} className="btn btn-success rounded py-3 px-5">
                  <span className="icon-plus-circle" /> Load More
                </button>
              </div>
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
    fetchTutorContractsAction: id => dispatch(fetchTutorContracts(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
