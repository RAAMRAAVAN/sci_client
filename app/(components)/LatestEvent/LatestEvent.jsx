'use client'

import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VideoPlayer from "./VideoPlayer";
const ContactUs = ({ open, handleClose }) => {
    return (
        <Box
            zIndex={10001}
            sx={{ pointerEvents: "none", display: open ? 'flex' : 'none' }} // Let clicks through Modal container
        >
            <Box
                sx={{
                    pointerEvents: "auto", // Enable interaction inside the modal content
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    width: "300px",
                    height: "193px",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    // borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)', // for Safari
                }}
            >
                {/* Close Button */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        bgcolor: "background.paper",
                        zIndex: 10,
                        // p: 1
                    }}
                // border='1px red solid'
                >
                    <IconButton onClick={handleClose} sx={{ padding: '0' }} >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Scrollable Content */}
                <Box
                    sx={{
                        overflowY: "auto",
                        flexGrow: 1,
                        // px: 2
                    }}
                    // border='1px black solid'
                    display='flex'
                    justifyContent='end'
                    alignItems='end'
                >
                    <VideoPlayer url="/SCI/LatestVideos/SCI-OT.mp4" title="" />
                </Box>
            </Box>
        </Box>
    );
}

export default ContactUs;
