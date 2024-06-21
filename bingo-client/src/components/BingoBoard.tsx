// src/components/BingoBoard.tsx
import React, { useState, useEffect } from 'react';
//import { useLocation } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    Paper,
   
} from '@mui/material';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import CachedIcon from '@mui/icons-material/Cached';
import AssistantIcon from '@mui/icons-material/Assistant';

import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const BingoBoard: React.FC = () => {
    
    const navigate= useNavigate();

    const {betAmount} = useParams();

    const [numbers, setNumbers] = useState<number[]>([]);
    const [calledNumbers, setCalledNumbers] = useState<string[]>([]);
    const [currentCall, setCurrentCall] = useState<string | null>(null);
    const [lastFiveCalls,setLastFiveCalls] = useState<string[]>([]);

    const handleLeaveClick = () => {
        navigate('/stake');
    }

    useEffect(() => {
        const generateBoard = () => {
            const columns = ['B', 'I', 'N', 'G', 'O'];
            let board: number[] = [];
            for (let i = 0; i < columns.length; i++) {
                let colNumbers = [];
                for (let j = 1; j <= 15; j++) {
                    colNumbers.push(j + (i * 15));
                }
                colNumbers = colNumbers.sort(() => Math.random() - 0.5).slice(0, 5);
                board = [...board, ...colNumbers];
            }
            setNumbers(board);
        };
        generateBoard();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const columns = ['B', 'I', 'N', 'G', 'O'];
            const column = columns[Math.floor(Math.random() * columns.length)];
            const number = Math.floor(Math.random() * 15) + 1 + (columns.indexOf(column) * 15);
            const call = `${column} - ${number}`;
            setCurrentCall(call);
            setLastFiveCalls(prevNumbers => [...prevNumbers, call])
            setCalledNumbers(prevNumbers => [...prevNumbers, call]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderNumbers = (start: number) => {
        return Array.from({ length: 15 }, (_, i) => start + i).map(num => (
            <Grid item xs={12} key={num}>
              {num}
                {/* <Chip
                    label={num}
                    color={calledNumbers.includes(num.toString()) ? 'primary' : 'default'}
                    sx={{ width: '100%' }}
                    variant="outlined"
                /> */}
            </Grid>
        ));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, bgcolor: 'lavender', height: '100vh',gap:'10px' }}>
            
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" fullWidth>ደራሽ - 150</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" fullWidth>ቦነስ  - 16</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" fullWidth>ምድብ {` - ${betAmount}`}</Button>
                        </Grid>
                        {/* <Grid item xs={4}>
                            <Button variant="contained" color="primary" fullWidth>Leave</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" fullWidth>Leave</Button>
                        </Grid> */}
                    
                    </Grid>
               
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Paper elevation={0} sx={{ flex: 1, mr: 2, p: 2 }}>
                    <Grid container justifyContent="space-between">
                        {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
                            <Grid item xs={2.4} key={letter} sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" style={{fontWeight:'bolder'}} sx={{ color: ['red', 'red', 'red', 'red', 'red'][index] }}>
                                    {letter}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={2.4}>
                            {renderNumbers(1)}
                        </Grid>
                        <Grid item xs={2.4}>
                            {renderNumbers(16)}
                        </Grid>
                        <Grid item xs={2.4}>
                            {renderNumbers(31)}
                        </Grid>
                        <Grid item xs={2.4}>
                            {renderNumbers(46)}
                        </Grid>
                        <Grid item xs={2.4}>
                            {renderNumbers(61)}
                        </Grid>
                    </Grid>
                </Paper>
                <Box sx={{ flex: 2, p: 2 }}>
                    <Card sx={{ mb: 2 }} style={{background:'#121212'}}>
                        <CardContent>
                            <Typography variant="h6" align="center" style={{color:'white'}} >Current Call</Typography>
                            <Typography variant="h4" align="center" color="secondary">{currentCall}</Typography>
                        </CardContent>
                    </Card>
                    <Grid container justifyContent="space-between">
                        {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
                            <Grid item xs={2.4} key={letter} sx={{ textAlign: 'center' }}>
                                
                                  <Typography variant="h5" style={{fontWeight:'bolder'}} sx={{ color: ['red', 'green', 'brown', 'dark', 'blue'][index] }}>
                                      {letter}
                                  </Typography>
                                
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={0} sx={{ mb: 2 }}>
                        
                        {numbers.map((num, idx) => (
                            <Grid item xs={2.4} key={idx}>
                                <Paper style={{padding:'10px'}}
                                    sx={{
                                        p: 5,
                                        //textAlign: 'center',
                                        bgcolor: calledNumbers.includes(num.toString()) ? 'primary.main' : 'background.paper',
                                        color: calledNumbers.includes(num.toString()) ? 'common.white' : 'text.primary',
                                        fontWeight: 'bolder',
                                        borderRadius:'0px'
                                    }}
                                >
                                    {num}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <>
                    {lastFiveCalls && lastFiveCalls.map(val=>{
                      {val}
                    })}
                    </>
                    
                </Box>
            </Box>
            <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth startIcon={<AssistantIcon />}>ቢንጎ!</Button>
                        </Grid>
                        {/* <Grid item xs={4}>
                            <Button variant="contained" color="primary" fullWidth endIcon={<CachedIcon />}>Refresh</Button>
                        </Grid> */}
                        <Grid item xs={6}>
                            <Button variant="contained" color="error" fullWidth endIcon={<ExitToAppIcon />} onClick={handleLeaveClick}>ውጣ</Button>
                        </Grid>
                    </Grid>
        </Box>
    );
};

export default BingoBoard;
