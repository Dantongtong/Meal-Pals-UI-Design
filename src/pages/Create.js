import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';
import dayjs from 'dayjs';
import { InputNumber, DatePicker, TimePicker, Input, Switch } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


dayjs.extend(customParseFormat);
const { TextArea } = Input;

export default function Create() {
    const switchControl = {
        display: 'flex',
        'justify-content': 'space-between',
        'margin-bottom': '20px'
    };
    const inputTitle = {
        'font-weight': '600',
        'font-size': '20px',
        'line-height': '24px',
        'letter-spacing': '0.38px',
        'padding': '16px 0 20px'
    };
    const banner = {
        'text-align': 'center',
        'background': '#FFFFFF',
        'border-bottom': '1px solid #EEEEEE',
        'padding': '10px 12px',
        'font-size': '18px',
        'margin-bottom': '15px'
    };
    const subtitle = {
        'padding-bottom': '5px'
    }
    return (
        <div>
            <UpperFrame />
            <div style={banner}>Create an Event</div>

            <div style={{ padding: '0 20px' }}>
                <div style={inputTitle}>Event Information</div>
                <div>
                    <div style={subtitle}>Date and Time</div>
                    <DatePicker />
                    <TimePicker defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                    <div style={banner}></div>
                </div>


                <div>
                    <div>Maximum Number of Participants</div>
                    <div style={subtitle}>(not including yourself)</div>
                    <InputNumber min={1} max={10} defaultValue={3} />
                    <div style={banner}></div>
                </div>

                <div>
                    <div style={subtitle}>Event Description</div>
                    <TextArea rows={4} />
                    <div style={banner}></div>
                </div>

                <div style={switchControl}>
                    <div>Need Permission to Join</div>
                    <Switch defaultChecked />
                </div>

                <div style={switchControl}>
                    <Button variant="contained" component={Link} to='/post'>Previous</Button>
                    <Button variant="contained">Next</Button>
                </div>
                <LowerFrame />
            </div>


        </div >
    );
}
