import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { exerciseOption, fetchData } from '../utils/fetchData';

const SearchExecise = () => {
    const [search, setSearch] = useState("")
    const HandlerSearch = async () => {
        if (search) {
            const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOption)
            console.table('exerciseData: ', exerciseData);
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
                </Container>
            </Box>
        </div>
    );
};

export default SearchExecise;