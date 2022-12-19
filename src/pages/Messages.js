import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Messages() {
    const { user, location } = useParams();
    return (
        <div>
            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Button  startIcon={<ArrowBackIcon />} component={Link} to='/notifications'>
                    Go Back
                </Button>
            </Box>
            <Box sx={{display: 'flex', border: '1px #D4D4D5 solid', justifyContent: "center", fontWeight: 'bold' }}>
                <Stack>
                    <Avatar
                        src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                    />
                    <Typography> {user} </Typography>
                </Stack>
            </Box>
        </div >
    );
}