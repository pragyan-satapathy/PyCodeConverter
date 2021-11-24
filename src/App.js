import React, {Component} from 'react';
import { 
  Box,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Label from './components/label';
import Python3to2 from './components/python3to2';

class App extends Component  {
  constructor() {
    super();
    this.state = {
        python_3_code: '',
        python_2_code: '',
        which_converter: '3to2',
    };
    this.handlePython_3_code = this.handlePython_3_code.bind(this);
    this.getPyhton2Code = this.getPyhton2Code.bind(this);
  }
  handlePython_3_code(event) {
    this.setState({python_3_code: event.target.value});
  }
  async getPyhton2Code() {
    try {
      const response = await fetch(process.env.REACT_APP_CONVERTER, {
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
      <Box style={{ background: '#f5f5f5', height: '100vh' }}>
        <Toolbar style={{ background: '#2E3B55',color: 'white' }}>
          <Typography variant="h5">Python Code Converter</Typography>
        </Toolbar>
        <Label 
          python_3_code={this.state.python_3_code}
          python_2_code={this.state.python_2_code}
          which_converter={this.state.which_converter}></Label>
        <Python3to2 
          python_3_code={this.state.python_3_code}
          python_2_code={this.state.python_2_code}
          handlePython_3_code={this.handlePython_3_code}
          getPyhton2Code={this.getPyhton2Code}
        ></Python3to2>
      </Box >
    );
  }
}

export default App;
