import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


export default function Profile() {
    const Image = styled('img')({
        width: '100px',
        height: '100px',
        'border-radius': '8px',
        'padding': '5px'
    });

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
                <Stack sx={{width: '100%', alignItems: 'left', fontWeight: 'bold' }}>
                    <inputSubTitle>Bio</inputSubTitle>
                    <Stack sx={{ ml: 5, width: '100%', alignItems: 'left', fontWeight: 'bold' }}>
                        <Typography>Has a dog named Charlie</Typography>
                        <Typography>Loves crafting and DIYs!</Typography>
                        <Typography>Into Asian cuisine</Typography>
                    </Stack>
                    <inputSubTitle>Flavor Preference</inputSubTitle>
                    <Box sx={{width: '100%', alignItems: 'left', fontWeight: 'bold' }}>
                        <Chip label="Chinese" />
                        <Chip label="Mexican" />
                    </Box>
                </Stack>
            </Box>

            <LowerFrame />
        </div >
    );
}

const restaurants = [
    { code: 'Crab House All You Can Eat Seafood', distance: '3.3 mi', street: '135 E 55th St', city: 'New York' },
    { code: 'Shaking Crab', distance: '0.2 mi', street: '2869 Broadway', city: 'New York' },
    { code: 'Crab Du Jour', distance: '2.9 mi', street: '8101 Tonnelle Ave, Ste 2', city: 'North Bergen' }
]