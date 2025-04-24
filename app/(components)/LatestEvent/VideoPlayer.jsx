import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Box, Typography } from "@mui/material";

const VideoPlayer = ({ url, title ='Integrated Robotic Surgery Facility'}) => {
    const [key, setKey] = useState(0); // Use a state to force reset the player

    // Function to handle the end of the video and restart it
    const handleEnded = () => {
        setKey(prevKey => prevKey + 1); // Update the key to force the player to reset
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Typography marginLeft={1} fontSize='12px'  gutterBottom>Integrated Robotic Surgery Facility</Typography>
            <Box
                sx={{
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    overflow: 'hidden',
                    boxShadow: 3,
                }}
            >
                <ReactPlayer
                    key={key} // This key change forces the player to restart
                    url={url}
                    controls
                    playing  // autoplay
                    muted    // required for autoplay
                    onEnded={handleEnded} // handle video end event to restart
                    width="100%"
                    height="100%"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />
            </Box>
        </Box>
    );
};

export default VideoPlayer;
