import * as React from 'react';
import LowerFrame from './LowerFrame';
import UpperFrame from './UpperFrame';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AvatarGroup from '@mui/material/AvatarGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Image = styled('img')({
  width: '100px',
  height: '100px',
  'border-radius': '8px',
  'padding': '5px'
});

export default function Home() {
  const title = {
    'font-weight': '600',
    padding: '0 20px'
  };

  return (
    <div>
      <UpperFrame/>
      

      <div style={title}>
        <h2>Meal Pals</h2>
        <h3>join a meal with schoolmates!</h3>
      </div>

      <TextField
        style={{ width: "89%", padding: "0 20px" }}
        label="Search Restaurant or Cuisine"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <div style={{ 'padding-left': "10px" }}>
        <FormControl sx={{ m: 1, minWidth: 90 }}>
          <InputLabel htmlFor="grouped-native-select">cuisine</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="cuisine">
            <option aria-label="None" value="" />
            <optgroup label="Japanese">
              <option value={1}>Sushi</option>
              <option value={2}>Ramen</option>
            </optgroup>
            <optgroup label="American">
              <option value={3}>Burger</option>
              <option value={4}>Pizza</option>
            </optgroup>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 90 }}>
          <InputLabel htmlFor="grouped-select">Time</InputLabel>
          <Select defaultValue="" id="grouped-select" label="Time">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Today</MenuItem>
            <MenuItem value={2}>7 days</MenuItem>
            <MenuItem value={3}>14 days</MenuItem>
            <MenuItem value={4}>30 days</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 90 }}>
          <InputLabel htmlFor="grouped-select-2">Budget</InputLabel>
          <Select defaultValue="" id="grouped-select-2" label="Budget">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={5}>$10-$20</MenuItem>
            <MenuItem value={6}>$20-$50</MenuItem>
            <MenuItem value={7}>$50+</MenuItem>
          </Select>
        </FormControl>
      </div>


      <Grid>
        <SkeletonChildrenDemo />
      </Grid>
      <Grid>
        <SkeletonChildrenDemo />
      </Grid>
      <Grid>
        <SkeletonChildrenDemo />
      </Grid>

      <LowerFrame/>

    </div>

  );
}

function SkeletonChildrenDemo() {
  return (
    <div style={{ margin: '10px', border: '1px #D4D4D5 solid', 'border-radius': '8px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>Eve</Typography>
          <AvatarGroup max={4}>
            <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
            <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
          </AvatarGroup>
        </Box>
      </Box>
      <div style={{ width: '350px', height: '1px', background: '#D4D4D5', margin: '0 auto' }}></div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ position: 'relative' }}>
          <IconButton color="primary" aria-label="add to favorite" style={{ position: 'absolute', right: '0px', color: 'white'}}>
            <FavoriteBorderIcon />
          </IconButton>
          <Image
            src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
            alt=""
          />
        </div>

        <ul style={{ 'list-style': 'none' }}>
          <li>Thai Market</li>
          <li>Friday, Dec 9th, 12:00 p.m.</li>
          <li>960 Amsterdam Ave</li>
        </ul>
      </div>

    </div>
  );
}



const restaurants = [
  { title: 'Mexican', cuisine: 'Taco Place' },
  { title: 'Chinese', cuisine: 'Tang Noodles' },
  { title: 'Thai', cuisine: 'Thai Market' },
  { title: 'American', cuisine: 'Shake Shack' }]
