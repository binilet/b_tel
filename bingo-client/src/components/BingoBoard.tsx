import React, { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";
import "./BingoBoard.css";

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

const BingoBoard: React.FC = () => {
  //const query = useQuery();
  //const userId = query.get("userId");

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

    return (
        <div className="bingo-container">
            <header className="bingo-header">
                <div className="bingo-header-item">Derash 184</div>
                <div className="bingo-header-item">Bonus -</div>
                <div className="bingo-header-item">Players 23</div>
                <div className="bingo-header-item">Bet 10</div>
                <div className="bingo-header-item">call 9</div>
            </header>
            <div className="bingo-game">
                <div className="bingo-sidebar">
                    <div className="bingo-sidebar-header">BINGO</div>
                    <div className="bingo-sidebar-numbers">
                        {Array.from({ length: 75 }, (_, i) => (
                            <div key={i} className={`bingo-number ${calledNumbers.includes(`B${i + 1}`) ? 'called' : ''}`}>
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bingo-main">
                    <div className="bingo-status">
                        <div>Count Down</div>
                        <div>Started</div>
                    </div>
                    <div className="current-call">
                        <div>Current Call</div>
                        <div className="current-call-number">{currentCall}</div>
                    </div>
                    <div className="bingo-board">
                        {numbers.map((num, idx) => (
                            <div key={idx} className={`cell ${calledNumbers.includes(num.toString()) ? 'highlight' : ''}`}>
                                {num}
                            </div>
                        ))}
                    </div>
                    <div className="bingo-controls">
                        <button className="bingo-button bingo">BINGO!</button>
                        <button className="bingo-button refresh">Refresh</button>
                        <button className="bingo-button leave">Leave</button>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default BingoBoard;
