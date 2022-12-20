import * as React from 'react';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton';

export default function EventDetail() {
    const { organizer, location, time, joined, left} = useParams();

    const Header = {
        'font-size': '18px',
        'line-height': '20px'
    };

    const description = {
        color: '#6C6C6C',
        'font-size': '17px',
        'line-height': '24px'
    };

    return (
        <div>
            <Stack sx={{ margin: 2, width: '90%', display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Button startIcon={<ArrowBackIcon />} component={Link} to='/notifications'>
                        Back
                    </Button>
                    <IconButton aria-label="favorite" size="small">
                        <FavoriteBorderOutlinedIcon fontSize="inherit" />
                    </IconButton>
                </Box>
                <Stack sx={{ alignItems: 'center' }}>
                    <h3>Event</h3>
                </Stack>
                <Stack sx={{ margin: 0, fontWeight: 'bold' }}>
                    <div style={Header}>{location}</div>
                </Stack>
                <div style={description}>960 Amsterdam Avenue, New York</div>
                <div style={description}>4.5/5★ (1084)</div>
                <Stack sx={{ mt: 2, fontWeight: 'bold' }}>
                    <div style={Header}>Time</div>
                </Stack>
                <div style={description}>{time}</div>
                <Stack sx={{ mt: 2, fontWeight: 'bold' }}>
                    <div style={Header}>Organizer</div>
                </Stack>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ margin: 1 }}>
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" 
                        sx={{ width: 60, height: 60 }} />
                    </Box>
                    <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'left' }}>
                        <div style={description}>{organizer}</div>
                        <div style={description}>M.S. in Operations Research</div>
                    </Stack>
                </Box>
            </Stack>

        </div >
    );
}