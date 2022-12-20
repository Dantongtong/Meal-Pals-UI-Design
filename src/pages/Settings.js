import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormGroup, FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';


export default function Settings() {

    return (
        <div>
            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Button startIcon={<ArrowBackIcon />} component={Link} to='/profile'>
                    Go Back
                </Button>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                <h3>Settings</h3>
            </Box>
            <Stack sx={{ margin: 2, display: 'flex', fontWeight: 'bold' }}>
                <Box sx={{ width: '100%', border: '1px #D4D4D5 solid', justifyContent: 'space-between' }}>
                    <inputSubTitle2>Push Notifications</inputSubTitle2>
                    <Switch {...'Push Notifications'} defaultChecked />
                </Box>
                <Box sx={{ width: '100%', border: '1px #D4D4D5 solid', justifyContent: 'space-between' }}>
                    <inputSubTitle2>Dietary Restrictions</inputSubTitle2>
                    <FormGroup>
                        <FormControlLabel control={<Switch />} label="Dietary Restrictions in Profile" />
                        <FormControlLabel control={<Switch />} label="Hide non-applicable dietary types" />
                        <FormControlLabel control={<Switch />} label="Highlight allergens and other restrictions" />
                    </FormGroup>
                </Box>
            </Stack>
            <Stack sx={{ margin: 4, display: 'flex' }}>
                    <p> "Hiding" non-applicable dietary restrictions means removing restaurants from your search that don't match your dietary type.</p>
                    <p> "Highlighting" allergens and other restrictions flags restaurants when your restriction appears.</p>
            </Stack>
            <Stack sx={{ margin: 4, display: 'flex', fontWeight: 'bold' }}>
                    <p> Meal Pals version 1.0</p>
            </Stack>
        </div >
    );
}