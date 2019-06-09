import React from 'react';
import './App.css';

class Button extends React.Component {
    render() {
        return (
            <div className="App">
            <button onClick={this.add}>Add</button>
            </div>
        )

    }

}

export default Button;