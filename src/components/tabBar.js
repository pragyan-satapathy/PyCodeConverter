import React, {Component} from 'react';
import {
    Box,
    Tabs,
    Tab,
    Paper
} from '@material-ui/core';
import TabPanel from './tabPanel';

class TabBar extends Component {
    constructor() {
        super();
        this.state = {
            tab_value: 0,
        };
        this.handleTabs = this.handleTabs.bind(this);
    }
    handleTabs(e,val) {
        this.setState({tab_value: val});
    }
    render() {
        return (
            <Box>
              <Paper>
                <Tabs value={this.state.tab_value} onChange={this.handleTabs} variant="fullWidth">
                    <Tab label = 'Python3 -> Python2'></Tab>
                    <Tab label = 'Python2 -> Python3'></Tab>
                </Tabs>
              </Paper>
              <TabPanel 
                value={this.state.tab_value} 
                index={0}
                python_3_code={this.props.python_3_code}
                python_2_code={this.props.python_2_code}
                which_converter={this.props.which_converter}
                handlePython_3_code={this.props.handlePython_3_code}
                getPyhton2Code={this.props.getPyhton2Code}
                >tab 1</TabPanel>
              <TabPanel 
                value={this.state.tab_value} 
                index={1}
                python_3_code={this.props.python_3_code}
                python_2_code={this.props.python_2_code}
                which_converter='2to3'
                handlePython_2_code={this.props.handlePython_2_code}
                getPyhton3Code={this.props.getPyhton3Code}
                >tab 2</TabPanel>
            </Box>
        );
    }
}
    
export default TabBar;

    