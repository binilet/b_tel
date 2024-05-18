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
    Chip
} from '@mui/material';
// import { styled } from '@mui/system';

// const useQuery = () => {
//     return new URLSearchParams(useLocation().search);
// };

const BingoBoard: React.FC = () => {
    // const query = useQuery();
    // const userId = query.get('userId');

    const [numbers, setNumbers] = useState<number[]>([]);
    const [calledNumbers, setCalledNumbers] = useState<string[]>([]);
    const [currentCall, setCurrentCall] = useState<string | null>(null);

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
            const call = `${column}${number}`;
            setCurrentCall(call);
            setCalledNumbers(prevNumbers => [...prevNumbers, call]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderNumbers = (start: number) => {
        return Array.from({ length: 15 }, (_, i) => start + i).map(num => (
            <Grid item xs={12} key={num}>
                <Chip
                    label={num}
                    color={calledNumbers.includes(num.toString()) ? 'primary' : 'default'}
                    sx={{ width: '100%' }}
                />
            </Grid>
        ));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, bgcolor: '#f0f0f0', height: '100vh' }}>
            <Card sx={{ width: '100%', maxWidth: 600, mb: 2 }}>
                <CardContent>
                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="h6">Derash 184</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Bonus -</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Players 23</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Bet 10</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Call 9</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Box sx={{ display: 'flex', width: '100%', maxWidth: 800 }}>
                <Paper elevation={3} sx={{ flex: 1, mr: 2, p: 2 }}>
                    <Grid container justifyContent="space-between">
                        {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
                            <Grid item xs={2.4} key={letter} sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ color: ['#ff5722', '#ff9800', '#4caf50', '#2196f3', '#9c27b0'][index] }}>
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
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="h6">Count Down</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">Started</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6" align="center">Current Call</Typography>
                            <Typography variant="h4" align="center" color="secondary">{currentCall}</Typography>
                        </CardContent>
                    </Card>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        {numbers.map((num, idx) => (
                            <Grid item xs={2.4} key={idx}>
                                <Paper
                                    sx={{
                                        p: 1,
                                        textAlign: 'center',
                                        bgcolor: calledNumbers.includes(num.toString()) ? 'primary.main' : 'background.paper',
                                        color: calledNumbers.includes(num.toString()) ? 'common.white' : 'text.primary',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {num}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Button variant="contained" color="secondary" fullWidth>BINGO!</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" fullWidth>Refresh</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="error" fullWidth>Leave</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default BingoBoard;
