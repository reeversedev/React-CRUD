import React, { Component } from 'react';
import MyComponent from './Components/MyComponent'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'App Title'
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: 'New Name'
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value);
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.title}
        </h1>
        <div onClick={this.onClick}>Click Me!</div>
        <MyComponent title="This is the component title" name="Michael" onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
