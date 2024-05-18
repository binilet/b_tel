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

  useEffect(() => {

    const generateBoard = () => {
      const columns = ["B", "I", "N", "G", "O"];
      let board: number[] = [];

      for (let i = 0; i < columns.length; i++) {
        let colNumbers = [];
        for (let j = 1; j <= 15; j++) {
          colNumbers.push(j + (i * 15));
        }
        colNumbers = colNumbers.sort(()=> Math.random() - 0.5).slice(0,5);
        board = [...board,...colNumbers];
      }
      setNumbers(board)
    };
    generateBoard();

  },[]);

  useEffect(() => {
    // Mock: Simulate receiving numbers
    const interval = setInterval(() => {
        const columns = ['B', 'I', 'N', 'G', 'O'];
        const column = columns[Math.floor(Math.random() * columns.length)];
        const number = Math.floor(Math.random() * 15) + 1 + (columns.indexOf(column) * 15);
        setCalledNumbers(prevNumbers => [...prevNumbers, `${column}${number}`]);
    }, 5000);
    return () => clearInterval(interval);
}, []);

  return (
    <div>
      <h4>Bing</h4>
        <div className="board">
            {numbers.map((num, idx) => (
                <div key={idx} className={`cell ${calledNumbers.includes(num.toString()) ? 'highlight' : ''}`}>
                    {num}
                </div>
            ))}
        </div>
    </div>
);

};
export default BingoBoard;
