import React, {Component} from 'react';
import { 
  TextField,
  Box,
  Grid,
} from '@material-ui/core';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CustomButton from './button';

class Python3to2 extends Component  {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  render() {
    return (
        <Box>
        <Grid container>
          <Grid item xs={6}>
            <Box p={3} pt={0}>
            <div style={{position: 'relative', }}>
              <TextField
                m = {3}
                multiline
                variant="outlined"
                color='primary'
                fullWidth
                minRows='15'
                maxRows='15'
                defaultValue={this.props.python_3_code} 
                onChange={this.props.handlePython_3_code}
                style={{
                  backgroundColor: "#FFFFFF",
                }}
              />
               {(this.state.width > 768) && <CustomButton
                  onClick={() => navigator.clipboard.writeText(this.props.python_3_code)}
                  style={{position: 'absolute', right: 40, top: 15}}
              >COPY <ContentCopyIcon fontSize='2'/>
              </CustomButton>}
              {(this.state.width < 768) && 
              <ContentCopyIcon 
              onClick={() => navigator.clipboard.writeText(this.props.python_3_code)}
                fontSize='2'
                style={{position: 'absolute', right: 10, top: 15, color: '#d8043b'}}
              /> }
            </div>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={3} pt={0}>
              <div style={{position: 'relative', }}>
                <TextField
                  m = {3}
                  multiline
                  variant="outlined"
                  color='primary'
                  fullWidth
                  minRows='15'
                  maxRows='15'
                  value={this.props.python_2_code}
                  inputProps={
                    { readOnly: true, }
                  }
                  style={{
                    backgroundColor: "#FFFFFF"
                  }}
                />
                {(this.state.width > 768) && 
                <CustomButton 
                  onClick={() => navigator.clipboard.writeText(this.props.python_2_code)}
                  style={{position: 'absolute', right: 40, top: 15}}
                >COPY <ContentCopyIcon fontSize='2'/>
                </CustomButton>}
                {(this.state.width < 768) && 
                <ContentCopyIcon
                  onClick={() => navigator.clipboard.writeText(this.props.python_2_code)}
                  fontSize='2'
                  style={{position: 'absolute', right: 10, top: 15, color: '#d8043b'}}
                /> }
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems = "center">
        <Grid item xs={12} align = "center">
          <CustomButton
            onClick={this.props.getPyhton2Code}
            disabled={this.props.loading3to2}
            style={{width: '180px',}}>
              {this.props.loading3to2 && 'LOADING...'}
              {!this.props.loading3to2 && 'CONVERT'}
          </CustomButton>
        </Grid>
      </Grid>
    </Box >
    );
  }
}

export default Python3to2;
