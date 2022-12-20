import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import FaceIcon from '@mui/icons-material/Face';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}


export default function EventDetail() {
    const { organizer, location, time, joined, left } = useParams();
    const joinedInt = parseInt(joined, 10)
    const leftInt = parseInt(left, 10)

    const [clicked, setClicked] = useState();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Header = {
        'font-size': '18px',
        'line-height': '20px'
    };

    const description = {
        color: '#6C6C6C',
        'font-size': '17px',
        'line-height': '24px'
    };

    const warning = {
        'color': '#FEA600',
        'font-weight': '600',
        'font-size': '16px',
        'line-height': '24px'
    };

    const joined_left = {
        color: '#FEA600',
        'font-size': '18px',
        'line-height': '24px'
    };

    return (
        <div>
            <Stack sx={{ margin: 2, width: '90%', display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Button startIcon={<ArrowBackIcon />} component={Link} to='/'>
                        Back
                    </Button>
                    <IconButton aria-label="favorite" onClick={() => setClicked(!clicked)}>
                        {clicked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                    </IconButton>
                </Box>
                <Stack sx={{ alignItems: 'center' }}>
                    <h3>Event</h3>
                </Stack>
                <Stack sx={{ margin: 0, fontWeight: 'bold' }}>
                    <div style={Header}>{location}</div>
                </Stack>
                <div style={description}>960 Amsterdam Avenue, New York</div>
                <div style={description}>4.5/5★ (1084)</div>
                <Stack sx={{ mt: 2, fontWeight: 'bold' }}>
                    <div style={Header}>Time</div>
                </Stack>
                <div style={description}>{time}</div>
                <Stack sx={{ mt: 2, fontWeight: 'bold' }}>
                    <div style={Header}>Organizer</div>
                </Stack>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ margin: 1 }}>
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                            sx={{ width: 60, height: 60 }} />
                    </Box>
                    <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'left' }}>
                        <div style={description}>{organizer}</div>
                        <div style={description}>M.S. in Operations Research</div>
                    </Stack>
                </Box>
                <Stack sx={{ mt: 2 }}>
                    <div style={joined_left}><u>{joined} joined / {left} remaining</u></div>
                </Stack>

                <Box sx={{ margin: 2, width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <AvatarGroup total={joinedInt}>
                        {Array.from({ length: joinedInt }, (_, i) =>
                            <span key={i}>
                                <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                            </span>)}
                    </AvatarGroup>
                    <AvatarGroup total={leftInt}>
                        {Array.from({ length: leftInt }, (_, i) =>
                            <span key={i}>
                                <Avatar>
                                    <FaceIcon />
                                </Avatar>
                            </span>)}
                    </AvatarGroup>
                </Box>

                <Box sx={{ border: '1px #FEA600 solid', padding: 1, display: 'flex', alignItems: 'center', backgroundColor: '#FFF9ED' }}>
                    <NewReleasesIcon sx={{ color: '#FEA600', fontSize: 30, padding: 0.5 }}></NewReleasesIcon>
                    <div style={warning}>Someone in this event has a nut allergy. </div>
                </Box>

                <Stack sx={{ mt: 3, fontWeight: 'bold' }}>
                    <div style={Header}>Event description</div>
                </Stack>
                <div style={description}>I walked past this restaurant and it looked so beautiful, so I decided I want to go there for brunch and to make new friends.</div>

                <Stack sx={{ mt: 3, fontWeight: 'bold' }}>
                    <Button  >
                        More about {location}
                    </Button>
                </Stack>

            </Stack>

            <Button variant="contained" style={{ 'float': 'right', 'margin-right': '20px', 'margin-top': '5px' }} onClick={handleClickOpen}>Join Now</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Confirmation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    You will join Kiley at Shake Shack on Nov 19, 2022, 12:00 p.m. 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        No
                    </Button>
                    <Button onClick={handleClose} component={Link} to='/'>Yes</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}