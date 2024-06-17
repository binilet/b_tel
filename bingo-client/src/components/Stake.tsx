import React, { useState, useEffect } from 'react';
import StakeCard from './StakeCard';
import { Grid } from '@mui/material';

const Stake: React.FC = () => {

    return (
        <Grid container spacing={0}>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={10} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={20} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={30} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={40} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={50} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={100} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={150} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={200} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={500} games={4}/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <StakeCard amount={500} games={4} isPrivate={true}/>
        </Grid>
    </Grid>
    );
}
export default Stake;