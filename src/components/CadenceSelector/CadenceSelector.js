import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
    color: 'white'
  }
});

const inlineStyle = {
  color: 'white',
};

class CadenceSelector extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper" className='inputItem' style={inlineStyle}>Cadence</InputLabel>
          <NativeSelect
            value={this.state.age}
            style={inlineStyle}
            onChange={this.handleChange('age')}
            input={<Input name="Cadence" id="age-native-helper" />}
          >
            <option value="" />
            <option value={10}>Monthly</option>
            <option value={20}>Weekly</option>
            <option value={30}>Daily</option>
            <option value={30}>Hourly</option>
          </NativeSelect>
          <FormHelperText style={inlineStyle}>Select the frequence with which you would like to run your query.</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

CadenceSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadenceSelector);