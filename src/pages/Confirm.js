import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { InputNumber } from 'antd';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';

const cuisines = [
    {
        value: 'American',
        label: 'US',
    },
    {
        value: 'Italian',
        label: 'Italy',
    },
    {
        value: 'Japanese',
        label: 'Japan',
    },
    {
        value: 'Mexican',
        label: 'Mex',
    },
];
const switchControl = {
    display: 'flex',
    'justify-content': 'space-between',
    'margin-bottom': '20px'
};

export default function Confirm() {
    const {resname, resaddress} = useParams();

    const banner = {
        'text-align': 'center',
        'background': '#FFFFFF',
        'border-bottom': '1px solid #EEEEEE',
        'padding': '10px 12px',
        'font-size': '18px',
        'margin-bottom': '15px'
    };
    const inputTitle = {
        'font-weight': '600',
        'font-size': '20px',
        'line-height': '24px',
        'letter-spacing': '0.38px',
        'padding': '16px 0 20px'
    };
    return (
        <div>
            <UpperFrame />
            <div style={banner}>Confirm Restaurant Information</div>

            <div style={{ padding: '0 20px' }}>
                <div style={inputTitle}>Restaurant Information</div>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard" style={{ margin: '0 0 20px' }}>
                    <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
                    <Input
                        type = "text"
                        id="restaurant-name"
                        value={resname}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard" style={{ margin: '0 0 20px' }}>
                    <InputLabel htmlFor="standard-adornment-amount">Address</InputLabel>
                    <Input
                        type = "text"
                        id="restaurant-address"
                        value={resaddress}
                    />
                </FormControl>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Type of Cuisine"
                    defaultValue="EUR"
                    variant="standard"
                    style={{ width: '350px' }}
                >
                    {cuisines.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{ margin: '20px 0' }}>
                    <div>Price</div>
                    <InputNumber
                        defaultValue={20}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </div>

                <div style={switchControl}>
                    <Button variant="contained" component={Link} to='/post'>Previous</Button>
                    <Button variant="contained" component={Link} to='/create'>Next</Button>
                </div>
            </div>

            <LowerFrame />
        </div>

    );
}