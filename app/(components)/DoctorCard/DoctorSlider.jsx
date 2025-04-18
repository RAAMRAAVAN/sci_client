"use client";
import { Box, IconButton, Grid, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";
import NewDoctorCard from "../../(components)/NewDoctorCard";
import { color1 } from "../Global";
import { useSelector } from "react-redux";
import { selectDoctors } from "@/redux/features/doctorSlice";
import Loader from "../Loader";
import { AnimatePresence, motion } from "framer-motion";

const DoctorSlider = () => {
    const doctors = useSelector(selectDoctors);
    const [page, setPage] = useState(1);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
    const [searchQuery, setSearchQuery] = useState("");
    const [preloadedImages, setPreloadedImages] = useState(new Set());

    const isXs = useMediaQuery("(max-width:600px)");
    const isSm = useMediaQuery("(min-width:601px) and (max-width:960px)");
    const isMd = useMediaQuery("(min-width:961px)");

    const doctorsPerPage = isXs ? 1 : isSm ? 2 : 3;

    const filteredDoctors = doctors.filter((doctor) =>
        doctor.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalDoctors = filteredDoctors.length;
    const totalPages = Math.max(1, Math.ceil(totalDoctors / doctorsPerPage));

    const startIdx = (page - 1) * doctorsPerPage;
    const displayedDoctors = filteredDoctors.slice(startIdx, startIdx + doctorsPerPage);

    const handleNext = () => {
        if (page < totalPages) {
            setDirection(1);
            setPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (page > 1) {
            setDirection(-1);
            setPage((prev) => prev - 1);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    useEffect(() => {
        const preloadImages = () => {
            filteredDoctors.forEach((doctor) => {
                if (doctor.doctor_image && !preloadedImages.has(doctor.doctor_image)) {
                    const img = new Image();
                    img.src = doctor.doctor_image;
                    img.onload = () => {
                        setPreloadedImages((prev) => new Set(prev).add(doctor.doctor_image));
                    };
                }
            });
        };
        preloadImages();
    }, [filteredDoctors]);

    return (
        <Box
            {...handlers}
            position="relative"
            display="flex"
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems='center'
            sx={{ touchAction: "pan-y", minHeight: "430px", overflowX: "hidden" }}
        >
            <Box
                sx={{
                    width: { md: "90%", xs: "100%" },
                    minHeight: "380px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // border:'1px black solid',
                    flexDirection: "column",
                    overflow: "hidden", // ✅ Prevents animation from exceeding bounds
                }}
            >
                <IconButton
                    onClick={handlePrev}
                    disabled={page === 1}
                    sx={{
                        position: "absolute",
                        left: "0%",
                        top: "50%",
                        zIndex: 1,
                        fontSize: "3rem",
                        color: color1,
                        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                        display: isMd ? "flex" : "none",
                    }}
                >
                    <ArrowBackIosNew sx={{ fontSize: "3rem" }} />
                </IconButton>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ width: "100%", display:'flex', justifyContent:'center'}}
                    >
                        <Grid
                            container
                            spacing={5}
                            justifyContent="center"
                            marginY={2}
                            sx={{ minHeight: "350px" }}
                            display="flex"
                            width="95%"
                        >
                            {displayedDoctors.length > 0 ? (
                                displayedDoctors.map((doctor) => (
                                    <Grid
                                        key={doctor.id}
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="stretch"
                                        marginY={2}
                                        position="relative"
                                    >
                                        <NewDoctorCard
                                            id={doctor.id}
                                            image={doctor.doctor_image}
                                            name={doctor.name}
                                            speciality={doctor.specializations}
                                            designation={doctor.designation}
                                            department={doctor.depertment}
                                            qualifications={doctor.qualifications}
                                        />
                                    </Grid>
                                ))
                            ) : (
                                <Box sx={{ textAlign: "center", padding: "20px", fontSize: "18px" }}>
                                    <Loader />
                                </Box>
                            )}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

                <IconButton
                    onClick={handleNext}
                    disabled={page === totalPages}
                    sx={{
                        position: "absolute",
                        right: "0%",
                        top: "50%",
                        fontSize: "3rem",
                        color: color1,
                        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                        display: isMd ? "flex" : "none",
                    }}
                >
                    <ArrowForwardIos sx={{ fontSize: "3rem" }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default DoctorSlider;
