// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BingoBoard from './components/BingoBoard';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#d32f2f',
        },
        background: {
            default: '#f0f0f0',
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" Component={BingoBoard} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
