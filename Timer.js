import React from 'react';
import ReactDOM from 'react-dom';


export default class Timer extends React.Component {

  constructor(props) {
    super(props);

    // This is called before our render function. The object that is
    // returned is assigned to this.state, so we can use it later.
    this.state = {
      secondsElapsed: 0
    };

    // Must be bind otherwise get  this.state.secondsElapsed
    // as undefined in tick method !
    this.tick = this.tick.bind(this);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }

  tick() {
    console.log('tick', this.state.secondsElapsed);
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  // componentDidMount is called by react when the component
  // has been rendered on the page. We can set the interval here
  componentDidMount() {
    this.interval = window.setInterval(this.tick, 1000);
  }

  // This method is called immediately before the component is removed
  // from the page and destroyed. We can clear the interval here
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

}
