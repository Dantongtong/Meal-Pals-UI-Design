import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';


export default function Interests() {

    return (
        <div>
            <Box sx={{ margin: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Button startIcon={<ArrowBackIcon />} component={Link} to='/editprofile'>
                    Go Back
                </Button>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                <h3>Interests</h3>
            </Box>
            <Box sx={{ margin: 5, width: '100%', display: 'flex', alignItems: 'center' }}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="American" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Chinese" />
                    <FormControlLabel control={<Checkbox />} label="French" />
                    <FormControlLabel control={<Checkbox />} label="Indian" />
                    <FormControlLabel control={<Checkbox />} label="Japanese" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Mexican" />
                    <FormControlLabel control={<Checkbox />} label="Thai" />
                </FormGroup>
            </Box>
        </div >
    );
}