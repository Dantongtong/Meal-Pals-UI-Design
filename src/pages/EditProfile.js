import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UploadIcon from '@mui/icons-material/Upload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function EditProfile() {
    const inputSubTitle2 = {
        color: '#6C6C6C',
        'font-weight': 400,
        'font-size': '13px',
        'line-height': '16px'
    };

    return (
        <div>
            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Button startIcon={<ArrowBackIcon />} component={Link} to='/profile'>
                    Go Back
                </Button>
            </Box>
            <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent:'center', fontWeight: 'bold' }}>
                <h3>Profile</h3>
            </Box>
            <Box sx={{ margin: 2,width: '100%', display: 'flex', justifyContent: "center", fontWeight: 'bold' }}>
                <Stack>
                    <Avatar
                        src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                        sx={{ width: 100, height: 100 }}
                    />
                    <Button startIcon={<UploadIcon />}>
                        Edit Photo
                    </Button>
                </Stack>
            </Box>
            <Stack sx={{ margin: 2, display: 'flex', fontWeight: 'bold' }}>
                <Box sx={{ width: '100%', border: '1px #D4D4D5 solid', justifyContent: 'space-between' }}>
                    <inputSubTitle2>Name</inputSubTitle2>
                    <Typography>John Adams</Typography>
                </Box>
                <Box sx={{ width: '100%', border: '1px #D4D4D5 solid', justifyContent: 'space-between' }}>
                    <inputSubTitle2>Title</inputSubTitle2>
                    <Typography>Senior Student, CS Major</Typography>
                </Box>
                <Box sx={{ width: '100%', border: '1px #D4D4D5 solid', justifyContent: 'space-between' }}>
                    <inputSubTitle2>Bio</inputSubTitle2>
                    <Typography>Has a dog named Charlie</Typography>
                    <Typography>Loves crafting and DIYs!</Typography>
                    <Typography>Into Asian cuisine</Typography>
                </Box>
                <Box sx={{ width: '100%', border: '1px #D4D4D5 solid', justifyContent: 'space-between' }}>
                    <Button endIcon={<ArrowForwardIcon />} component={Link} to='/interests'>
                        Interests
                    </Button>
                </Box>
                <Box sx={{ width: '100%', border: '1px #D4D4D5 solid', justifyContent: 'space-between' }}>
                    <Button endIcon={<ArrowForwardIcon />} component={Link} to='/restrictions'>
                        Dietary Restrictions
                    </Button>
                </Box>
            </Stack>
        </div >
    );
}