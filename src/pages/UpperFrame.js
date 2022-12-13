import * as React from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import Battery5BarRoundedIcon from '@mui/icons-material/Battery5BarRounded';


export default function LowerFrame() {
    const upperNavi = {
        display: 'flex',
        'justify-content': 'space-between',
        padding: '10px 20px',
        'font-size': '17px',
        'font-weight': '600'
    };
    const batteryRotatedIcon = {
        transform: 'rotate(90deg)'
    }

    return (
        <div style={upperNavi}>
            <div>9:41</div>
            <div>
                <SignalCellularAltRoundedIcon />
                <WifiIcon />
                <Battery5BarRoundedIcon style={batteryRotatedIcon} />
            </div>
        </div>
    )
}