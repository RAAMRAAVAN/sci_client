'use client'
import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Facebook, Instagram, LocationCity, Mail, Phone, ShareOutlined, Twitter, WhatsApp, X, YouTube } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import { Font, ContactColor } from "../Global";

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
                background: "url(/SCI/Contact/background.jpg)",
                backgroundSize: "cover",         // Makes the image cover the entire area
                backgroundRepeat: "no-repeat",   // Prevents the image from repeating
                backgroundPosition: "center",    // Centers the image
                p: { md: 2, xs: 0 },
                marginBottom:5,
                height:{md:'105vh'}
            }}
            
            flexDirection="column"
            alignItems="center"
            justifyContent='center'
        >
            <Typography variant="h5" my={1} fontWeight="bold" color="white">Contact Us</Typography>
            <Typography my={1} mx={1} textAlign="center" color="white" fontWeight='bold' display='flex' sx={{width:{md:'50vw'}}}>
                We would love to hear from you! Please fill in the required details and our team will get in touch with you.
            </Typography>
            <Grid container width='100%' marginTop={5} height='100%' justifyContent='center' sx={{paddingX:1}}>
                <Grid item md={4} sm={12} marginBottom={5} sx={{ padding: '0px', marginRight: {md:'30px'}, backgroundColor: 'rgba(243, 239, 239, 0.88)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }} display='flex' flexDirection='column' width='100%' borderRadius={5} >
                    <Box padding={3}>
                        <Typography fontFamily='Montserrat,sans-serif' fontWeight='600' fontSize='20px' color="#454545">Contact Details</Typography>
                    </Box>
                    <Box paddingX={3} paddingBottom={2} display='flex'>
                        <Avatar sx={{ bgcolor: ContactColor, marginRight: 2, width: 46, height: 46 }}>
                            <Phone sx={{ fontSize: 20 }} />
                        </Avatar>
                        <Box>
                            <Typography fontWeight='bold' color="#58595b">Phone Number</Typography>
                            <Typography color="#58595b">+91 18003454325</Typography>
                        </Box>
                    </Box>
                    <Box display='flex' width='100%' borderTop='0.2px #B0B0B0 solid'></Box>
                    <Box paddingX={3} paddingY={2} display='flex'>
                        <Avatar sx={{ bgcolor: ContactColor, marginRight: 2, width: 46, height: 46 }}>
                            <ShareOutlined sx={{ fontSize: 30 }} />
                        </Avatar>
                        <Box>
                            <Typography fontWeight='bold' color="#58595b">Follow us</Typography>
                            <Box>
                                <Facebook sx={{ color: '#58595b', marginRight: 1 }} />
                                <X sx={{ color: '#58595b', marginRight: 1 }} />
                                <Instagram sx={{ color: '#58595b', marginRight: 1 }} />
                                <YouTube sx={{ color: '#58595b', fontSize: 30, marginRight: 1 }} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={7} sm={12} marginBottom={5} sx={{ backgroundColor: 'rgba(243, 239, 239, 0.88)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }} display='flex' flexDirection='column' width='100%' borderRadius={5} backgroundColor='#f6f6f6'>
                    
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
                                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                        },
                                    }}
                                    inputProps={{
                                        style: {
                                            color: 'black',              // Actual input text color
                                            fontSize: '13px',
                                            // backgroundColor: 'rgba(243, 239, 239, 0.53)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'
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
                                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                        },
                                    }}
                                    inputProps={{
                                        style: {
                                            color: 'black',              // Actual input text color
                                            fontSize: '13px',
                                            // backgroundColor: 'rgba(243, 239, 239, 0.53)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'
                                        },
                                        placeholder: "Enter Your Name", // Needed here for styling placeholder
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
                                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                        },
                                    }}
                                    inputProps={{
                                        style: {
                                            color: 'black',              // Actual input text color
                                            fontSize: '13px',
                                            // backgroundColor: 'rgba(243, 239, 239, 0.53)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'
                                        },
                                        placeholder: "Enter Your Name", // Needed here for styling placeholder
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
                            <Button variant="contained" size="large" sx={{ bgcolor: ContactColor, fontWeight: 'bold', textTransform: 'none', borderRadius: '20px', marginX: 1, paddingX:5, paddingY:1, fontSize:13 }}>Submit</Button>
                            {/* <Button variant="contained" sx={{ bgcolor: ContactColor, fontWeight: 'bold', textTransform: 'none', borderRadius: '20px', marginX: 1 }}>Feedback</Button> */}
                            {/* <Button variant="contained" sx={{ bgcolor: ContactColor, fontWeight: 'bold', textTransform: 'none', borderRadius: '20px', marginX: 1 }}>Others</Button> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default ContactPage;