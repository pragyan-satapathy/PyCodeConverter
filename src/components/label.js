import React, {Component} from 'react';
import { 
  Box,
  Grid,
  Button,
} from '@material-ui/core';

class Label extends Component  {
  constructor() {
    super()
    this.firstCopy = this.firstCopy.bind(this);
    this.secondCopy = this.secondCopy.bind(this);
  }
  firstCopy(){
    if (this.props.which_converter === '3to2') {
      navigator.clipboard.writeText(this.props.python_3_code)
    }
    else {
      navigator.clipboard.writeText(this.props.python_2_code)
    }
  }
  secondCopy(){
    if (this.props.which_converter === '3to2') {
      navigator.clipboard.writeText(this.props.python_2_code)
    }
    else if (this.props.which_converter === '2to3') {
      navigator.clipboard.writeText(this.props.python_3_code)
    }
  }
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
              <Grid>
              <Button 
                  variant="contained" 
                  color="primary" 
                  size="small" 
                  onClick={this.firstCopy}
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
                  onClick={this.secondCopy}
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
