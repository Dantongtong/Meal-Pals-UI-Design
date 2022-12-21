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


export default function Profile() {

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <div style={{overflow: 'hidden'}}>
            <UpperFrame />

            <Button variant="contained" style={{ 'float': 'right', 'margin-right': '10px' }} component={Link} to='/editprofile'>Edit Profile</Button>
            <Button variant="contained" style={{ 'float': 'right', 'margin-right': '10px' }} component={Link} to='/settings'>Settings</Button>

            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                    <Avatar src="https://img0.baidu.com/it/u=2715776483,47939737&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=466" />
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

            <Box sx={{ margin: 2 }}>
                <Box>
                    <Tabs value={tabIndex} onChange={handleTabChange}>
                        <Tab label="Upcoming" />
                        <Tab label="Past" />
                        <Tab label="Saved" />
                    </Tabs>
                </Box>
                <Box sx={{ padding: 2, border: '1px #D4D4D5 solid' }}>
                    {tabIndex === 0 && (
                        <Box>
                            <Stack sx={{ mt: 2, padding: 2, border: '1px #D4D4D5 solid', 'border-radius': '8px', fontWeight: 'bold' }}>
                                <inputSubTitle2>Shake Shack</inputSubTitle2>
                                <Typography>12/20/2022, 6:00 pm</Typography>
                                <Typography>Status: 2 joined, 3 available</Typography>
                            </Stack>
                            <Stack sx={{ mt: 2, padding: 2, border: '1px #D4D4D5 solid', 'border-radius': '8px', fontWeight: 'bold' }}>
                                <inputSubTitle2>Crab House</inputSubTitle2>
                                <Typography>12/24/2022, 8:00 pm</Typography>
                                <Typography>Status: 2 joined, 1 available</Typography>
                            </Stack>
                        </Box>
                    )}
                    {tabIndex === 1 && (
                        <Box>
                            <Stack sx={{ mt: 2, padding: 2, border: '1px #D4D4D5 solid', 'border-radius': '8px', fontWeight: 'bold' }}>
                                <inputSubTitle2>Thai Market</inputSubTitle2>
                                <Typography>11/16/2022, 7:00 pm</Typography>
                                <Typography>Status: Complete</Typography>
                            </Stack>
                        </Box>
                    )}
                    {tabIndex === 2 && (
                        <Box>
                            <Stack sx={{ mt: 2, padding: 2, border: '1px #D4D4D5 solid', 'border-radius': '8px', fontWeight: 'bold' }}>
                                <inputSubTitle2>Tacombi</inputSubTitle2>
                                <Typography>1/23/2023, 7:30 pm</Typography>
                                <Typography>Status: 1 joined, 3 available</Typography>
                            </Stack>
                        </Box>
                    )}
                </Box>
            </Box>

            <LowerFrame />
        </div >
    );
}