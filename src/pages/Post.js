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
import { useState } from "react";


export default function Post() {
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
    const [resname, setName] = useState('');
    const [resaddress, setAddress] = useState('');

    const changeName = (event, newValue) => {
        setName(newValue.code);
        setAddress(newValue.street);
    };
    return (
        <div>
            <UpperFrame />

            <div style={banner}>Create an Event</div>

            <div>
                <div style={title}>
                    <div>Which Restaurant</div>
                    <div>are you looking for?</div>
                </div>
                <Autocomplete
                    id="restaurant-select-demo"
                    sx={{ width: '95%', margin: '0 auto' }}
                    options={restaurants}
                    getOptionLabel={(option) => option.code}
                    renderOption={(props, option) => (
                        <div {...props} style={inputTitle}>
                            <div style={inputSubTitle}>{`${option.code}`}</div>
                            <div style={inputSubTitle2}>{`${option.distance} · ${option.street}`}</div>
                        </div>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Enter the restaurant name"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                    onChange = {changeName}
                />
            </div>

            <div style={{ display: 'flex', 'align-items': 'center', 'margin-top': '20px' }}>
                <div style={{ width: '120px', height: '1px', background: '#D4D4D5', margin: '0 auto' }}></div>
                <div>Can’t find?</div>
                <div style={{ width: '120px', height: '1px', background: '#D4D4D5', margin: '0 auto' }}></div>
            </div>

            <div>
                <div style={title}>Paste the Yelp Restaurant URL </div>
                <FormControl fullWidth sx={{ m: 1, width: '95%' }}>
                    <InputLabel htmlFor="outlined-adornment-amount">URL</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<SearchIcon />}
                        label="Amount"
                        placeholder='Enter the Yelp URL'
                    />
                </FormControl>
            </div>

            <Button variant="contained" style={{ 'float': 'right', 'margin-right': '10px' }} component={Link} to={`/confirm/${resname}/${resaddress}`}>Create</Button>

            <LowerFrame />
        </div >
    );
}

const restaurants = [
    { code: 'Crab House All You Can Eat Seafood', distance: '3.3 mi', street: '135 E 55th St, New York' },
    { code: 'Shaking Crab', distance: '0.2 mi', street: '2869 Broadway, New York' },
    { code: 'Crab Du Jour', distance: '2.9 mi', street: '8101 Tonnelle Ave, Ste 2, North Bergen' }
]