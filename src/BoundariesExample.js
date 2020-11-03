import React from 'react';

export class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = { hasError: false };
    }

    logErrorToSomeService(error, info) {
        
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });

        this.logErrorToSomeService(error, info);
    }

    render() {

        if (this.state.hasError) {
            return <h1>Something bad happened and it all crashed.</h1>
        }

        return (
            this.props.children
        );
    }
}
