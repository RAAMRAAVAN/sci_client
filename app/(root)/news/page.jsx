import { Box, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import Entries from "./entries";
import { API, HName } from "@/app/(components)/Global";
import VideoGrid from "@/app/(components)/Videos/VideoGrid";

const page = async () => {
    const HoName = HName;
    return (<>
        <Box display="none" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <ExportedImage src={`${HoName}News/newsEventsBack.jpg`} alt="background" fill style={{ objectFit: "cover" }} quality={100} />
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                    color: "white",
                    padding: "12px 0",
                }}
            >
                <Typography variant="h4" fontWeight="bold" textshadow="2px 2px 10px rgba(0,0,0,0.5)" paddingX={3}>
                    NEWS & EVENTS
                </Typography>
            </Box>
        </Box>
        <Box display="flex" justifyContent="center" marginY={4}>
            <Entries />
        </Box>
        <Box display='flex' width='100%' justifyContent='center'>
            <Box display='flex' width='90%' flexDirection='column' marginTop={2}>
                <Typography variant="h5" fontWeight="bold" marginBottom={3}>
                    Our Stories
                </Typography>
                {/* <Suspense> */}
                    <VideoGrid />
                {/* </Suspense> */}
            </Box>
        </Box>
    </>)
}
export default page;