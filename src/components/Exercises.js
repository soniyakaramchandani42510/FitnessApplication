import React,{useEffect,useState} from 'react'
import { Pagination ,Box,Stack,Typography} from '@mui/material'
import ExcerciseCard from './ExcerciseCard';

import axios from 'axios';
function Exercises({ BodyPart,excercises,setexcercises}) {

const [currentPage, setcurrentPage] = useState(1)
const ExcercisePerPage=9;
const indexOfLastExcercise=currentPage*ExcercisePerPage;
const indexOfFirstExcercise=indexOfLastExcercise-ExcercisePerPage;
const currentExcercises=excercises.slice(indexOfFirstExcercise,indexOfLastExcercise )

const paginate=(event,value)=>{
  setcurrentPage(currentPage+1);
  window.screenTop({top:1800,behavior:'smooth'})
}

useEffect(() => {
  // console.log('hoiii');

  const fetchExcercises = () => {
    console.log("working");
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${BodyPart}`,
      headers: {
        'X-RapidAPI-Key': 'b6c6d5d8fdmshc8e1864b2da5441p1507dejsnb2d01e700f3d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
      
        setexcercises(response.data);
       
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  fetchExcercises();
}, [BodyPart]);
  console.log(excercises);
  return (
    
    <Box id="excercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
     
      <Typography variant="h3"mb="46px">Showing Results</Typography>

      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
        {
          currentExcercises.map((excercise,index)=>(
            <p> <ExcerciseCard key={index} excercise= {excercise}/> </p>
          ))
        }
      </Stack>

      <Stack mt="100px" alignItems="center"> 
          {
            
            excercises.length>9 &&(
              <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(excercises.length/9)}
              page={currentPage}
              onChange={paginate}
              />
              )
           
          }
      </Stack>
    </Box>
  )
}

export default Exercises