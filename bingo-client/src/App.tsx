// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import BingoBoard from './components/BingoBoard';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" Component={BingoBoard} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;