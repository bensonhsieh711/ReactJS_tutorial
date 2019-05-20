import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { RaisedButton } from 'material-ui';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

class CustomizedSelects extends React.Component {
    state = {
        search: '',
        showCatagory: false,
        name: [],
    };

    handleChange = event => {
        this.setState({ search: event.target.value });
    };

    buttonOnClick = () => {
        this.setState({ showCatagory: !this.state.showCatagory });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel}>
                            輸日關鍵字
                        </InputLabel>
                        <BootstrapInput />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel} />
                        {this.state.showCatagory == true ?
                            <Select value={this.state.search}
                                onChange={this.handleChange}
                                input={<BootstrapInput name="search" id="search-customized-select" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select> : null}
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-checkbox">種類</InputLabel>
                        <Select multiple
                            value={this.state.name}
                            onChange={this.handleChange}
                            input={<Input id="select-multiple-checkbox" />}
                            renderValue={selected => selected.join(', ')}
                            MenuProps={MenuProps} >
                            {names.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.name.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {/* <FormControl className={classes.margin}>
                    <InputLabel htmlFor="search-customized-native-simple" className={classes.bootstrapFormLabel}>
                        Age
                    </InputLabel>
                    <NativeSelect
                        value={this.state.search}
                        onChange={this.handleChange}
                        input={<BootstrapInput name="search" id="search-customized-native-simple" />}
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl> */}
                </form>
                <Button variant="contained" color="primary" className={classes.margin} onClick={this.buttonOnClick}>
                    Search
                </Button>
            </div>
        );
    }
}

CustomizedSelects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedSelects);