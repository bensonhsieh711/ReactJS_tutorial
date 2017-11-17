import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <a>test</a>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
//registerServiceWorker();
