import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
function Bodypart({item,BodyPart,setBodyPart}) {
    const selectedPart=()=>{
        setBodyPart(item);
        console.log(BodyPart);
        window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }
  return (
   <Stack 
   type="button"
   alignItems="center"
   justifyContent="center"
   className="bodyPart-card"
   sx={Bodypart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
   onClick={selectedPart}
   >
    <img src={Icon} alt="" style={{width:'40px',height:'40px'}}/>
    <Typography  fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item} </Typography>
   </Stack>
  )
}

export default Bodypart