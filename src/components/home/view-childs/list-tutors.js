import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllTutors } from '../../../actions/user';

class TutorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      indexLastUser: 0,
      indexFirstUser: 0,
      currentPage: 1,
      userPerPage: 5,
      tutors: []
    };

    this.loadMorePage = this.loadMorePage.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTutorsActions();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.userState.allTutors !== this.props.userState.allTutors) {
      const { search } = this.props;

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        tutors: this.props.userState.allTutors
          .filter(element => {
            if (!search) { 
              return true;
            }
            return `${element.firstName} ${element.lastName}`.toLowerCase().search(search.toLowerCase()) !== -1 || 
                  element.title.toLowerCase().search(search.toLowerCase()) !== -1;
          })
          .slice(0, 5)
      });
    }
  }

  loadMorePage() {
    const { search } = this.props;

    this.setState(prevState => ({
      indexLastUser: (prevState.currentPage + 1) * prevState.userPerPage,
      currentPage: prevState.currentPage + 1,
      tutors: this.props.userState.allTutors
        .filter(element => {
          if (!search) {
            return true;
          }
          return (
            `${element.firstName} ${element.lastName}`
              .toLowerCase()
              .search(search.toLowerCase()) !== -1 ||
            element.title.toLowerCase().search(search.toLowerCase()) !== -1
          );
        })
        .slice(
          prevState.indexFirstUser,
          (prevState.currentPage + 1) * prevState.userPerPage
        )
    }));
  }

  render() {
    return (
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 mb-5 mb-md-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="mb-5 h3">Tutors</h2>
              <div className="rounded border jobs-wrap">
                {this.state.tutors.map((element, index) => (
                  <Link
                    key={index.toString()}
                    to="/list-tutors"
                    className="job-item d-block d-md-flex align-items-center  border-bottom fulltime"
                  >
                    <div className="company-logo blank-logo text-center text-md-left pl-3">
                      <img
                        src={element !== null ? element.imageURL : ''}
                        alt=""
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="job-details h-100">
                      <div className="p-3 align-self-center">
                        <h3>
                          {element !== null ? element.firstName : ''}
                          {element !== null ? element.lastName : ''}
                        </h3>
                        <div className="d-block d-lg-flex">
                          <div className="mr-3">
                            <span className="icon-suitcase mr-1" />{' '}
                            {element !== null ? element.title : ''}
                          </div>
                          <div className="mr-3">
                            <span className="icon-room mr-1" />
                            {element !== null ? element.address : ''}
                          </div>
                          <div>
                            <span className="icon-money mr-1" />$
                            {element !== null ? element.price : '0'} per hour
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="job-category align-self-center">
                      <div className="p-3">
                        <span className="text-info p-2 rounded border border-info">
                          5 Stars
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="col-md-12 text-center mt-5">
                <button
                  type="button"
                  onClick={this.loadMorePage}
                  className="btn btn-success rounded py-3 px-5"
                >
                  <span className="icon-plus-circle" /> More Tutors
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
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllTutorsActions: () => dispatch(fetchAllTutors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorList);
