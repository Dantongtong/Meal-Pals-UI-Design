import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';


export default function DietaryRestrictions() {

    return (
        <div>
            <Box sx={{ padding: 1, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Button startIcon={<ArrowBackIcon />} component={Link} to='/editprofile'>
                    Go Back
                </Button>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                <h3>Dietary Types and Restrictions</h3>
            </Box>
            <Box sx={{ ml:2, width: '100%', display: 'flex', alignItems: 'center',  fontWeight: 'bold' }}>
                <h4>Dietary Types</h4>
            </Box>
            <Box sx={{ ml: 5, width: '100%', display: 'flex', alignItems: 'center' }}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Vegetarian" />
                    <FormControlLabel control={<Checkbox />} label="Vegan" />
                    <FormControlLabel control={<Checkbox />} label="Kosher" />
                    <FormControlLabel control={<Checkbox />} label="Halal" />
                </FormGroup>
            </Box>
            <Box sx={{ ml:2, width: '100%', display: 'flex', alignItems: 'center',  fontWeight: 'bold' }}>
                <h4>Allergies and Dietary Restrictions</h4>
            </Box>
            <Box sx={{ ml: 5, width: '100%', display: 'flex', alignItems: 'center' }}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Lactose Intolerance" />
                    <FormControlLabel control={<Checkbox />} label="Gluten Intolerance" />
                    <FormControlLabel control={<Checkbox />} label="Peanut Allergy" />
                    <FormControlLabel control={<Checkbox />} label="Treenut Allergy" />
                    <FormControlLabel control={<Checkbox />} label="Fish Allegy" />
                    <FormControlLabel control={<Checkbox />} label="Shellfish allergy" />
                    <FormControlLabel control={<Checkbox />} label="Egg Allergy" />
                    <FormControlLabel control={<Checkbox />} label="Soy Allergy" />
                </FormGroup>
            </Box>
        </div >
    );
}