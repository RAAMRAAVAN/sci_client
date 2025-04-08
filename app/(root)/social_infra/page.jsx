import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
const page = () => {
    return (<>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Typography  variant="h5" fontWeight="bold" marginTop={2}>SOCIAL INFRASTRUCTURE</Typography>
            <Typography  variant="h6" marginBottom={2} textAlign="center" fontSize={14}>Know your location and get familiarized along</Typography>
            <Grid container width="95%" display="flex" marginY={3}>
                <Grid item lg={2} md={4} xs={12}  sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography  color="white" textAlign='center'>Accommodation (housing/ hostels)</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Long Stay: Vivanta Guwahati, Treebo Arna Residency" />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Short Stay: Mostly guest houses and lodges available like Vivanta Guwahati, Treebo Arna Residency" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>

                <Grid item lg={2} md={4} xs={12}  sx={{marginBottom:1}}>
                    <Box  height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography  color="white" textAlign='center'>Education Centres</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Few secondary schools like Panbazar Higher Secondary School, Donbosco University, Cotton Collegiate, B.Borooah College" />
                            </ListItem>

                        </List>
                    </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={12} sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}><Typography  color="white" textAlign='center'>Health Facilities</Typography></Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Some major hospitals like Apollo Hospitals Guwahati, HEALTH CITY HOSPITAL, Marwari Hospital etc" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={12} sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography  color="white" textAlign='center'>Air/ Road/ Tail Connectivity</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Air: Nearest airpot at Guwahati (~21.7 km)" />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Rail: Guwahati and Kamakhya railway stations are located within a 7 km radius." />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Bus: ASTC & ISBT transport" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={12} sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography  color="white" textAlign='center'>Restaurants</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Decent restaurants like Barbeque Nation, Uttsah Restaurant By Sachika, Horizon Restaurant" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={12} sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography  color="white" textAlign='center'>Malls/ Movie Halls</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Handful of shopping places like Vishal, Big Bazar, Reliance Trends and Cinema Hall, Grande Cines, PVR City Centre" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>)
}
export default page;