import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercises";
import Exercises from "../components/Exercises";
function Home() {
  
  const [BodyPart, setBodyPart] = useState('');
  const [excercises, setexcercises] = useState([]);
  console.log(BodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises
      excercises={excercises}
       setexcercises={setexcercises}
        BodyPart={BodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        
        BodyPart={BodyPart}
        excercises={excercises}
        setexcercises={setexcercises}
       
      />
    </Box>
  );
}

export default Home;
