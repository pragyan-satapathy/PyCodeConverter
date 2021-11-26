import React, {Component} from 'react';
import { 
  Box,
  Grid,
} from '@material-ui/core';

class Label extends Component  {
  render() {
    let firstText, secondText;
    if (this.props.which_converter === '3to2') {
      firstText = <h3>Python3</h3>
      secondText = <h3>Python2</h3>
    } else if (this.props.which_converter === '2to3') {
      firstText = <h3>Python2</h3>
      secondText = <h3>Python3</h3>
    }
    return (
        <Box px={3}>
          <Grid container spacing={6}>
            <Grid item xs={6} container alignItems = "center">
              <Grid>{firstText}</Grid>
            </Grid>
            <Grid item xs={6} container alignItems = "center">
              <Grid>{secondText}</Grid>
            </Grid>
          </Grid>
        </Box>
    );
  }
}

export default Label;
