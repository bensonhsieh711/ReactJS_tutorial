import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Selects from './Componet/SelectsBar/Selects'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        let url = 'https://firebasestorage.googleapis.com/v0/b/bensonhsieh711.appspot.com/o/20171013_115606883_iOS.jpg?alt=media&token=9ac03312-b525-4e63-963f-55a7d08e9314';
        let imgUrl = 'https://firebasestorage.googleapis.com/v0/b/jsontest1-c8ebb.appspot.com/o/20170827_040437405_iOS.jpg?alt=media&token=c2cb35b6-a985-44a7-8811-0e2afaf98c4b';
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}
                    >
                        {/* <Menu>
                            <MenuItem primaryText="CV" />
                            <MenuItem primaryText="Contact me" />
                            <MenuItem primaryText="Help &amp; feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Sign out" />
                        </Menu> */}
                    </Popover>
                    <AppBar title='Law Hackthon Demo' onClick={this.handleTouchTap} />
                    {/* <img src={url} width={'80%'} height={'100%'} /> */}
                    <Selects />
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
//registerServiceWorker();
