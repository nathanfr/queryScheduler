import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white'
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 225,
    color: 'white'
  },
});

const inlineStyle = {
  color: 'white'
};

function DatePicker(props) {
  const { classes } = props;

  return (
    <div className='white' style={inlineStyle}>
      <form className={classes.container} noValidate style={inlineStyle}>
        <TextField
          id="datetime-local"
          label="Anchor Date"
          type="datetime-local"
          style={inlineStyle}
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);