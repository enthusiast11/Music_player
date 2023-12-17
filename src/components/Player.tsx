import React, {useState, useRef, useEffect} from 'react'


import { Paper, Button, Avatar, Slider, Typography, Container, duration} from '@mui/material'




import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PauseIcon from '@mui/icons-material/Pause';
import { log } from 'console';



interface IMusic {
  id: string
  src: string
  preview: string
  duration: number
  title: string
  artists: string
}

let audio = new Audio("https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/250/what-i-say-1668733254-7bXF48DYkS.mp3")
export const Player = (data: IMusic[]) => {

  

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMusic, setCurrentMusic] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(()=> {
      const timeInterval = setInterval(() => {
        setCurrentTime(Math.round(audio.currentTime))
        
      }, 1000)
  }, [])

 

  const togglePlaying = () => {
    setIsPlaying(!isPlaying)
    if(isPlaying) audio.pause()
    else {
      audio.play()
    }
  }
  const nextMusic = () => {
    if(currentMusic==12){
      audio.src = data[0].src
      setCurrentMusic(0)
    }
    audio.src = data[currentMusic+1].src
    setIsPlaying(true)
    audio.play()
    setCurrentMusic(currentMusic+1)
    
  }
  const previousMusic = () => {
    if(currentMusic==0){
      audio.src = data[12].src
      
      
      setCurrentMusic(12)
    }
    audio.src = data[currentMusic-1].src
    setIsPlaying(true)
    audio.play()
    setCurrentMusic(currentMusic-1)
    
  }
  function convertSecondsToMinutes(seconds: number) {
    const minutes = Math.round(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
 
  const changeCurrentTime = (value: number) => {
  
    const time = Math.round((value/ 100) * data[currentMusic].duration )

    setCurrentTime(time)
    sliderCurrentTime = time

    audio.currentTime = time



  }

  
  let sliderCurrentTime = Math.round((currentTime / data[currentMusic].duration) * 100);
  const formatedCurrentTime = convertSecondsToMinutes(currentTime)
  const formatedDuration = convertSecondsToMinutes(data[currentMusic].duration)
  
  
  return (
    <Container sx={{textAlign: 'center', mt: 10,  display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <Paper sx={{padding:'40px',  height:'300px', width:'35%',}}>
        <Avatar sx={{margin:'auto', width: '150px', height:'150px'}} src={data[currentMusic].preview} />
        <Typography  sx={{mt:3, fontSize:'25px'}}> {data[currentMusic].title}</Typography>
        <Typography  sx={{mt:1, fontSize:'15px'}}> {data[currentMusic].artists}</Typography>
        <div style={{display: 'flex'}}>
          <div style={{width:'80px', margin:'auto'}}>{formatedCurrentTime}   </div>
          <Slider step={1} min={0} max={100} value={sliderCurrentTime}></Slider>
          <div style={{width:'80px', margin:'auto'}}>{formatedDuration}</div>
        </div>
        
        <div >
          <Button onClick={() => previousMusic()}><FastRewindIcon style={{width:'50px', height:'50px'}}/></Button>
          <Button onClick={() =>togglePlaying()} >{isPlaying? <PauseIcon  style={{width:'50px', height:'50px'}}/> : <PlayArrowIcon style={{width:'50px', height:'50px'}} />}</Button>
          <Button onClick={() => nextMusic()}><FastForwardIcon  style={{width:'50px', height:'50px'}}/></Button>   
        </div>
        
    </Paper>
    </Container>
    
  )
}
export default Player