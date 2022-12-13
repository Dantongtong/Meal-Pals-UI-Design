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
        <BottomNavigation style={lowerNavi} showLabel>

            <BottomNavigationAction
                label="Home"
                icon={<HomeOutlinedIcon />}
            />

            <Link to='/post'>
                <BottomNavigationAction
                    label="Post"
                    icon={<AddCircleOutlineOutlinedIcon />}
                />
            </Link>
            <BottomNavigationAction
                label="Message"
                icon={<SmsOutlinedIcon />}
            />
            <BottomNavigationAction label="Profile" icon={<PersonOutlineOutlinedIcon />} />
        </BottomNavigation>
    )
}