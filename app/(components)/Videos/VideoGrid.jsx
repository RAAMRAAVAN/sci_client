'use client';

import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';

const videoUrlMain = "https://www.youtube.com/embed/xziy2MCp95U?si=iqrifFRxc0Tf2d-7";

// const videoUrl = "https://www.youtube.com/embed/7D4vNcK6D38?si=7dZy2FG3Fumk2YCL";

const VideoGrid = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        // backgroundColor: '#444',
        margin:'10px 0 20px 0',
        width: '100%',
      }}
    >
      {/* Left Box (25%) */}
      <Grid container direction="column" spacing={2} sx={{ width: '25%' }}>
        <Grid item>
          <Box>
          <iframe
            width="90%"
            height="180"
            src={videoUrlMain}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{borderRadius:'10px'}}
          /> 
          </Box>
        </Grid>
        <Grid item>
          <Box>
          <img src={`SCI/video/dummy.png`} style={{borderRadius:'5px'}}/>
          </Box>
        </Grid>
      </Grid>

      {/* Center Main Box (50%) */}
      <Box sx={{ width: '50%', margin:'auto' }} >
        <Box>

        <video width="640" height="360" controls>
          <source src="SCI/video/SCI-OT.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        </Box>
      </Box>

      {/* Right Box (25%) */}
      <Grid container direction="column" spacing={2} sx={{ width: '25%' }}>
        <Grid item>
          <Box sx={{ borderRadius:'5px' }}>
            <img src={`SCI/video/dummy.png`} style={{borderRadius:'5px'}}/>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ borderRadius:'5px' }}>
            <img src={`SCI/video/dummy.png`} style={{borderRadius:'5px'}}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoGrid;
