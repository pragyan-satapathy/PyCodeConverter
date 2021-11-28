import React, {Component} from 'react';
import { 
  TextField,
  Box,
  Grid,
} from '@material-ui/core';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CustomButton from './button';

class Python3to2 extends Component  {
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
               <CustomButton
                  onClick={() => navigator.clipboard.writeText(this.props.python_3_code)}
                  style={{position: 'absolute', right: 40, top: 15}}
              >COPY <ContentCopyIcon fontSize='2'/>
              </CustomButton>
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
                <CustomButton 
                  onClick={() => navigator.clipboard.writeText(this.props.python_2_code)}
                  style={{position: 'absolute', right: 40, top: 15}}
                >COPY <ContentCopyIcon fontSize='2'/>
                </CustomButton>
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
