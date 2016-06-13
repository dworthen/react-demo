import React from 'React';

import Title from './Header/Title';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <Title title={this.props.title} />
      </div>
    );
  }

}