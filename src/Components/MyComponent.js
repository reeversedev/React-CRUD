import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    title: PropTypes.any
}

const defaultProps = {
    name: 'Default name of App'
}

class MyComponent extends Component {
    render() {
        const {title, name, onClick} = this.props;
        return(
            <div className="component">
                <h1>Title: {title}</h1>
                <h3>Name: {name}</h3>
                <button onClick={onClick}>Click Me!</button>
            </div>
        )
    }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;