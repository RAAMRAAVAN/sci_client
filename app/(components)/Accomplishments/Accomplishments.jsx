'use client'
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Font } from "../Global";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    // Get ordinal suffix
    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return 'th';
      switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    return `${day}${getOrdinal(day)} ${month} ${year}`;
  }

const Accomplishments = ({ accomplishments }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // True for mobile screens

    return (<>
        <Box display='flex' width='100%' justifyContent='center'>
            <Typography  zIndex={2} color="black" textAlign='center'>As on {formatDate(accomplishments.date)}</Typography>
        </Box>
        <Box display="flex" width="100%" justifyContent="center">

            {isMobile ? (
                <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true }}>
                    <SwiperSlide>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            padding={2}
                        >
                            <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                                <ExportedImage src={`/Accomplishments/people.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </Box>
                            <Typography  variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                                {accomplishments.patient_footfall}
                            </Typography>
                            <Typography  borderTop="1px solid gray" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                                Patient Footfall
                            </Typography>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            padding={2}
                        >
                            <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                                <ExportedImage src={`/Accomplishments/chemo.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </Box>
                            <Typography  variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                                {accomplishments.chemo_session}
                            </Typography>
                            <Typography  borderTop="1px solid gray" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                                Chemo Session
                            </Typography>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            padding={2}
                        >
                            <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                                <ExportedImage src={`/Accomplishments/radiation.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </Box>
                            <Typography  variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                                {accomplishments.radiation_session}
                            </Typography>
                            <Typography  borderTop="1px solid gray" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                                Radiation Session
                            </Typography>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            padding={2}
                        >
                            <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                                <ExportedImage src={`/Accomplishments/doctors.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </Box>
                            <Typography  variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                                {accomplishments.total_doctors}
                            </Typography>
                            <Typography  borderTop="1px solid gray" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                                Doctors
                            </Typography>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            ) : (
                <Grid container justifyContent="center" width="80%" padding={2} marginY={3} spacing={3}>
                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                        }}
                    >
                        <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                            <ExportedImage src={`/Accomplishments/people.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </Box>
                        <Typography  variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            {accomplishments.patient_footfall}
                        </Typography>
                        <Typography  borderTop="1px solid lightgray" color="black" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                            Patient Footfall
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                        }}
                    >
                        <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                            <ExportedImage src={`/Accomplishments/chemo.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </Box>
                        <Typography  variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            {accomplishments.chemo_session}
                        </Typography>
                        <Typography  borderTop="1px solid lightgray" color="black" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                            Chemo Session
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                        }}
                    >
                        <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                            <ExportedImage src={`/Accomplishments/radiation.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </Box>
                        <Typography  variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            {accomplishments.radiation_session}
                        </Typography>
                        <Typography  borderTop="1px solid lightgray" color="black" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                            Radiation Session
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                        }}
                    >
                        <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                            <ExportedImage src={`/Accomplishments/doctors.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </Box>
                        <Typography  variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            {accomplishments.total_doctors}
                        </Typography>
                        <Typography  borderTop="1px solid lightgray" color="black" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                            Doctors
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </Box></>
    );
};

export default Accomplishments;
