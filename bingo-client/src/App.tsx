// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BingoBoard from './components/BingoBoard';
import Stake from './components/Stake';
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
            default: '#121212',
        },
    },
    typography: {
        fontFamily: 'ZCOOL QingKe HuangYou,Roboto, Arial, sans-serif',
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Stake/>}/>
                        <Route path="/gameWindow/:betAmount" element={<BingoBoard/>} />
                        <Route path="/stake" element={<Stake/>} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
