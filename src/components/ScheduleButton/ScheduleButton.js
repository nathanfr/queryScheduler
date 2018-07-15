import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ScheduleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  render() {
    const { classes } = this.props;

    return(
      <div className='white tc'>
        <Button variant="contained" color="primary" className={classes.button}
        onClick={this.props.onSubmit}>
          Schedule
        </Button>
      </div>      
    )
  }
}

// function ScheduleButton(props, { onSubmit }) {
//   const { classes } = props;
//   return (
//     <div className='white tc'>
//       <Button variant="contained" color="primary" className={classes.button}
//       onClick={onSubmit}>
//         Schedule
//       </Button>
//     </div>
//   );
// }

ScheduleButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleButton);