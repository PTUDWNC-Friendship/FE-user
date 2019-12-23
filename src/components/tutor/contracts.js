import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { fetchUserById } from '../../actions/user';
import { fetchTutorContracts, setTutor, setStudent, setDetailContract } from '../../actions/contract';

class ContractList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,

      search: '',
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      dataPerPage: 5,
      totalPage: 0,
      tutorContracts: []
    };

    this.choosePage = this.choosePage.bind(this);
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

  componentDidUpdate(oldProps) {
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

    // Authentication
    if (user !== null) {
      if (user.role === 'student') {
        this.props.history.push('/home-student');
      }
    } else {
      this.props.history.push('/login');
    }

    // Pagination
    if ( oldProps.contractState.allContracts !== this.props.contractState.allContracts ) {
      const { search, dataPerPage} = this.state;
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        totalPage: Math.round(this.props.contractState.allContracts.length / this.state.dataPerPage),
        tutorContracts: this.props.contractState.allContracts
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

  onDetailContract(value) {
    const {onSetStudentContract, onSetTutorContract,onSetDetailContract, history,userState } = this.props;
    Promise.resolve(
     onSetStudentContract(userState.user),
     onSetTutorContract(value.tutor),
     onSetDetailContract(value),
    ).then(()=>{
       history.push('/contract');
    });
  }

  choosePage(page) {
    const { search } = this.state;
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState(prevState => {
      const indexFirst = (page - 1) * prevState.dataPerPage;
      const indexLast = page * prevState.dataPerPage;
      return {
        indexFirst,
        indexLast,
        currentPage: page,
        tutorContracts: this.props.contractState.allContracts
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
          .slice(indexFirst, indexLast)
      };
    });
  }

  showContentTable()
  {
    const thTable = ["Student", "Duration", "Status",""];
    const { tutorContracts, currentPage, totalPage } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= this.state.totalPage; i+=1) {
      pageNumbers.push(<li className={i === this.state.currentPage ? "page-item active" : "page-item"}><button type="button" onClick={() => this.choosePage(i)} className="page-link">{i}</button></li>);
    }

    return (
      <div className="col-md-12" data-aos="fade">
        <Grid fluid>
          <div className="site-section bg-light">
            <div className="container">
              <div className="table-wrapper">
                  <div className="table-title">
                      <div className="row">
                          <div className="col-sm-6">
                            <h2>All <b>Contracts</b></h2>
                          </div>
                      </div>
                  </div>
                  <table className="contracts table table-striped table-hover">
                      <thead>
                        <tr>
                          {thTable.map((value, index) => {
                            return <th key={index.toString()}>{value}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {tutorContracts !== null ? tutorContracts.map((value, index) => {
                          return (
                            <tr key={index.toString()}>
                              <td>{`${value.student.firstName} ${value.student.lastName}`}</td>
                              <td>
                              <b>FROM </b>
                              {value.startDate} <br />
                              <b> TO </b>
                              {value.endDate}</td>
                              <td>
                              <span className="text-info p-2 rounded border border-info">
                                {value.status}
                              </span>
                              </td>
                              <td>
                              <Fab title="Evaluate for tutor" onClick={()=>this.onDetailContract(value)}   aria-label="like" >
                                  <VisibilityIcon />
                              </Fab>
                              </td>
                            </tr>
                          );
                        }) : null}
                      </tbody>
                  </table>
                  <div className="clearfix">
                      <ul className="pagination">
                          <li className={currentPage === 1 ? "page-item disabled" : "page-item"}><button type="button" className="page-link" onClick={() => this.choosePage(currentPage - 1)}>Previous</button></li>
                          {pageNumbers}
                          <li className={currentPage === totalPage ? "page-item disabled" : "page-item"}><button type="button" className="page-link" onClick={() => this.choosePage(currentPage + 1)}>Next</button></li>
                      </ul>
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

              {/* <!-- Detail Modal HTML --> */}
              <div id="detailModal" className="modal fade">
                <div className="modal-dialog modal-dialog-centered container">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">Contract detail</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
                        Body ne`
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-danger" value="OK"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContractList));
