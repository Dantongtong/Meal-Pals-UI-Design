import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';


export default function Notifications() {

    return (
        <div>
            <UpperFrame />
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                <h2>Notifications</h2>
            </Box>
            <Box sx={{ padding: 1, border: '1px #D4D4D5 solid', alignItems: 'center', fontWeight: 'bold' }}>
                <h1>Upcoming</h1>
                <UpcomingNotificationCard name="Kiley" location="Shaking Crab" />
                <UpcomingNotificationCard name="Eve" location="Thai Market" />
            </Box>
            <Box sx={{ padding: 1, border: '1px #D4D4D5 solid', alignItems: 'center', fontWeight: 'bold' }}>
                <h1>Past</h1>
            </Box>

            <LowerFrame />
        </div >
    );
}

function UpcomingNotificationCard(props) {
    return (
        <div>
            <Box sx={{padding: 1, display: 'flex', alignItems: 'center', border: '1px #D4D4D5 solid', 'border-radius': '8px' }}>
                <Box sx={{ margin: 1 }}>
                    <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                </Box>
                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography><b>{props.name}</b> wants to join your event at <b>{props.location}.</b></Typography>
                </Box>
            </Box>
        </div >
    )
}