import React, {Component} from 'react';
import { 
  Box,
  Grid,
  Button,
} from '@material-ui/core';

class Label extends Component  {

  render() {
    let firstText, secondText;
    if (this.props.which_converter === '3to2') {
      firstText = <h3>Python-3</h3>
      secondText = <h3>Python-2</h3>
    } else {
      firstText = <h3>Python-2</h3>
      secondText = <h3>Python-3</h3>
    }
    return (
        <Box px={3}>
          <Grid container spacing={6}>
            <Grid item xs={6} container alignItems = "center">
              <Grid>{firstText}</Grid>
              <Grid>
              <Button 
                  variant="contained" 
                  color="primary" 
                  size="small" 
                  onClick={() => {navigator.clipboard.writeText(this.props.python_3_code)}}
              >COPY
              </Button>
              </Grid>
            </Grid>
            <Grid item xs={6} container alignItems = "center">
              <Grid>{secondText}</Grid>
              <Grid>
              <Button 
                  variant="contained" 
                  color="primary" 
                  size="small" 
                  onClick={() => {navigator.clipboard.writeText(this.props.python_2_code)}}
              >COPY
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
    );
  }
}

export default Label;
