
import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import {  withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import 'antd/dist/antd.css';
// import queryString from 'query-string';
import { Slider, Input } from 'antd';
import { TutorCard } from '../ui-components/TutorCard/TutorCard';
import { InfoModal } from '../ui-components/InfoModal/InfoModal';
import { fetchAllTutors } from '../../actions/user';
import {setTutor, setStudent} from '../../actions/contract';

class TutorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      categoryFilter: null,
      priceFilter: null,
      isEditable: false,
      isChangeable: false,
      fetching: false,
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      dataPerPage: 6,
      tutors: []
    };
    this.loadMorePage = this.loadMorePage.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {

    this.props.getListTutors();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.userState.allTutors !== this.props.userState.allTutors) {
      // const query = queryString.parse(this.props.location.search);
      // const {  } = query;
      const { search, priceFilter, categoryFilter } = this.state;
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        tutors: this.props.userState.allTutors
        .filter(element => {
          if (!search) {
            return true;
          }
          if (
            `${element.firstName} ${element.lastName}`
              .toLowerCase()
              .search(search.toLowerCase()) !== -1 ||
            element.title.toLowerCase().search(search.toLowerCase()) !== -1
          ) {
            return true;
          }
          // eslint-disable-next-line no-restricted-syntax
          for (const subject of element.subjects) {
            if (subject.name.toLowerCase().search(search.toLowerCase()) !== -1 ||
                subject.category.toLowerCase().search(search.toLowerCase()) !== -1) {
              return true;
            }
          }
          return false;
        })
        .filter(element => {
          if (!categoryFilter) {
            return true;
          }
          // eslint-disable-next-line no-restricted-syntax
          for (const subject of element.subjects) {
            if (subject.category === categoryFilter) {
              return true;
            }
          }
          return false;
        })
        .filter(element => {
          if (!priceFilter) {
            return true;
          }
          return element.price === priceFilter;
        })
          .slice(0, this.state.dataPerPage)
      });
    }
  }

  // eslint-disable-next-line react/sort-comp
  loadMorePage() {
    // const query = queryString.parse(this.props.location.search);
    // const {  } = query;
    const { search, priceFilter, categoryFilter} = this.state;

    this.setState(prevState => ({
      indexLast: (prevState.currentPage + 1) * prevState.dataPerPage,
      currentPage: prevState.currentPage + 1,
      tutors: this.props.userState.allTutors
        .filter(element => {
          if (!search) {
            return true;
          }
          if (
            `${element.firstName} ${element.lastName}`
              .toLowerCase()
              .search(search.toLowerCase()) !== -1 ||
            element.title.toLowerCase().search(search.toLowerCase()) !== -1
          ) {
            return true;
          }
          // eslint-disable-next-line no-restricted-syntax
          for (const subject of element.subjects) {
            if (subject.name.toLowerCase().search(search.toLowerCase()) !== -1 ||
                subject.category.toLowerCase().search(search.toLowerCase()) !== -1) {
              return true;
            }
          }
          return false;
        })
        .filter(element => {
          if (!categoryFilter) {
            return true;
          }
          // eslint-disable-next-line no-restricted-syntax
          for (const subject of element.subjects) {
            if (subject.category === categoryFilter) {
              return true;
            }
          }
          return false;
        })
        .filter(element => {
          if (!priceFilter) {
            return true;
          }
          return element.price <= priceFilter[1] && element.price >= priceFilter[0];
        })
        .slice(
          prevState.indexFirst,
          (prevState.currentPage + 1) * prevState.dataPerPage
        )
    }));
  }

  onUpdateInfor = e => {
    e.preventDefault();
  };


  setContract(tutor, student) {
   const {onSetStudentContract, onSetTutorContract, history } = this.props;
   Promise.resolve(
    onSetStudentContract(student),
    onSetTutorContract(tutor)
   ).then(()=>{
      history.push('/contract');
   });
  }

  passingProps(element) {
    console.log(element);
    if(element!==null) {
      $('#rateModal').empty();
      $("#imgModal").attr("src",element.imageURL);
      $('#titleModal').text(element.title!==null?`${element.title} `:'tutor');
      $('#priceModal').text(element.price!==null?`$${element.price} `:'$10');
      $('#nameModal').text(`${element.firstName} ${element.lastName}`);
      $('#addressModal').text(element.address!==null?`${element.address} `:'Việt Nam');
      $('#bioModal').text(element.bio);
      $('#subjectModal').empty();
      if(element.subjects !== null) {
        for (let i = 0; i < element.subjects.length; i+=1) {
          if(element.subjects[i] !== null) {
          $('#subjectModal').append( `<div role="alert" class="alert alert-info" style="float: left; padding: 1%; margin-left: 3%" >${  element.subjects[i].name  }</div>`);
          }
        }
      }
      if (element.rate !== null)
      {

        let star = '<fieldset class="MuiBox-root MuiBox-root-30"> <span class="MuiRating-root MuiRating-readOnly" role="img" aria-label="3 Stars"> ' ;
        for(let count = 0 ;count<10;count+=1) {
          if(count<element.rate) {
            star += '<span class="MuiRating-icon MuiRating-iconFilled"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>';
          } else {
            star += '<span class="MuiRating-icon MuiRating-iconEmpty"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>';
          }
        }
        star += '</span></fieldset>';
        $('#rateModal').append(star);
        star ='';
      }
      if(element.feedbacks !== null) {
        for (let i = 0; i < element.feedbacks.length; i+=1) {
          if(element.feedbacks[i] !== null) {
          $('#feedbackModal').append(
             `<div className="job-details h-100">
               <div className="p-3 align-self-center">
                 <b>Anonymous feedback</b>
                 <div className="d-block d-lg-flex">
                   <div className="mr-3">
                     <span className="mr-1">
                      ${element.feedbacks[i].comment}
                     </span>
                   </div>
                 </div>
               </div>
             </div>`
           );
          }
        }
      }

      $('#modalButton').click();
    }
  }

  detailInfor() {
    $('#tutorCard').click();
  }


  // eslint-disable-next-line react/sort-comp
  onSelectCategory(e) {
    const {value} = e.target;
    this.setState({
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      categoryFilter: value,
      tutors: this.props.userState.allTutors
      .filter(element => {
        // eslint-disable-next-line no-restricted-syntax
        for (const subject of element.subjects) {
          if (subject.category === value) {
            return true;
          }
        }
        return false;
      }).slice(0, this.state.dataPerPage)
    });
  }

  onSearchChange(value) {
    this.setState({
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      search: value,
      tutors: this.props.userState.allTutors
        .filter(element => {
          if (!value) {
            return true;
          }
          if (
            `${element.firstName} ${element.lastName}`
              .toLowerCase()
              .search(value.toLowerCase()) !== -1 ||
            element.title.toLowerCase().search(value.toLowerCase()) !== -1
          ) {
            return true;
          }
          // eslint-disable-next-line no-restricted-syntax
          for (const subject of element.subjects) {
            if (subject.name.toLowerCase().search(value.toLowerCase()) !== -1 ||
                subject.category.toLowerCase().search(value.toLowerCase()) !== -1) {
              return true;
            }
          }
          return false;
        }).slice(0, this.state.dataPerPage)
    });
  }

  onChangePrice(value) {
    this.setState({
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      priceFilter: value,
      tutors: this.props.userState.allTutors
        .filter(element => {
          if (element.price <= value[1] && element.price >= value[0]) {
            return true;
          }
          return false;
        }).slice(0, this.state.dataPerPage)
    });
  }

  handleReset() {
    this.setState({
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      search: null,
      priceFilter: null,
      categoryFilter: null,
      tutors: this.props.userState.allTutors.slice(0, this.state.dataPerPage)
    });
  }


  render() {
    const categories = ["Math", "Literature", "Biology", "Languages", "Geography", "Physics", "Chemistry", "History" ];
    const { tutors } = this.state;
    const { userState } = this.props;
    const subject = [];
    subject.push(<h>Default</h>);
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
              <InfoModal />
              <div className="col-md-12" data-aos="fade">
                <Grid fluid cellSpacing={4}>
                  <Row>
                    <Col md={4}>
                      <Input.Search
                        placeholder="Search tutor's name, subject, ..."
                        onSearch={this.onSearchChange}
                        style={{ width: 400 }}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: '3%' }}>
                    <Col md={2}>
                      {' '}
                      <strong>Price($/hour):</strong>{' '}
                    </Col>
                    <Col md={3}>
                      <Slider
                        range
                        step={100}
                        max={1000}
                        defaultValue={[0, 1000]}
                        onChange={this.onChangePrice}
                        // onAfterChange={onAfterChange}
                      />
                    </Col>
                    <Col md={1}>Category: </Col>
                    <Col md={3}>
                      <select
                        className="js-example-basic-single"
                        name="category"
                        onChange={this.onSelectCategory}
                        style={{ minWidth: '200px' }}
                      >
                        {categories.map((value, index) => {
                          return (
                            <option key={index.toString()} value={value}>
                              {value}
                            </option>
                          );
                        })}
                      </select>
                    </Col>
                    <Col md={3}>
                      <button
                        className="btn btn-info"
                        type="button"
                        onClick={this.handleReset}
                      >
                        Reset
                      </button>
                    </Col>
                  </Row>
                  <Button
                    id="modalButton"
                    style={{ display: 'none' }}
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    modal
                  </Button>
                  <Row>
                    {tutors.map(element => (
                      <Col md={4}>
                        <Grid
                          className="btn btn-light"
                          style={{ padding: '0px', marginTop: '5%' }}
                        >
                          <Grid
                            id="tutorCard"
                            onClick={() => this.passingProps(element)}
                          >
                            <TutorCard
                              avatar={
                                element.imageURL !== null
                                  ? element.imageURL
                                  : 'images/person_2.jpg'
                              }
                              // eslint-disable-next-line no-nested-ternary
                              name={`${element.firstName} ${element.lastName}`}
                              title={
                                element.title !== null ? element.title : 'Tutor'
                              }
                              address={
                                element.address !== null
                                  ? element.address
                                  : 'Việt Nam'
                              }
                              price={
                                element.price !== null ? element.price : '10'
                              }
                              subjects={
                                element.subjects !== null
                                  ? element.subjects
                                  : subject
                              }
                              rate={
                                element.rate !== null
                                  ? element.rate
                                  : 'Have not been rated'
                              }
                            />
                          </Grid>
                          {userState.user !== null ? (
                            <div>
                              {userState.user.role === 'student' ? (
                                <Row>
                                  <Col md={6}>
                                    <Button
                                      onClick={() => this.detailInfor()}
                                      className="btn btn-outline-danger py-3 px-4"
                                      style={{ width: '83%' }}
                                    >
                                      Detail
                                    </Button>
                                  </Col>
                                  <Col md={6}>
                                    <Button
                                      type="button"
                                      onClick={() =>
                                        this.setContract(
                                          element,
                                          userState.user
                                        )
                                      }
                                      className="btn btn-outline-success py-3 px-4"
                                      style={{ width: '83%' }}
                                    >
                                      Booking
                                    </Button>
                                  </Col>
                                </Row>
                              ) : null}
                            </div>
                          ) : null}
                        </Grid>
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    <div className="col-md-12 text-center mt-5">
                      <button
                        onClick={this.loadMorePage}
                        className="btn btn-success rounded py-3 px-5"
                        type="button"
                      >
                        <span className="icon-plus-circle" /> Load More
                      </button>
                    </div>
                  </Row>
                </Grid>
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

const mapDispatchToProps = dispatch =>
{
  return {

    onSetTutorContract: (tutor) => {
      dispatch(setTutor(tutor));
    },
    onSetStudentContract: (student) => {
      dispatch(setStudent(student));
    },
    getListTutors: bindActionCreators(fetchAllTutors,dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TutorList));
