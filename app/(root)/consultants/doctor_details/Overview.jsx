'use client';
import { ExpandCircleDownRounded, LocationCity, Share } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ExportedImage from "next-image-export-optimizer";
import dayjs from "dayjs";
import { useState } from "react";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Loader from "@/app/(components)/Loader";
import { DoctorDetails } from "@/app/(components)/Global";
import '@/lib/custom-dayjs-locale'
import DINCModal from "@/app/(components)/DoctorCard/DINCModal";
import { useSelector } from "react-redux";
import { selectDoctorById, selectDoctorID, selectDoctorsAvailability } from "@/redux/features/doctorSlice";
//font size 20, view profile
const handleShare = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Doctor Profile",
                text: "Check out this doctor's profile!",
                url: window.location.href, // Current page URL
            });
            console.log("Successfully shared");
        } catch (error) {
            console.error("Error sharing:", error);
        }
    } else {
        alert("Sharing is not supported on this device.");
    }
};

const Overview = () => {
    const doctorDetails = useSelector(selectDoctorById());
    const DoctorsAvailability = useSelector(selectDoctorsAvailability);
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [value, setValue] = useState(dayjs());
    const today = dayjs();
    // const highlightDays = [1];
    const try1 = { opd_days: [1,2,3,4,5] }
    if (!DoctorsAvailability) return (<Loader />)
    return (
        <Box display="flex" width="100%" flexDirection="column" alignItems='center'>
            <DINCModal open={open} handleClose={() => setOpen(false)} doctorDetails={doctorDetails} />
            <Grid container width='100%' sx={{ backgroundColor: "#f8f8f8", paddingX: 2 }} justifyContent='space-between'>
                {/* Doctor Image */}
                <Grid item md={4} xs={12} display="flex" justifyContent="center" alignItems="end" position='relative'>
                    <Box
                        display="flex"
                        width="300px"
                        // height="400px"
                        // overflow="hidden"
                        zIndex={1}
                        border={`3px ${DoctorDetails} solid`}
                    >   {doctorDetails.doctor_image ? <ExportedImage
                        // src={`/${doctorDetails.path}`}
                        src={`https://barpetacancercentre.org/images/allLocationDoctors/${doctorDetails.doctor_image}`}
                        alt={`/Doctors/doctor_image.webp`}
                        width={300}
                        height={400}
                    // style={{ objectFit: "cover" }}
                    /> : <ExportedImage
                        // src={`/${doctorDetails.path}`}
                        src={`/Doctors/doctor_image.webp`}
                        alt="Doctor Image"
                        width={300}
                        height={400}
                    // style={{ objectFit: "cover" }}
                    />}

                    </Box>
                    {/* <Box position='absolute' width='300px' height='300px' padding={3} border='1px black dashed' borderRadius='50%' top={70}>
                        <Box width='100%' height='100%' backgroundColor='#bf1e2e' borderRadius='50%'></Box>
                    </Box> */}
                </Grid>

                {/* Doctor Details */}
                <Grid item md={4} xs={12} display="flex" flexDirection="column" justifyContent="center" gap={1} padding={1}>
                    <Typography  fontWeight="bolder" fontSize={24} style={{fontFamily: `@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
`}}>{doctorDetails.name}</Typography>
                    <Typography >{doctorDetails.designation}</Typography>
                    <Typography >{doctorDetails.specializations || ''}</Typography>
                    <Typography >{doctorDetails.depertment || ""}</Typography>
                    <Typography  marginY={1}>{doctorDetails.qualifications || ''}</Typography>
                    <Typography  display="flex" sx={{ visibility: 'hidden' }} alignItems="center">
                        <LocationCity sx={{ marginRight: 1 }} /> {doctorDetails.location || 'location'}
                    </Typography>
                    <Button variant="contained" startIcon={<Share />} sx={{ mt: 1, visibility: 'hidden' }} onClick={handleShare}>
                        Share Doctor Profile
                    </Button>
                </Grid>

                {/* Calendar Section */}

                <Grid item md={4} xs={12} display="flex" justifyContent="center" alignItems="center">
                    {doctorDetails.opd_days ? (doctorDetails.opd_days.length !== 0 ? <Box backgroundColor='white' sx={{ borderRadius: '20px 20px 0px 0px' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                minDate={today}
                                showDaysOutsideCurrentMonth={true}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '350px',
                                    height: '500px',  // ✅ Increased height here
                                    // border: '1px solid black',
                                    overflow: 'hidden',// Prevents scrollbars if content overflows
                                    '.MuiDayCalendar-weekDayLabel': {
                                        fontWeight: 'bold',
                                        margin: '4px',// ⬅️ this makes weekday labels bold
                                    }
                                }}
                                slots={{
                                    day: (props) => {
                                        const { day, selectedDays, ...other } = props;
                                        const isHighlighted = doctorDetails.opd_days.includes(day.day());
                                        // const isOutsideMonth = day.month() !== value.month();
                                        return (
                                            <PickersDay
                                                {...other}
                                                day={day}
                                                selected={selectedDays?.includes(day)}
                                                // disabled
                                                sx={{
                                                    color: !isHighlighted ? '#58595b' : 'white',
                                                    fontWeight: 'bold',
                                                    pointerEvents: !isHighlighted ? 'none' : 'auto',
                                                    backgroundColor: !isHighlighted
                                                        ? '#f8f8f8'
                                                        : DoctorDetails,
                                                    cursor: !isHighlighted ? 'not-allowed' : 'pointer',
                                                    margin: '4px',
                                                    minWidth: '36px',
                                                    minHeight: '36px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                    '&:hover': {
                                                        backgroundColor: DoctorDetails,
                                                    },
                                                    '&.Mui-selected': {
                                                        backgroundColor: 'red important', // Set the selected date background to red
                                                        color: 'white !important',
                                                    },
                                                }}
                                            />
                                        );
                                    },
                                }}
                            />
                            <Button onClick={() => setOpen(true)} variant="contained" fullWidth sx={{ borderRadius: '0 0px 20px 20px', backgroundColor: DoctorDetails, py: 2 }}>
                                Book Appointment <ExpandCircleDownRounded sx={{ transform: "rotate(270deg)", marginLeft: 1 }} />
                            </Button>
                        </LocalizationProvider>
                    </Box> : <></>) : <></>}
                    {/* {try1.opd_days?.length !== 0 ?  : <></>
                    } */}
                </Grid>

            </Grid>
            <Box display='felx' width='90%' marginTop={5}>
                <Typography  fontWeight='bold' paddingX={1} >About Dr. Sudhir Dubey</Typography>
            </Box>
            <Grid container display='flex' width='90%' paddingY={1} paddingX={1}>
                <Grid item md={2} xs={12} display='flex' padding={1}>
                    <Typography  fontWeight='bold' fontSize='14px' color="gray">Achievements:
                        <Typography  fontSize='14px' color="gray">{doctorDetails.achievements}</Typography>
                    </Typography>

                </Grid>
                <Grid item md={2} xs={12} display='flex' padding={1} sx={{ borderTop: { xs: '1px lightgray solid', md: 'none' }, borderBottom: { xs: '1px lightgray solid', md: 'none' }, borderLeft: { xs: 'none', md: '1px lightgray solid' }, borderRight: { xs: 'none', md: '1px lightgray solid' } }}>
                    <Typography  fontWeight='bold' fontSize='14px' color="gray">Awards:
                        <Typography  fontSize='14px' color="gray">{doctorDetails.awards}</Typography>
                    </Typography>
                </Grid>
                <Grid item md={2} xs={12} display='flex' padding={1}>
                    <Typography  fontWeight='bold' fontSize='14px' color="gray">Speciality:
                        <Typography  fontSize='14px' color="gray">{doctorDetails.specializations}</Typography>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container display='flex' width='90%' marginTop={1} marginBottom={5}>
                <Grid item md={6} xs={12}>
                    <Typography  textAlign='justify' color="gray">
                        {doctorDetails.profile_details}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Overview;
