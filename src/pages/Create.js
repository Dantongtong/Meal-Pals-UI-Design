import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';
import dayjs from 'dayjs';
import { InputNumber, DatePicker, TimePicker, Input, Switch } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Button from '@mui/material/Button';


dayjs.extend(customParseFormat);
const { TextArea } = Input;

export default function Create() {
    const switchControl = {
        display: 'flex',
        'justify-content': 'space-between'
    };
    const inputTitle = {
        'font-weight': '600',
        'font-size': '20px',
        'line-height': '24px',
        'letter-spacing': '0.38px',
        'padding': '26px 0 20px'
    };
    const banner = {
        'text-align': 'center',
        'background': '#FFFFFF',
        'border-bottom': '1px solid #EEEEEE',
        'padding': '10px 12px',
        'font-size': '18px'
    };
    return (
        <div>
            <UpperFrame />
            <div style={banner}>Create an Event</div>
            <div style={inputTitle}>Event Information</div>
            <div>Date and Time</div>
            <DatePicker />
            <TimePicker defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />

            <div>
                <div>Maximum Number of Participants
                    (not including yourself)</div>
                <InputNumber min={1} max={10} defaultValue={3} />
            </div>

            <div>
                <div>Event Description</div>
                <TextArea rows={4} />
            </div>

            <div style={switchControl}>
                <div>Need Permission to Join</div>
                <Switch defaultChecked/>
            </div>

            <div style={switchControl}>
                <Button variant="contained">Previous</Button>
                <Button variant="contained">Next</Button>
            </div>
            <LowerFrame />
        </div >
    );
}
