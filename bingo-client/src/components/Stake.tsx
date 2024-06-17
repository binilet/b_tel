//import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StakeCard from './StakeCard';
import { Grid } from '@mui/material';

const Stake: React.FC = () => {

    const navigate= useNavigate();
    
    const handleCardClick = (amount: number) => {
        //setSelectedCard({ amount, games });
        navigate(`/gameWindow/${amount}`);
        
    };

    return (
        <>
        <Grid container spacing={0}>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(10)}>
            <StakeCard amount={10} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(20)}>
            <StakeCard amount={20} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(30)}>
            <StakeCard amount={30} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(40)}>
            <StakeCard amount={40} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(50)}>
            <StakeCard amount={50} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(100)}>
            <StakeCard amount={100} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(150)}>
            <StakeCard amount={150} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(200)}>
            <StakeCard amount={200} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6} onClick={() => handleCardClick(500)}>
            <StakeCard amount={500} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={500} games={4} isPrivate={true}/>
        </Grid>
    </Grid>
    
    </>
    );
}
export default Stake;