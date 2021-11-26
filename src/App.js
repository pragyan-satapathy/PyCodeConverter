import React, {Component} from 'react';
import { 
  Box,
  Toolbar,
  Typography,
} from '@material-ui/core';
import TabBar from './components/tabBar';

class App extends Component  {
  constructor() {
    super();
    this.state = {
        python_3_code: '',
        python_2_code: '',
        which_converter: '3to2',
        loading3to2: false,
        loading2to3: false,
    };
    this.handlePython_3_code = this.handlePython_3_code.bind(this);
    this.handlePython_2_code = this.handlePython_2_code.bind(this);
    this.getPyhton2Code = this.getPyhton2Code.bind(this);
    this.getPyhton3Code = this.getPyhton3Code.bind(this);
    this.clearStateOnTabChange = this.clearStateOnTabChange.bind(this);
  }
  handlePython_3_code(event) {
    this.setState({python_3_code: event.target.value});
  }
  handlePython_2_code(event) {
    this.setState({python_2_code: event.target.value});
  }
  clearStateOnTabChange() {
    this.setState({python_3_code: ''});
    this.setState({python_2_code: ''});
  }
  async getPyhton2Code() {
    try {
      this.setState({loading3to2: true});
      const response = await fetch(process.env.REACT_APP_CONVERTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "convert_key":"3to2",
          "code":`${this.state.python_3_code}`

        }),
      });
      const data = await response.json()
      
      const final_res = 
      (data.error_client) ?
        'Please check your code. There might have some syntax error!'
      : (data.error_server) ?
        'Sorry, there is some error from the server-side!'
      : data['code']

      this.setState({ python_2_code: final_res });
    } catch (error) {
      console.log('catch',error);
    } finally {
      this.setState({loading3to2: false});
    }
  }
  async getPyhton3Code() {
    try {
      this.setState({loading2to3: true});
      const response = await fetch(process.env.REACT_APP_CONVERTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "convert_key":"2to3",
          "code":`${this.state.python_2_code}`
        }),
      });
      const data = await response.json()
      
      const final_res = 
      (data.error_client) ?
        'Please check your code. There might have some syntax error!'
      : (data.error_server) ?
        'Sorry, there is some error from the server-side!'
      : data['code']

      this.setState({ python_3_code: final_res });
    } catch (error) {
      console.log('catch',error);
    } finally {
      this.setState({loading2to3: false});
    }
  }

  render() {
    return (
      <Box style={{ background: '#f5f5f5', height: '100vh' }}>
        <Toolbar style={{ background: '#2E3B55',color: 'white' }}>
          <Typography variant="h5">Python Code Converter</Typography>
        </Toolbar>
        <TabBar
          python_3_code={this.state.python_3_code}
          python_2_code={this.state.python_2_code}
          which_converter={this.state.which_converter}
          loading3to2={this.state.loading3to2}
          loading2to3={this.state.loading2to3}
          handlePython_3_code={this.handlePython_3_code}
          handlePython_2_code={this.handlePython_2_code}
          getPyhton2Code={this.getPyhton2Code}
          getPyhton3Code={this.getPyhton3Code}
          clearStateOnTabChange={this.clearStateOnTabChange}
        ></TabBar>
      </Box >
    );
  }
}

export default App;
