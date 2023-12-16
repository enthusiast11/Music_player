import React, {useState} from 'react'


import { Paper, Button, Avatar, Slider, Typography, Container} from '@mui/material'

import ReactPlayer from 'react-player';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';

export const Player = () => {

  
  return (
    <Container sx={{textAlign: 'center', mt: 10,  display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <Paper sx={{padding:'40px',  height:'300px', width:'35%',}}>
        <Avatar sx={{margin:'auto', width: '150px', height:'150px'}}/>
        <Typography  sx={{mt:3, fontSize:'25px'}}> Название песни</Typography>
        <Slider></Slider>
        <div >
          <Button><FastRewindIcon style={{width:'50px', height:'50px'}}/></Button>
          <Button><PlayArrowIcon style={{width:'50px', height:'50px'}}/></Button>
          <Button><FastForwardIcon style={{width:'50px', height:'50px'}}/></Button>   
        </div>
        
    </Paper>
    </Container>
    
  )
}
export default Player