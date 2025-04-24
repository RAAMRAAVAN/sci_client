'use client'
import { Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const ReadMoreText = ({ ShortText, LongText, ReadMoreOption,showReadmore = false, Expand = false }) => {
  const [expand, setExpand] = useState(Expand);
  return (
    <>
      {!expand?<Typography
        style={{ whiteSpace: "pre-line" }}
      >
        {ShortText}
      </Typography>:<Typography
        style={{ whiteSpace: "pre-line" }}
      >
        {LongText}
      </Typography>}
      {!ReadMoreOption ? <>
      </> : <>{!expand ? <Button sx={{ mt: 1 }} onClick={()=>setExpand(true)}>
        Read More
      </Button> : <Button sx={{ mt: 1 }} onClick={()=>setExpand(false)}>
        Show Less
      </Button>}
      </>}
    </>
  );
};

export default ReadMoreText;
