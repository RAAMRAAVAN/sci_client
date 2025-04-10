'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const items = [
    {
        title:
            'Inauguration of Robotic Surgery System in State Cancer Institute by the Hon’ble Chief Minister of Assam on 13 April 2025',
        url: '/news',
    },
];

const TextCarousel = () => {
    return (
        <Box
            sx={{
                width: '100%',
                overflow: 'hidden',
                bgcolor: '#ebebeb',
                cursor: 'pointer',
            }}
            onClick={() => window.open(items[0].url, '_blank')}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    animation: 'stepScroll 5s ease-in-out infinite',
                }}
            >
                <Typography
                    sx={{
                        color: '#fff',
                        background: 'linear-gradient(-240deg, #bf1e2e 75%, transparent 40%)',
                        px: 1,
                        // py: 1,
                        pr: 4,
                        borderRadius: '4px',
                        fontSize: '14px',
                        flexShrink: 0,
                        margin: '0px 0 0px -2px',
                        padding: '0 32px 0 5px'
                    }}
                >
                    UPDATES
                </Typography>



                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100%',
                        background: '#ebebeb'
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#002664', 
                                fontSize: '14px',
                                fontWeight: 500,
                                pr: 0,
                                display: 'inline-block',
                            }}
                        >
                            {items[0].title}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <style jsx>{`
  @keyframes stepScroll {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    50%{
      transform: translateX(0%);
      opacity: 1;
    }
    80% {
      transform: translateX(-100%);
      opacity: 0;
    }
    90% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`}</style>
        </Box>
    );
};

export default TextCarousel;
