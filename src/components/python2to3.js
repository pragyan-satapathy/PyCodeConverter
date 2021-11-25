import React, {Component} from 'react';
import { 
  TextField,
  Box,
  Grid,
  Button,
} from '@material-ui/core';

class Python2to3 extends Component  {
  render() {
    return (
        <Box>
        <Grid container>
          <Grid item xs={6}>
            <Box p={3} pt={0}>
              <TextField
                m = {3}
                multiline
                variant="outlined"
                color='primary'
                fullWidth
                minRows='20'
                maxRows='20'
                defaultValue={this.props.python_2_code} 
                onChange={this.props.handlePython_2_code}
                style={{
                  backgroundColor: "#ffd180"
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={3} pt={0}>
              <TextField
                m = {3}
                multiline
                variant="outlined"
                color='primary'
                fullWidth
                minRows='20'
                maxRows='20'
                value={this.props.python_3_code}
                inputProps={
                  { readOnly: true, }
                }
                style={{
                  backgroundColor: "#ffd180"
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems = "center">
        <Grid item xs={12} align = "center">
            <Button
             variant="contained" 
             color="primary" 
             size="small" 
             onClick={this.props.getPyhton3Code}>
              CONVERT
            </Button>
          </Grid>
        </Grid>
      </Box >
    );
  }
}

export default Python2to3;
