"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer,
  List, ListItem, ListItemText, Menu, MenuItem, Avatar,
  Grid
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { ExpandMore, KeyboardArrowDown } from "@mui/icons-material";
import { color4, Font, HName } from "./Global";
import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { CgPhone } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { HomePageAccess, AboutUsAccess, FacilitiesAccess, HospitalsAccess, NewsAndEventsAccess, ContactUsAccess, SocialInfraAccess, AcademicsAccess } from "@/lib/fetchData";
import SearchDoctors from "./DoctorCard/SearchDoctors";
import { useSelector } from "react-redux";
import { selectDoctors } from "@/redux/features/doctorSlice";
import DepartmentButton from './DepartmentButton';
const navItems = [
  { name: "Home", link: "/", Active: HomePageAccess },
  { name: "About Us", link: "/about_us", Active: AboutUsAccess },
  // { name: "Doctors", link: "/consultants", Active: AboutUsAccess },
  { name: "Facilities", link: "/facilities", Active: FacilitiesAccess },
  { name: "Hospitals", link: "/", Active: HospitalsAccess },
  { name: "News & Events", link: "/news", Active: NewsAndEventsAccess },
  { name: "Academics", link: "/academics", Active: AcademicsAccess },
  { name: "Contact Us", link: "/contact", Active: ContactUsAccess },
];

const ContactUsDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{ display: "inline-block", position: 'relative' }}
    >
      <Button
        sx={{ color: "#fff" }}
        onMouseEnter={() => setOpen(true)} // Change onHover to onMouseEnter
        onMouseLeave={() => setOpen(false)} // Optionally, close on mouse leave
      >
        Contact Us <ExpandMore />
      </Button>
      {open ? <Box boxShadow={3} borderRadius={1} display='flex' width='200px' backgroundColor='white' position='absolute' flexDirection='column' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} paddingY={1}>
        <Box padding={1} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Link href="/contact" passHref legacyBehavior>
            <Box display='flex'><BiSupport size={24} color="#454545" /><Typography color="black" marginLeft={1}>Contact Us</Typography></Box>
          </Link>
        </Box>
        <Box padding={1} sx={{ cursor: 'pointer', borderTop: '1px lightgray solid', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Box display='flex'><CgPhone size={24} color="#454545" />
            <Typography component="a"
              href={`tel:${"+91 18003454325" || ""}`} sx={{ cursor: "pointer", '&:hover': { color: 'black' } }} color="black" marginLeft={1}>+91 18003454325</Typography>
          </Box>
        </Box>
        <Box padding={1} sx={{ cursor: 'pointer', borderTop: '1px lightgray solid', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Box display='flex'><SiGmail size={24} color="#454545" />
            <Typography component="a"
              href="mailto:info@accf.in"
              sx={{ cursor: "pointer", '&:hover': { color: 'black' } }} color="black" marginLeft={1}>info@accf.in</Typography>
          </Box>
        </Box>
      </Box> : <></>}


    </Box>
  );
};

export default function Navbar({ Title, OurHospitals, Facilities }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null); // separate for facilities
  const doctors = useSelector(selectDoctors);

  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const showSpecialButton = pathname === '/consultants';
  const HoName = HName;

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleHospitalsClick = (event) => setAnchorEl(event.currentTarget);
  const handleFacilitiesClick = (event) => setAnchorE2(event.currentTarget);

  const handleHospitalsClose = () => setAnchorEl(null);
  const handleFacilitiesClose = () => setAnchorE2(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="static" style={{ zIndex: 3 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: 'relative', zIndex: 3 }}>
          <Box sx={{ display: { xs: "none", md: "none" }, mr: 1 }}>
            <ExportedImage src="/vercel.gif" alt="logo" width={50} height={50} />
          </Box>
          <Typography sx={{ display: { xs: "none", md: "none" }, fontSize: "1rem", fontWeight: "bold" }}>
            {Title}
          </Typography>


          <Grid container sx={{ width: '100%', }}>
            <Grid item lg={8} md={4} sm={4} xs={2} display='flex' >
              <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
                {navItems.map((item) => {
                  if (item.Active)
                    switch (item.name) {
                      case "Hospitals":
                        return (
                          <Box key={item.name}>
                            <Button
                              sx={{ color: "#fff" }}
                              onClick={handleHospitalsClick}
                              aria-controls={anchorEl ? "hospitals-menu" : undefined}
                              aria-haspopup="true"
                            >
                              {item.name} <ExpandMore />
                            </Button>
                            <Menu
                              id="hospitals-menu"
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}
                              onClose={handleHospitalsClose}
                            >
                              {OurHospitals?.length > 0 ? (
                                OurHospitals.map((hospital) => (
                                  <MenuItem key={hospital.name} onClick={handleHospitalsClose}>
                                    <a
                                      href={hospital.domain}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                      <Typography >{hospital.name}</Typography>
                                    </a>
                                  </MenuItem>
                                ))
                              ) : (
                                <MenuItem disabled>
                                  <Typography >No hospitals available</Typography>
                                </MenuItem>
                              )}
                            </Menu>
                          </Box>
                        );
                      case "Facilities":
                        return (
                          <Box key={item.name}>
                            <Button
                              sx={{ color: "#fff" }}
                              onClick={handleFacilitiesClick}
                              aria-controls={anchorE2 ? "facilities-menu" : undefined}
                              aria-haspopup="true"
                            >
                              {item.name} <ExpandMore />
                            </Button>
                            <Menu
                              id="facilities-menu"
                              anchorEl={anchorE2}
                              open={Boolean(anchorE2)}
                              onClose={handleFacilitiesClose}
                            >
                              {Facilities?.length > 0 ? (
                                Facilities.map((facility) => (
                                  <Link
                                    key={facility.id}
                                    href={`/facilities#${facility._id}`}
                                    passHref
                                    legacyBehavior
                                  >
                                    <MenuItem key={facility.name || facility.title} onClick={handleFacilitiesClose}>
                                      <Typography >{facility.title}</Typography>
                                    </MenuItem></Link>
                                ))
                              ) : (
                                <MenuItem disabled>
                                  <Typography >No facilities available</Typography>
                                </MenuItem>
                              )}
                            </Menu>
                          </Box>
                        );
                      case "Contact Us":
                        return <ContactUsDropdown key={item.name} />;
                      default:
                        return (
                          <Link key={item.name} href={item.link} passHref legacyBehavior>
                            <Button sx={{ color: "#fff" }}>{item.name}</Button>
                          </Link>
                        );
                    }
                })}
              </Box>
            </Grid>
            <Grid item lg={4} md={8} sm={8} xs={10} sx={{ display: 'flex', width: '100%' }}>
              {showSpecialButton ? <><DepartmentButton/>
              </> : <><SearchDoctors doctors={doctors} /></>}
            </Grid>
          </Grid>
          {SocialInfraAccess ? <Link href="/social_infra" passHref legacyBehavior>
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <Button sx={{ color: "#fff" }}>
                <Avatar alt="Social Infrastructure" sx={{ backgroundColor: "white", marginRight: "2px" }} src="/SocialInfra/soc_inf.png" />
                Social Infrastructure
              </Button>
            </Box>
          </Link> : <></>}


          <IconButton edge="end" sx={{ display: { xs: "block", lg: "none" }, color: "#fff", position: 'absolute' }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
            <List>
              {navItems.map((item) => {
                if (item.Active) return (

                  <Link key={item.name} href={item.link} passHref legacyBehavior>
                    <ListItem component="div">
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
                )
              })}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </motion.div>
  );
}
