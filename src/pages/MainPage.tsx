import React from 'react'

import Player from '../components/Player'

import { useQuery } from 'react-query';
const fetchData = async () => {
  const response = await fetch('http://localhost:3001/songs');
  const data = await response.json();
  return data;
};


const MainPage = () => {
  const  {data, isLoading,}  = useQuery('songs', fetchData);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <Player {...data}/>
  )
}

export default MainPage