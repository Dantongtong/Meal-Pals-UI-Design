import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';


export default function Notifications() {

    return (
        <div>
            <UpperFrame />
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                <h3>Notifications</h3>
            </Box>
            <Box sx={{ padding: 1, border: '1px #D4D4D5 solid', alignItems: 'center', fontWeight: 'bold' }}>
                <h2>Upcoming</h2>
                <UpcomingNotificationCard name="Kiley" location="Shaking Crab" />
                <UpcomingNotificationCard name="Eve" location="Thai Market" />
            </Box>
            <Box sx={{ padding: 1, border: '1px #D4D4D5 solid', alignItems: 'center', fontWeight: 'bold' }}>
                <h2>Past</h2>
                <PastRequest name="Kiley" location="Shaking Crab" status="Accept" />
                <PastResult name="Dantong" location="Bahn" status="Accept" />
                <PastResult name="Steve" location="Bahn" status="Reject" />
            </Box>

            <LowerFrame />
        </div >
    );
}

function UpcomingNotificationCard(props) {
    return (
        <div>
            <Box sx={{ padding: 1, display: 'flex', alignItems: 'center', border: '1px #D4D4D5 solid', 'border-radius': '8px' }}>
                <Box sx={{ margin: 1 }}>
                    <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                </Box>
                <Stack sx={{ width: '75%', display: 'flex', alignItems: 'left' }}>
                    <Typography><b>{props.name}</b> wants to join your event at <b>{props.location}.</b></Typography>
                    <Button variant="contained" style={{ 'margin-right': '100px', borderRadius: 28 }} component={Link} to={`/message/${props.name}/${props.location}`}>Message</Button>
                </Stack>
                <Box sx={{ width: '25%', display: 'flex', alignItems: 'center' }}>
                    <IconButton color='#f44336' aria-label="Reject">
                        <CancelIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="Accept">
                        <CheckCircleIcon />
                    </IconButton>
                </Box>
            </Box>
        </div >
    )
}

function PastRequest(props) {
    if (props.status === "Accept") {
        return (
            <div>
                <Box sx={{ padding: 1, display: 'flex', alignItems: 'center', border: '1px #D4D4D5 solid', 'border-radius': '8px' }}>
                    <Box sx={{ margin: 1 }}>
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>
                    <Stack sx={{ width: '90%', display: 'flex', alignItems: 'left' }}>
                        <Typography><b>{props.name}</b> wants to join your event at <b>{props.location}.</b></Typography>
                        <Button variant="contained" style={{ 'margin-right': '55%' , borderRadius: 28}} component={Link} to={`/message/${props.name}/${props.location}`}>Message</Button>
                    </Stack>
                    <Box sx={{ width: '10%', display: 'flex', alignItems: 'center' }}>
                        <IconButton color="primary" aria-label="Accept">
                            <CheckCircleIcon />
                        </IconButton>
                    </Box>
                </Box>
            </div >
        )
    }
    else {
        return (
            <div>
                <Box sx={{ padding: 1, display: 'flex', alignItems: 'center', border: '1px #D4D4D5 solid', 'border-radius': '8px' }}>
                    <Box sx={{ margin: 1 }}>
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>
                    <Stack sx={{ width: '90%', display: 'flex', alignItems: 'left' }}>
                        <Typography><b>{props.name}</b> wants to join your event at <b>{props.location}.</b></Typography>
                        <Button variant="contained" style={{ 'margin-right': '55%', borderRadius: 28 }} component={Link} to={`/message/${props.name}/${props.location}`}>Message</Button>
                    </Stack>
                    <Box sx={{ width: '10%', display: 'flex', alignItems: 'center' }}>
                        <IconButton color='#f44336' aria-label="Reject">
                            <CancelIcon />
                        </IconButton>
                    </Box>
                </Box>
            </div >
        )
    }
}

function PastResult(props) {
    if (props.status === "Accept") {
        return (
            <div>
                <Box sx={{ padding: 1, display: 'flex', alignItems: 'center', border: '1px #D4D4D5 solid', 'border-radius': '8px' }}>
                    <Box sx={{ margin: 1 }}>
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>
                    <Stack sx={{ width: '90%', display: 'flex', alignItems: 'left' }}>
                        <Typography><b>{props.name}</b> accepted you to join the <b>{props.location} event.</b></Typography>
                        <Button variant="contained" style={{ 'margin-right': '60%', borderRadius: 28 }} component={Link} to={`/message/${props.name}/${props.location}`}>Message</Button>
                    </Stack>
                </Box>
            </div >
        )
    } 
    else {
        return (
            <div>
                <Box sx={{ padding: 1, display: 'flex', alignItems: 'center', border: '1px #D4D4D5 solid', 'border-radius': '8px' }}>
                    <Box sx={{ margin: 1 }}>
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    </Box>
                    <Stack sx={{ width: '90%', display: 'flex', alignItems: 'left' }}>
                        <Typography><b>{props.name}</b> rejected you at the <b>{props.location} event.</b></Typography>
                    </Stack>
                </Box>
            </div >
        )
    }
}