import React, {Component} from 'react';
import { 
  Box,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import TabBar from './components/tabBar';

class App extends Component  {
  constructor() {
    super();
    this.state = {
        python_3_code: '',
        python_2_code: '',
        loading3to2: false,
        loading2to3: false,
        ip: [],
    };
    this.handlePython_3_code = this.handlePython_3_code.bind(this);
    this.handlePython_2_code = this.handlePython_2_code.bind(this);
    this.getPyhton2Code = this.getPyhton2Code.bind(this);
    this.getPyhton3Code = this.getPyhton3Code.bind(this);
    this.getIP = this.getIP.bind(this);
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



  async getIP() {
    try {
      const response = await fetch('https://api.pycodeconverter.com/myip', {
        method: 'GET',
      });
      const data = await response.text()
      
      const final_res = data
      this.setState({ ip: final_res });
      console.log("IP",this.state.ip)
    } catch (error) {
      console.log('catch',error);
    } finally {
    }
  }

  render() {
    return (
      <Box style={{ background: '#eceff1', height: '100vh' }}>
        {/* <Button onClick={this.getIP}>GET IP ADDRESS</Button>
        <p>{this.state.ip}</p> */}
        <Toolbar style={{ background: '#2E3B55',color: 'white' }}>
          <Typography variant="h5">Python Code Converter</Typography>
        </Toolbar>
        <TabBar
          python_3_code={this.state.python_3_code}
          python_2_code={this.state.python_2_code}
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
