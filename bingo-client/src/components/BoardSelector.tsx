import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import StakeCard from './StakeCard';

const GridBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
  background-color: lavender;
  gap:1px;
`;

const CellBox = styled(Box)<{ selected: boolean }>`
  width: 100%;
  padding-bottom: 10%; /* Maintain aspect ratio */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.selected ? 'lightblue' : 'white')};
  border: 1px solid gray;
  cursor: pointer;
  font-weight:bold;
  border-radius:4px;
    background-color: lavender;
`;

const BoardSelector: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const handleCellClick = (index: number) => {
    setSelectedCell(--index);
  };

  return (
    <>
    <StakeCard amount={45} games={5}/>
    <GridBox>
      {Array.from({ length: 100 }, (_, index) => (
        <CellBox
          key={index}
          onClick={() => handleCellClick(index)}
          selected={selectedCell === index}
        >
          {++index}
        </CellBox>
      ))}
    </GridBox>
    </>
    
  );
};

export default BoardSelector;