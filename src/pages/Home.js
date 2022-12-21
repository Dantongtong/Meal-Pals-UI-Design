import * as React from 'react';
import LowerFrame from './LowerFrame';
import UpperFrame from './UpperFrame';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AvatarGroup from '@mui/material/AvatarGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';


const Image = styled('img')({
  width: '100px',
  height: '100px',
  'border-radius': '8px',
  'padding': '5px'
});

export default function Home() {
  const title = {
    'font-weight': '600',
    'padding-top': '20px',
    'padding-right': '30px',
    'padding-bottom': '50px',
    'padding-left': '30px',
    // padding: '25px 50px 25px 10px',
    color: "#F6F6F8",
    position: "absolute",
    top: 50,
  };

  return (
    <div>
      <UpperFrame />

      <Card style={{
        border: "none", boxShadow: "none", margin: 15, mb: 50,
        'border-radius': '8px',
        filter: 'brightness(0.7)'
      }}>
        <div style={{ position: "relative" }}>
          <CardMedia style={{ height: "120px", opacity: 0.85 }} component="img" image={require('../images/header.jpg')} title="Header" alt="header image of fusion restaurant" />
        </div>
      </Card>


      <div style={title}>
        <h2>Meal Pals</h2>
        <h3>Join a meal with schoolmates!</h3>
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
          <InputLabel htmlFor="grouped-native-select">Cuisine</InputLabel>
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
          <InputLabel htmlFor="grouped-native-select">Time</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Time">
            <option aria-label="None" value="" />
            <option value={1}>Today</option>
            <option value={2}>7 days</option>
            <option value={3}>14 days</option>
            <option value={4}>30 days</option>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 90 }}>
          <InputLabel htmlFor="grouped-native-select">Budget</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Budget">
            <option aria-label="None" value="" />
            <option value={5}>$10-$20</option>
            <option value={6}>$20-$50</option>
            <option value={7}>$50+</option>
          </Select>
        </FormControl>
      </div>


      <Grid>
        <SkeletonChildrenDemo name="Eve" joined="2" left="1" location="Thai Market" time="Friday, Dec 9th, 12:00 p.m." />
      </Grid>
      <Grid>
        <SkeletonChildrenDemo name="Kiley" joined="3" left="1" location="Serafina" time="Saturday, Dec 31th, 8:00" />
      </Grid>
      <Grid>
        <SkeletonChildrenDemo name="Dantong" joined="1" left="3" location="Amity Hall Uptown" time="Thursday, Jan 5th, 7:30 p.m." />
      </Grid>

      <LowerFrame />

    </div>

  );
}

function SkeletonChildrenDemo(props) {
  const joinedInt = parseInt(props.joined, 10);
  const leftInt = parseInt(props.left, 10);
  const total = joinedInt + leftInt;
  const totalString = total.toString();
  const subheader = props.joined + " joined / " + totalString + " total";
  return (
    <div style={{ margin: '10px', border: '1px #D4D4D5 solid', 'borderRadius': '4px' }}>
      <Card>
        <CardHeader sx={{ maxHeight: 10 }}
          avatar={
            <Avatar src="https://img1.baidu.com/it/u=2885619241,1407342247&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
              sx={{ width: 30, height: 30 }}
            />
          }
          action={
            <AvatarGroup total={joinedInt}>
              {Array.from({ length: joinedInt }, (_, i) =>
                <span key={i}>
                  <Avatar src="https://img0.baidu.com/it/u=2715776483,47939737&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=466"
                    sx={{ width: 30, height: 30 }} />
                </span>)}
            </AvatarGroup>
          }
          title={props.name}
          subheader={subheader}
        />
        <CardActionArea component={Link} to={`/eventdetail/${props.name}/${props.location}/${props.time}/${props.joined}/${props.left}`}>
          <CardContent sx={{ maxHeight: 100, 'padding': '5px 16px 16px' }}>
            <div style={{ width: '350px', height: '1px', background: '#D4D4D5', margin: '0 auto' }}></div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ position: 'relative' }}>
                <IconButton color="primary" aria-label="add to favorite" style={{ position: 'absolute', right: '0px', color: 'white' }}>
                  <FavoriteBorderIcon />
                </IconButton>
                <Image
                  src="https://img1.baidu.com/it/u=2079428828,3771288806&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=371"
                  alt="" />
              </div>

              <div style={{ 'list-style': 'none', 'padding': '10px' }}>
                <div><b>{props.location}</b></div>
                <div>{props.time}</div>
                <div>960 Amsterdam Ave</div>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

    </div>
  );
}

