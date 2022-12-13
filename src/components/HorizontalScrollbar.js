import React, { useContext } from 'react'
import {Box,Typography} from '@mui/material'
import Bodypart from './Bodypart'
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
import ExcerciseCard from './ExcerciseCard'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
function HorizontalScrollbar({data,BodyPart,setBodyPart,isBodyParts}) {
    
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {   
        data.map((item)=>(
         
            <Box
            key={item.id|| item}
            itemId={item.id|| item}
            title={item.id|| item}
            m="0"
            >
             {
                    <Bodypart item= {item}
                      BodyPart={BodyPart}
                      setBodyPart={setBodyPart}
                     /> 
             }  
            
            </Box>
        ))
    }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar