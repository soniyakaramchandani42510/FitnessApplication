import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
function SimilarExercises({ MuscleDataExcercises, equipmentDataExcercise }) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      SimilarExercises
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {MuscleDataExcercises.length !== 0 ? (
          MuscleDataExcercises.map((data) => (
            
               <h1>heiiii</h1> 
              
                
             
          
          ))
        ) : (
          <Loader />
        )}
      </Stack>
      {/* <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentDataExcercise.length !== 0 ? <HorizontalScrollbar data={equipmentDataExcercise} /> : <Loader />}
    </Stack> */}
    </Box>
  );
}

export default SimilarExercises;
