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
           
            <LowerFrame />
        </div >
    );
}