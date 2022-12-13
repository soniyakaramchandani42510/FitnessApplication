import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box,Typography} from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import axios from 'axios'
function ExcersiceDetail() {
const [excerciseDetail, setexcerciseDetail] = useState({});
const [MuscleDataExcercises,setMuscleDataExcercises]=useState({});
const [equipmentDataExcercise, setequipmentDataExcercise] = useState({})
const{id}=useParams();

useEffect(()=>{
 const fetchExcerciseData=()=>{
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    headers: {
      'X-RapidAPI-Key': 'b6c6d5d8fdmshc8e1864b2da5441p1507dejsnb2d01e700f3d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    // console.log(response.data);
    setexcerciseDetail(response.data);
    console.log(excerciseDetail)
  }).catch(function (error) {
    console.error(error);
  });

}

const TargetMuscleData=()=>{
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${excerciseDetail.target}`,
    headers: {
      'X-RapidAPI-Key': 'b6c6d5d8fdmshc8e1864b2da5441p1507dejsnb2d01e700f3d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    
    setMuscleDataExcercises(response.data )
    console.log(MuscleDataExcercises);
  }).catch(function (error) {
    console.error(error);
  });
}

const Equipment=()=>{
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${excerciseDetail.equipment}`,
    headers: {
      'X-RapidAPI-Key': 'b6c6d5d8fdmshc8e1864b2da5441p1507dejsnb2d01e700f3d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    // console.log(response.data);
    setequipmentDataExcercise(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}

// const Youtube=()=>{
//   const options = {
//     method: 'GET',
//     url: `https://youtube-search-and-download.p.rapidapi.com'/search?query=${excerciseDetail.name}`,
//     params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
//     headers: {
//       'X-RapidAPI-Key': '6eb8e11e8bmsh566733f32738f76p1dda9cjsnd135e0aed99e',
//       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//     console.log('hiiii');
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }
  
// Youtube();
Equipment();
TargetMuscleData();
 fetchExcerciseData();
},[id])
  return (
    <Box>
   <Detail excerciseDetail={excerciseDetail} />
   {/* <ExerciseVideos/> */}
   {/* <SimilarExercises MuscleDataExcercises={MuscleDataExcercises} equipmentDataExcercise={equipmentDataExcercise}  /> */}
   </Box>
  )
}

export default ExcersiceDetail