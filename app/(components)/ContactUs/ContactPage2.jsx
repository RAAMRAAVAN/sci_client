'use client'
import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Facebook, Instagram, LocationCity, Mail, Phone, ShareOutlined, Twitter, WhatsApp, X, YouTube } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import { Font, ContactColor } from "../Global";
import { FiPhone } from "react-icons/fi";
import { RiShareLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";

const ContactPage = () => {
    // const HospitalDetails = useHospital();
    const HospitalDetails = useSelector(selectHospitalDetails);
    if (!HospitalDetails) {
        return <Typography textAlign="center" mt={5}>Loading...</Typography>;
    }

    return (
        <Box
            display="flex"
            width="100%"
            sx={{
                position: 'relative',
                p: { md: 2, xs: 0 },
                marginBottom: 5,
                height: { md: '105vh' },
                overflow: 'hidden',

                // Pseudo-element for background blur
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url(/background.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: 'blur(4px)',
                    zIndex: 0,
                },
            }}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            {/* Black Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // adjust opacity as needed
                    zIndex: 1,
                }}
            />
            <Box sx={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" my={1} fontWeight="bold" color="white">Contact Us</Typography>
                <Typography my={1} mx={1} textAlign="center" color="white" fontWeight='bold' display='flex'>
                    We would love to hear from you!
                </Typography>
                <Grid container width='100%' marginTop={5} height='100%' justifyContent='center' sx={{ paddingX: 1 }}>
                    <Grid item md={4} sm={12} marginBottom={5} sx={{ padding: '0px', marginRight: { md: '30px' }, backgroundColor: 'rgba(243, 239, 239, 1)' }} display='flex' flexDirection='column' width='100%' borderRadius={5} >
                        <Box padding={3}>
                            <Typography fontFamily='Montserrat,sans-serif' fontWeight='600' fontSize='20px' color="#454545">Talk to Us</Typography>
                        </Box>
                        <Box paddingX={3} paddingBottom={2} display='flex' component="a"
                            href={`tel:${HospitalDetails.PhoneNumber || ""}`} sx={{ cursor: "pointer", '&:hover': { color: 'black' } }}>
                            <Box
                                sx={{
                                    width: 70,
                                    height: 70,
                                    clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                                    backgroundColor: ContactColor, // border color
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 2,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        backgroundColor: 'rgba(243, 239, 239, 1)',
                                        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {/* <Phone sx={{ fontSize: 30, color: ContactColor }} /> */}
                                    <FiPhone style={{ color: ContactColor, fontSize: 30 }} />
                                </Avatar>
                            </Box>


                            <Box>
                                <Typography fontWeight='bold' color="#58595b">Phone Number</Typography>
                                <Box display='flex' alignItems='baseline' sx={{ flexDirection: 'column' }}>
                                    <Typography color="#58595b" fontWeight='bold' fontSize={13} marginRight={1}>Call Us Toll Free: </Typography>
                                    <Typography color="#58595b">+91 18003454325</Typography>
                                </Box>
                                <Typography color="#58595b" fontWeight='bold' fontSize={12}>(9:00 AM to 5:00 PM IST, Monday to Saturday)</Typography>
                            </Box>
                        </Box>
                        <Box display='none' width='100%' borderTop='0.2px #B0B0B0 solid'></Box>
                        <Box paddingX={3} paddingY={2} display='none'>
                            <Box
                                sx={{
                                    width: 70,
                                    height: 70,
                                    clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                                    backgroundColor: ContactColor, // border color
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 2,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        backgroundColor: 'rgba(243, 239, 239, 1)',
                                        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {/* <Phone sx={{ fontSize: 30, color: ContactColor }} /> */}
                                    <GrLocation style={{ color: ContactColor, fontSize: 35 }} />
                                </Avatar>
                            </Box>
                            <Box>
                                <Typography fontWeight='bold' color="#58595b">Walk In</Typography>
                                <Typography color="#58595b" fontSize={12}>State Cancer Institute, Opposite GMCH, GMC Hospital Rd, Bhangagarh , Guwahati, Assam 781032</Typography>
                            </Box>
                        </Box>
                        <Box display='flex' width='100%' borderTop='0.2px #B0B0B0 solid'></Box>
                        <Box paddingX={3} paddingY={2} display='flex'>
                            <Box
                                sx={{
                                    width: 70,
                                    height: 70,
                                    clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                                    backgroundColor: ContactColor, // border color
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 2,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        backgroundColor: 'rgba(243, 239, 239, 1)',
                                        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {/* <Phone sx={{ fontSize: 30, color: ContactColor }} /> */}
                                    <RiShareLine style={{ color: ContactColor, fontSize: 30 }} />
                                </Avatar>
                            </Box>
                            <Box>
                                <Typography fontWeight='bold' color="#58595b">Follow us</Typography>
                                <Box>
                                    <Facebook sx={{ color: '#58595b', marginRight: 1, cursor: 'pointer' }} onClick={() => window.open(HospitalDetails.Facebook, "_blank")} />
                                    <X sx={{ color: '#58595b', marginRight: 1, cursor: 'pointer' }} onClick={() => window.open(HospitalDetails.Twitter, "_blank")} />
                                    <Instagram sx={{ color: '#58595b', marginRight: 1, cursor: 'pointer' }} onClick={() => window.open(HospitalDetails.Insta, "_blank")} />
                                    <YouTube sx={{ color: '#58595b', fontSize: 30, marginRight: 1, cursor: 'pointer' }} onClick={() => window.open("/", "_blank")} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={7} sm={12} marginBottom={5} sx={{ backgroundColor: 'rgba(243, 239, 239, 1)' }} display='flex' flexDirection='column' width='100%' borderRadius={5} backgroundColor='#f6f6f6'>

                        <Box paddingX={3} marginY={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="filled-required"
                                        label="Name"
                                        defaultValue=""
                                        placeholder="Enter Your Name"
                                        variant="filled"
                                        fullWidth
                                        focused
                                        color="#58595b"
                                        InputLabelProps={{
                                            sx: {
                                                color: '#58595b',           // Label color
                                                fontWeight: 'bold',         // Label styling
                                                fontSize: '18px',
                                            }
                                        }}
                                        InputProps={{
                                            sx: {
                                                '&::placeholder': {
                                                    color: 'black',         // Not directly applied unless using inputProps
                                                },
                                                color: '#58595b',              // Input text color
                                                marginY: '10px',
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                color: 'black',              // Actual input text color
                                                fontSize: '13px',
                                                backgroundColor: 'rgba(243, 239, 239, 1)'
                                            },
                                            placeholder: "Enter Your Name", // Needed here for styling placeholder
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="filled-required"
                                        label="E-mail"
                                        defaultValue=""
                                        placeholder="Enter Your E-mail"
                                        variant="filled"
                                        fullWidth
                                        focused
                                        color="#58595b"
                                        InputLabelProps={{
                                            sx: {
                                                color: '#58595b',           // Label color
                                                fontWeight: 'bold',         // Label styling
                                                fontSize: '18px',
                                            }
                                        }}
                                        InputProps={{
                                            sx: {
                                                '&::placeholder': {
                                                    color: 'black',         // Not directly applied unless using inputProps
                                                },
                                                color: '#58595b',              // Input text color
                                                marginY: '10px',
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                color: 'black',              // Actual input text color
                                                fontSize: '13px',
                                                backgroundColor: 'rgba(243, 239, 239, 1)'
                                            },
                                            // placeholder: "Enter Your Name", // Needed here for styling placeholder
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="filled-required"
                                        label="Mobile No."
                                        defaultValue=""
                                        placeholder="Enter Your Phone Number"
                                        variant="filled"
                                        fullWidth
                                        focused
                                        color="#58595b"
                                        // paddingTop={3}
                                        InputLabelProps={{
                                            sx: {
                                                color: '#58595b',           // Label color
                                                fontWeight: 'bold',         // Label styling
                                                fontSize: '18px',
                                                // paddingTop:1
                                            }
                                        }}
                                        InputProps={{
                                            sx: {
                                                '&::placeholder': {
                                                    color: 'black',         // Not directly applied unless using inputProps
                                                },
                                                color: '#58595b',              // Input text color
                                                marginY: '10px',
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                color: 'black',              // Actual input text color
                                                fontSize: '13px',
                                                backgroundColor: 'rgba(243, 239, 239, 1)'
                                            },
                                            // placeholder: "Enter Your Name", // Needed here for styling placeholder
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography color='#58595b' marginBottom={1} fontWeight='bold' fontSize='14px' marginLeft={1}>Your Message*</Typography>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline

                                        rows={3}
                                        placeholder="Enter Your Message Here"
                                        fullWidth
                                        focused
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: '#fff',
                                                borderRadius: '12px',
                                                '&:hover fieldset': {
                                                    borderColor: '#58595b', // Border color on hover
                                                    borderWidth: '1px',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#58595b', // Border color when focused
                                                    borderWidth: '1px',
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#58595b', // Label color
                                                borderWidth: '1px',
                                            },
                                            '& .MuiOutlinedInput-input': {
                                                fontSize: '12px',
                                                color: '#58595b', // Text color
                                                borderWidth: '1px',
                                                '&::placeholder': {
                                                    color: 'black !important',   // Placeholder color
                                                    fontSize: '14px', // Placeholder font size
                                                },
                                            },
                                        }}
                                    />

                                </Grid>
                            </Grid>

                        </Box>
                        <Box display='flex' justifyContent='center' width='100%' marginBottom={2}>
                            <Box>
                                <Button variant="contained" size="large" sx={{ bgcolor: ContactColor, fontWeight: 'bold', textTransform: 'none', borderRadius: '20px', marginX: 1, paddingX: 5, paddingY: 1, fontSize: 13 }}>Submit</Button>
                                {/* <Button variant="contained" sx={{ bgcolor: ContactColor, fontWeight: 'bold', textTransform: 'none', borderRadius: '20px', marginX: 1 }}>Feedback</Button> */}
                                {/* <Button variant="contained" sx={{ bgcolor: ContactColor, fontWeight: 'bold', textTransform: 'none', borderRadius: '20px', marginX: 1 }}>Others</Button> */}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default ContactPage;