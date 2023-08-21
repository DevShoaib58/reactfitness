import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOption, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExecise = () => {
    const [search, setSearch] = useState("")
    const [exercises, setExercises] = useState([])
    const [bodyParts, setBodyParts] = useState([])
    useEffect(() => {
        const fetchExerciesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOption)
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExerciesData()
    }, [])
    const HandlerSearch = async () => {
        if (search) {
            // const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOption) This Will Only Shows the Part list
            // This Will Show All the Exercies 
            const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOption)
            console.table('exerciseData: ', JSON.parse(exerciseData));
            const searchedExercise = exerciseData.filter((exercies) =>
                exercies.name.toLowerCase().inludes(search)
                || exercies.name.toLowerCase().inludes(search)
                || exercies.target.toLowerCase().inludes(search)
                || exercies.equipment.toLowerCase().inludes(search)
                || exercies.bodyPart.toLowerCase().inludes(search)
            );
            setSearch("");
            setExercises(searchedExercise)
        }

    }
    return (
        <div>
            <Box>
                <Container>
                    <Box sx={{ margin: "20px", textAlign: "center" }}>
                        <Typography variant='h2'>Search Your Workout Here</Typography>
                        <TextField type='text' sx={{ width: "80%" }} value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} label="Search Your Workout Here" variant="standard" /> <Button onClick={HandlerSearch} sx={{ mt: 2 }} variant="contained">Search</Button>
                    </Box>
                    <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                        <HorizontalScrollbar data={bodyParts} />
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default SearchExecise;