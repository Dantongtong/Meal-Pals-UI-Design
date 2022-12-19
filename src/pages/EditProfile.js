import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UploadIcon from '@mui/icons-material/Upload';
import { Title } from '@mui/icons-material';


export default function EditProfile() {
    const Title = {
        'font-weight': '600',
        'font-size': '22px',
        'line-height': '28px',
        'letter-spacing': '0.35px',
        'margin': '20px 0 20px 30px'
    };
    const banner = {
        'text-align': 'center',
        'background': '#FFFFFF',
        'border-bottom': '1px solid #EEEEEE',
        'padding': '10px 12px',
        'font-size': '18px'
    };
    const inputTitle = {
        display: 'flex',
        'flex-direction': 'column'
    };
    const inputSubTitle = {
        'text-align': 'left',
        'font-weight': 400,
        'font-size': '17px',
        'line-height': '24px'
    };
    const inputSubTitle2 = {
        color: '#6C6C6C',
        'font-weight': 400,
        'font-size': '13px',
        'line-height': '16px'
    };

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <div>
            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Button startIcon={<ArrowBackIcon />}>
                    Go Back
                </Button>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: "center", fontWeight:'bold'}}>
                <Stack>
                    <Title>Profile</Title>
                    <Avatar
                        src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                        sx={{ width: 100, height: 100 }}
                    />
                    <Button startIcon={<UploadIcon />}>
                        Edit Photo
                    </Button>
                </Stack>
            </Box>
        </div >
    );
}