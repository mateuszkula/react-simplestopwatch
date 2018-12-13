import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      timewatch: 0
    };

    this.increment = this.increment.bind(this);
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    setInterval(this.increment, 1000);
  }

  increment() {
    if (this.state.running) {
      this.setState({
        timewatch: this.state.timewatch + 1
      });
    }
  }

  start() {
    this.setState({
      running: true
    });
  }

  stop() {
    this.setState({
      running: false
    });
  }
  render() {
    return (
      <div>
        Time: {this.state.timewatch}
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default App;
