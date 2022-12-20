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
                        src="https://img0.baidu.com/it/u=2715776483,47939737&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=466"
                    />
                    <Typography> {user} </Typography>
                </Stack>
            </Box>

            <Box sx={{margin:2, display: 'flex', border: '1px #D4D4D5 solid', 'border-radius': '8px', justifyContent: "center", fontWeight: 'bold' }}>
            <Typography><b>Event Location:</b> {location}.</Typography>
            </Box>

            <Box sx={{margin:2, display: 'flex',  justifyContent: "right" }}>
            <Chip color="primary" label="Let's get lunch. How about pizza?" />            
            </Box>

            <Box sx={{margin:2, display: 'flex',  justifyContent: "left" }}>
            <Chip label="Pizza sounds good! I would also like sandwiches." />            
            </Box>

            <Box sx={{margin:3, display: 'flex',  justifyContent: "center", alignItems:"end"}}>
            </Box>

            <Box sx={{margin:2, display: 'flex',  justifyContent: "center", alignItems:"end"}}>
            <TextField sx={{width: '100%' }} id="standard-basic" label="Enter chat message here." variant="standard" />          
            </Box>
            
        </div >
    );
}