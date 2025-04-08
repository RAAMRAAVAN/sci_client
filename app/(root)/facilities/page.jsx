import { Box, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import Facilities from "../../(components)/FacilitiesNew/FacilityData"
import { API, HName } from "@/app/(components)/Global";

const page = () => {
    const HoName = HName;
    return (<>
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <ExportedImage src={`/${HoName}Facilities/facilities_bg.jpg`} alt="background" fill style={{ objectFit: "cover" }} quality={100}/>
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
                <Typography  variant="h4" fontWeight="bold" textshadow="2px 2px 10px rgba(0,0,0,0.5)" paddingX={3}>
                    Facilities
                </Typography>
            </Box>
        </Box>
        <Box sx={{padding:{md:4, sm: 0}}}>
            <Facilities/>
        </Box>
    </>)
}
export default page;