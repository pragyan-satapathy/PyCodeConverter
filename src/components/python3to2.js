import React, {Component} from 'react';
import { 
  TextField,
  Box,
  Grid,
  Button,
} from '@material-ui/core';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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
                  backgroundColor: "#ffd180",
                }}
              />
               <Button 
                  variant="contained" 
                  color="primary" 
                  size="small" 
                  onClick={() => navigator.clipboard.writeText(this.props.python_3_code)}
                  style={{position: 'absolute', right: 40, top: 15}}
              >COPY <ContentCopyIcon />
              </Button>
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
                    backgroundColor: "#ffd180"
                  }}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="small" 
                  onClick={() => navigator.clipboard.writeText(this.props.python_2_code)}
                  style={{position: 'absolute', right: 40, top: 15}}
                >COPY <ContentCopyIcon />
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems = "center">
        <Grid item xs={12} align = "center">
            <Button
             variant="contained" 
             color="primary" 
             size="small" 
             onClick={this.props.getPyhton2Code}>
              CONVERT
            </Button>
          </Grid>
        </Grid>
      </Box >
    );
  }
}

export default Python3to2;