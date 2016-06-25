import React from 'react';

export default React.createClass({
  displayName: 'SayHi',
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    const {name} = this.props;

    return <p>Hi {name} from React !</p>;
  }
});
