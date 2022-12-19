import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

export default function UpperFrame() {
    const lowerNavi = {
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        width: 400
    };
    return (
        <BottomNavigation style={lowerNavi}>
            <BottomNavigationAction
                icon={<HomeOutlinedIcon />}
                component={Link} to='/' label="Home" value="Home"
            />
            <BottomNavigationAction
                icon={<AddCircleOutlineOutlinedIcon />}
                component={Link} to='/post' label={'Post'}
            />
            <BottomNavigationAction
                icon={<SmsOutlinedIcon />}
                component={Link} to='/' label={'Message'}
            />
            <BottomNavigationAction 
                icon={<PersonOutlineOutlinedIcon />}
                component={Link} to='/profile' label={'Profile'}
             />
        </BottomNavigation>
    )
}