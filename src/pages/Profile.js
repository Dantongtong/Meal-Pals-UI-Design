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


export default function Profile() {
    const title = {
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
            <UpperFrame />

            <Button variant="contained" style={{ 'float': 'right', 'margin-right': '10px' }} component={Link} to='/'>Edit Profile</Button>
            <Button variant="contained" style={{ 'float': 'right', 'margin-right': '10px' }} component={Link} to='/'>Settings</Button>

            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                    <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    <Stack sx={{ margin: 2, width: '100%', alignItems: 'left' }}>
                        <inputSubTitle2>  John Adams  </inputSubTitle2>
                        <Typography>Senior Student, CS Major</Typography>
                    </Stack>
                </Box>
            </Box>

            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Stack sx={{ width: '100%', alignItems: 'left', fontWeight: 'bold' }}>
                    <inputSubTitle>Bio</inputSubTitle>
                    <Stack sx={{ ml: 5, width: '100%', alignItems: 'left', fontWeight: 'bold' }}>
                        <Typography>Has a dog named Charlie</Typography>
                        <Typography>Loves crafting and DIYs!</Typography>
                        <Typography>Into Asian cuisine</Typography>
                    </Stack>
                    <inputSubTitle>Flavor Preference</inputSubTitle>
                    <Box sx={{ width: '100%', alignItems: 'left', fontWeight: 'bold' }}>
                        <Chip label="Chinese" />
                        <Chip label="Mexican" />
                    </Box>
                </Stack>
            </Box>

            <Box>
                <Box>
                    <Tabs value={tabIndex} onChange={handleTabChange}>
                        <Tab label="Tab 1" />
                        <Tab label="Tab 2" />
                        <Tab label="Tab 3" />
                    </Tabs>
                </Box>
                <Box sx={{ padding: 2 }}>
                    {tabIndex === 0 && (
                        <Box>
                            <Typography>The first tab</Typography>
                        </Box>
                    )}
                    {tabIndex === 1 && (
                        <Box>
                            <Typography>The second tab</Typography>
                        </Box>
                    )}
                    {tabIndex === 2 && (
                        <Box>
                            <Typography>The third tab</Typography>
                        </Box>
                    )}
                </Box>
            </Box>

            <LowerFrame />
        </div >
    );
}