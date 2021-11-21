import React, {Component} from 'react';
import { 
  TextField,
  Box,
  Grid,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';

class App extends Component  {
  constructor() {
    super();
    this.state = {
        python_3_code: '',
        python_2_code: ''
    };
    this.handlePython_3_code = this.handlePython_3_code.bind(this);
    this.getPyhton2Code = this.getPyhton2Code.bind(this);
  }
  handlePython_3_code(event) {
    this.setState({python_3_code: event.target.value});
  }
  async getPyhton2Code() {
    try {
      const response = await fetch('http://removedoptparse-env.eba-evqeqawt.us-east-2.elasticbeanstalk.com/convert', {
        method: 'POST',
        body: this.state.python_3_code
      });
      const data = await response.text()
      this.setState({ python_2_code: data });
    } catch (error) {
      console.log('catch',error);
    } finally {
    }
  }

  render() {
    return (
      <Box>
        <Toolbar style={{ background: '#2E3B55',color: 'white' }}>
          <Typography variant="h5">Python Code Converter</Typography>
        </Toolbar>
        <Grid container style={{ background: '#f5f5f5', height: '100vh', }}>
          <Grid item xs={6}>
            <Box p={3}>
              <Grid container spacing={3}>
              <Grid item>
                <h3>Python-3</h3>
              </Grid>
              <Grid item>
                <Box mt={2}>
                <Button variant="contained" color="primary" size="small" onClick={this.getPyhton2Code}>
                  CONVERT
                </Button>
                </Box>
              </Grid>
              </Grid>
              <TextField
                m = {3}
                multiline
                variant="outlined"
                color='primary'
                fullWidth
                minRows='20'
                maxRows='20'
                defaultValue={this.state.python_3_code} 
                onChange={this.handlePython_3_code}
                style={{
                  backgroundColor: "#ffd180"
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={3}>
              <h3>Python-2</h3>
              <TextField
                m = {3}
                multiline
                variant="outlined"
                color='primary'
                fullWidth
                minRows='20'
                maxRows='20'
                value={this.state.python_2_code}
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
      </Box >
    );
  }
}

export default App;
