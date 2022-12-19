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


export default function Interests() {

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <div>
            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Button startIcon={<ArrowBackIcon />} component={Link} to='/editprofile'>
                    Go Back
                </Button>
            </Box>
            <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent:'center', fontWeight: 'bold' }}>
                <h3>Interests</h3>
            </Box>
        </div >
    );
}