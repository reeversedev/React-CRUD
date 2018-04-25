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
      <input value="name" /> {/* Now in DOM, we won't be able to change the value because now it becomes hard coded */}
      <input defaultValue="Prateek" />
      {/* This value can be changed because it is just the default value, so when the DOM loads this value renders but later we can change it */}
      </div>
    );
  }
}

export default App;
