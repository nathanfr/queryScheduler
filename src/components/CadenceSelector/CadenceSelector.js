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
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  }
});

class CadenceSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cadence: ''
    }
  }

  handleChange = name => event => {
    this.setState({cadence: event.target.value})
    console.log(event.target.value)
    console.log(this.props)
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper" className='inputItem'>Cadence</InputLabel>
          <NativeSelect
            onChange={this.props.onChange}
            input={<Input name="Cadence" id="age-native-helper" />}
          >
            <option value="" />
            <option value={'monthly'}>Monthly</option>
            <option value={'weekly'}>Weekly</option>
            <option value={'daily'}>Daily</option>
            <option value={'hourly'}>Hourly</option>
          </NativeSelect>
          <FormHelperText>Select the frequency with which you would like to run your query.</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

CadenceSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadenceSelector);