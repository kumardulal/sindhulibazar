import React from 'react'
import DrawerAppBar from '../components/Navbar'
import ImgMediaCard from '../components/ItemCard'
import { Box } from '@mui/material'
import Item from '../data/item.json'

const Home = () => {
  return (
    <>
        <DrawerAppBar>
        {/* <img src='https://i.imgur.com/bvliFME.jpg' style={{height:250}}/>
              <img src='https://i.imgur.com/9dKWY8A.jpg' style={{height:250}}/>
              <img src='https://i.imgur.com/YSIHio3.pngjpg' style={{height:250}}/> */}
            <Box sx={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap', gap: 2, maxWidth: '100%' }} mt={5}>
             
            <text style={{width:"100%",fontSize:20,backgroundColor:"orange",padding:10}}>FIND YOUR DRINK HERE</text>           
            {
                Item?.map((dt, index) => (
                    <ImgMediaCard key={index} data={dt} />
                ))
            }
            </Box>
        </DrawerAppBar>
    </>
  )
}

export default Home
