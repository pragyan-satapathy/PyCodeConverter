import React, {Component} from 'react';
import Python3to2 from './python3to2';
import Python2to3 from './python2to3';
import Label from './label';

class TabPanel extends Component {
    render() {
        return (
            <div>
            {
                this.props.value === this.props.index && this.props.index === 0 && (
                    <div>
                        <Label
                            python_3_code={this.props.python_3_code}
                            python_2_code={this.props.python_2_code}
                            which_converter={this.props.which_converter}
                        ></Label>
                        <Python3to2
                            python_3_code={this.props.python_3_code}
                            python_2_code={this.props.python_2_code}
                            handlePython_3_code={this.props.handlePython_3_code}
                            getPyhton2Code={this.props.getPyhton2Code}
                        ></Python3to2>
                    </div>
                )
            }
            {
                this.props.value === this.props.index && this.props.index === 1 && (
                    <div>
                        <Label
                            python_3_code={this.props.python_3_code}
                            python_2_code={this.props.python_2_code}
                            which_converter={this.props.which_converter}
                        ></Label>
                        <Python2to3
                            python_3_code={this.props.python_3_code}
                            python_2_code={this.props.python_2_code}
                            handlePython_2_code={this.props.handlePython_2_code}
                            getPyhton3Code={this.props.getPyhton3Code}
                        ></Python2to3>
                    </div>
                )
            }
        </div>
        );
    }
}
    
export default TabPanel;