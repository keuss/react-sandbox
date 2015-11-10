import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <div>Hello {this.props.name}</div>
         <Timer />
      </div>
    );
  }
}
