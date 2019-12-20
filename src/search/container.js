import React from 'react';
import queryString from 'query-string';
import Search from '../components/home/view-childs/search';
import TutorList from '../components/home/view-childs/list-tutors';
import SubjectList from '../components/home/view-childs/list-subjects';

class SearchContainer extends React.Component {

  render() {
    const { keywords } = queryString.parse(this.props.location.search);
    return (
      <div>
        <div className="site-wrap">
          <div className="site-mobile-menu">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>

          <div style={{ height: '113px' }} />

          <Search />
          <TutorList search={keywords}/>
          <SubjectList search={keywords}/>
        </div>
      </div>
    );
  }
}

export default SearchContainer;
