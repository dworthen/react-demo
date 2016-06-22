import React from 'react';
import { Link, withRouter, browserHistory, hashHistory } from 'react-router';
import _ from 'lodash';

import Footer from '../components/Footer';

export default class Layout extends React.Component {

  // static contextTypes = {
  //   router: React.PropTypes.object.isRequired
  // };

  navigate(e) {
    e.preventDefault();
    let location = `/settings`;
    const { query } = this.props.location;
    this.props.history.push({pathname: location, query : {...query, newKey: 'test'}});
  }

  render() {
    return (  
      <div>
        <h1>Layout</h1>
        <Link to="/archives" activeClassName="test">Archives</Link>&nbsp;
        <a href="" onClick={this.navigate.bind(this)}>Settings</a>
        {this.props.location.query.newKey }        
        {this.props.children}
      </div>
    );
  }

}

// export default withRouter(Layout);