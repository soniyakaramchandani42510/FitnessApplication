import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { textAlign, width } from "@mui/system";
import axios from "axios";

import HorizontalScrollbar from "./HorizontalScrollbar";
function SearchExcercises({
  excercises,
  setexcercises,
  BodyPart,
  setBodyPart,
}) {
  const [search, setsearch] = useState("");

  const [bodyparts, setbodyparts] = useState([]);

  useEffect(() => {
    // console.log('hoiii');

    const fetchExcercises = () => {
      console.log("working");
      const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        headers: {
          'X-RapidAPI-Key': 'b6c6d5d8fdmshc8e1864b2da5441p1507dejsnb2d01e700f3d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        },
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          const bodydata = response.data;
          setbodyparts(bodydata);

          console.log(bodyparts);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchExcercises();
  }, []);

  const SearchExcercise = (event) => {
    console.log(search);
    setsearch(event.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (search) {
      const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises",
        headers: {
          'X-RapidAPI-Key': 'b6c6d5d8fdmshc8e1864b2da5441p1507dejsnb2d01e700f3d',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        },
      };
      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);

          const searchedExcercises = response.data.filter(
            (excercise) =>
              // console.log(excercise.bodyPart.toLowerCase().includes())
              excercise.name.toLowerCase().includes(search) ||
              excercise.target.toLowerCase().includes(search) ||
              excercise.equipment.toLowerCase().includes(search) ||
              excercise.bodyPart.toLowerCase().includes(search)
          );
          setsearch("");
          setexcercises(searchedExcercises);
          console.log(excercises);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert("search exercise");
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={900}
        sx={{ fontsize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        {" "}
        Awesome Excercises You
        <br />
        Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              textAlign: "center",
            },
            width: { lg: "800px", sx: "450px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          placeholder="Search Excercises"
          type="text"
          onChange={SearchExcercise}
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontsize: { lg: "20px", xs: "14px" },
            height: "56px",
            // position:"absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyparts}
          BodyPart={BodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
}

export default SearchExcercises;
