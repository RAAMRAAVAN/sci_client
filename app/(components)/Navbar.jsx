"use client";
import { useState } from "react";
import {
  AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer,
  List, ListItem, ListItemText, Menu, MenuItem, Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";
import {Font, HName } from "./Global";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about_us" },
  { name: "Facilities", link: "/facilities" },
  { name: "Hospitals", link: "/" },
  { name: "News & Events", link: "/news" },
  { name: "Contact Us", link: "/contact" },
];

export default function Navbar({ Title, OurHospitals, Facilities }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null); // separate for facilities

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
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", md: "none" }, mr: 1 }}>
            <ExportedImage src="/vercel.gif" alt="logo" width={50} height={50} />
          </Box>
          <Typography  sx={{ display: { xs: "none", md: "none" }, fontSize: "1rem", fontWeight: "bold" }}>
            {Title}
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {navItems.map((item) => {
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
                default:
                  return (
                    <Link key={item.name} href={item.link} passHref legacyBehavior>
                      <Button sx={{ color: "#fff" }}>{item.name}</Button>
                    </Link>
                  );
              }
            })}
          </Box>

          <Link href="/social_infra" passHref legacyBehavior>
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <Button sx={{ color: "#fff" }}>
                <Avatar alt="Social Infrastructure" sx={{ backgroundColor: "white", marginRight: "2px" }} src="/SocialInfra/soc_inf.png" />
                Social Infrastructure
              </Button>
            </Box>
          </Link>

          <IconButton edge="end" sx={{ display: { xs: "block", md: "none" }, color: "#fff" }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
            <List>
              {navItems.map((item) => (
                <Link key={item.name} href={item.link} passHref legacyBehavior>
                  <ListItem component="div">
                    <ListItemText primary={item.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </motion.div>
  );
}
