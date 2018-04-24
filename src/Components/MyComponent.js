import React, {Component} from 'react';

class MyComponent extends Component {
    render() {
        return(
            <div className="component">
                <h1>Title: {this.props.title}</h1>
                <h3>Name: {this.props.name}</h3>
                <button onClick={this.props.onClick}>Click Me!</button>
            </div>
        )
    }
}
export default MyComponent;