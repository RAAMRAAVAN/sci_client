import { Box, Typography } from "@mui/material";
import { Suspense, lazy } from "react";
// import { fetchHomeContent} from "../../lib/fetchData";
import Loader from "../(components)/Loader";
import { HomeContent } from "@/lib/fetchData";
import DoctorSlider from '../(components)/DoctorCard/DoctorSlider'
import { Font } from "../(components)/Global";

const ImageSliderMain = lazy(() => import("../(components)/HomeImageSlider/ImageSliderMain"));
// const DoctorSlider = lazy(() => import("../(components)/DoctorCard/DoctorSlider"));
const Facilities = lazy(() => import("../(components)/Facilities/FacilityData"));
const AccomplishmentsMain = lazy(() => import("../(components)/Accomplishments/AccomplichmentsMain"));
const WhatsHappening = lazy(() => import("../(components)/WhatsHappening"));
const OurHospitals = lazy(() => import("../(components)/Hospitals/OurHospitalsPage"));
const VideoGrid = lazy(() => import("../(components)/Videos/VideoGrid"));
import TextCarousel from "../(components)/TextCarousel";

// ✅ Server Component
export default async function Home() {
  const homeContent = HomeContent;
  return (
    <>
    <TextCarousel />
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      boxShadow="5px 5px 15px rgba(0, 0, 0, 0.3)"
      marginBottom={3}
      sx={{ backgroundColor: '#f6f6f6', color: 'black' }}
      fontFamily='fantasy'
    >
      {/* Intro */}
      <Box display="flex" width="100%" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Suspense fallback={<Loader />}>
          <ImageSliderMain />
        </Suspense>
        <Box padding={2} sx={{ width: { xs: "100%", md: "40%" } }}>
          {homeContent ? (
            <>
              <Typography  variant="h6">{homeContent.heading}</Typography>
              <Typography  textAlign="justify">{homeContent.description}</Typography>
            </>
          ) : (
            <Loader />
          )}
        </Box>
      </Box>

      {/* Consultants Section */}
      <Box display='flex' width='100%' justifyContent='center'>
        <Box display='flex' width='90%' flexDirection='column'>
          <Typography  variant="h5" fontWeight="bold" marginTop={5}>
            Our Doctors
          </Typography>
        </Box>
      </Box>
      <Box marginX={1} display="flex" flexDirection='column'>
        <Suspense fallback={<Loader/>}>
          <DoctorSlider/>
        </Suspense>
      </Box>

      <Box marginY={5} textAlign="center" display="flex" justifyContent='center' flexDirection='column' >
        <Typography  color="brown" fontWeight="bolder" variant="h4" zIndex={2}>
          Our Accomplishments
        </Typography>
        <Box zIndex={2}>
          <Suspense fallback={<Loader />}>
            <AccomplishmentsMain />
          </Suspense>
        </Box>
      </Box>


      {/* Facilities */}
      <Box display='flex' width='100%' justifyContent='center'>
        <Box display='flex' width='90%' flexDirection='column'>
          <Typography  variant="h5" fontWeight="bold" marginY={2}>
            Facilities
          </Typography>
          <Suspense fallback={<Loader />}>
            <Facilities />
          </Suspense>
        </Box>
      </Box>

      {/* What's Happening */}
      <Suspense fallback={<Loader />}>
        <WhatsHappening />
      </Suspense>

      <Box display='flex' width='100%' justifyContent='center'>
        <Box display='flex' width='90%' flexDirection='column' marginTop={2}>
          <Typography  variant="h5" fontWeight="bold" marginBottom={3}>
            Our Stories
          </Typography>
          <Suspense>
            <VideoGrid />
          </Suspense>
        </Box>
      </Box>
      
      
      {/* Our Hospitals */}
      <Box display='flex' width='100%' justifyContent='center'>
        <Box display='flex' width='90%' flexDirection='column'>
          <Typography  variant="h5" fontWeight="bold" marginBottom={3}>
            ACCF Network
          </Typography>
          <Suspense fallback={<Loader />}>
            <OurHospitals />
          </Suspense>
        </Box>
      </Box>
    </Box>
    </>
  );
}
