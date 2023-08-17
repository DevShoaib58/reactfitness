import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const HomeBanner = () => {
    return (
        <Box sx={{ background: "#3498db" }}>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={8}>
                        <Box>
                            <Typography variant='h1'>Hello Gym Nerds</Typography>
                            <Typography variant='h2'>Gear Up</Typography>
                            <Button variant="contained">Contained</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            component="img"
                            sx={{
                                margin: "20px auto",
                                display: "block",
                                borderRadius: "5px",
                                height: "auto",
                                width: "100%",
                                // maxHeight: { xs: 233, md: 167 },
                                // maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="The house from the offer."
                            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default HomeBanner;