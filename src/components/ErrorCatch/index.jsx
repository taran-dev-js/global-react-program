import React from 'react';
import PropTypes from 'prop-types';

class ErrorCatch extends React.Component {
  static get propTypes() {
    return {
      text: PropTypes.string,
      children: PropTypes.node,
    };
  }

  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch() {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          {this.props.text}
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorCatch;