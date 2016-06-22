import React from 'react';
import { Link, withRouter } from 'react-router';

import Footer from '../components/Footer';

export default class Layout extends React.Component {

  // static contextTypes = {
  //   router: React.PropTypes.object.isRequired
  // };

  navigate(e) {
    e.preventDefault();
    let location = `/settings`;
    this.props.history.push(location);
  }

  render() {
    return (  
      <div>
        <h1>Layout</h1>
        <Link to="/archives" activeClassName="test">Archives</Link>&nbsp;
        <a href="" onClick={this.navigate.bind(this)}>Settings</a>        
        {this.props.children}
      </div>
    );
  }

}

// export default withRouter(Layout);