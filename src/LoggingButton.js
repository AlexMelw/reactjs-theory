import React from 'react';

export class LoggingButton extends React.Component {
    
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('this is:', this);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}
