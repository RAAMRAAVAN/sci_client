"use client";
import { Box, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import Facilities from "../../(components)/FacilitiesNew2/FacilityData";
import { API, HName } from "@/app/(components)/Global";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FacilitiesClient = () => {
    const searchParams = useSearchParams();
    const expand = searchParams.get("expand");
    const HoName = HName;
    const [FID, setFID] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setFID(window.location.hash?.substring(1)); // remove the "#"
        }
    }, []);

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //       const hash = window.location.hash?.substring(1); // facility ID from hash
    //       setExpand(expandParam === "true");
    //       setFID(hash || null);
    //     }
    //   }, [expand]);
    return (
        <>
            <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
                <ExportedImage
                    src={`/${HoName}Facilities/facilities_bg.jpg`}
                    alt="background"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={100}
                />
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
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        // textShadow="2px 2px 10px rgba(0,0,0,0.5)"
                        paddingX={3}
                    >
                        Facilities
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ padding: { md: 4, sm: 0 } }}>
                <Facilities expand={expand === "true"} FID={FID}/>
            </Box>
        </>
    );
};

export default FacilitiesClient;
