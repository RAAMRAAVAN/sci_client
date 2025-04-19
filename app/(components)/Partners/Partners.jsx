'use client';

import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

const videoUrlMain = "https://www.youtube.com/embed/xziy2MCp95U?si=iqrifFRxc0Tf2d-7";

// const videoUrl = "https://www.youtube.com/embed/7D4vNcK6D38?si=7dZy2FG3Fumk2YCL";

const Partners = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        // backgroundColor: '#444',
        margin:'10px 0 20px 0',
        width: '100%',
        justifyContent:'center'
      }}
    >
      
        <Grid item>
          <Box>
            <img src={`SCI/Partners/bandhan.png`} style={{borderRadius:'5px',height:'100px'}}/>
            <Typography variant='h4' align='center'>Bandhan Bank</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <img src={`SCI/Partners/fedarel.png`} style={{borderRadius:'5px',height:'100px'}}/>
            <Typography variant='h4' align='center'>Federal Bank</Typography>
          </Box>
        </Grid>
      
    </Box>
  );
};

export default Partners;
