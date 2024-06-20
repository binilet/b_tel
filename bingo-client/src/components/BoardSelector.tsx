import React, { useState } from 'react';
import { Box, styled,Stack,Button } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StakeCard from './StakeCard';
import { useNavigate } from 'react-router-dom';

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

  const navigate= useNavigate();

  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const handleCellClick = (index: number) => {
    setSelectedCell(--index);
  };

  const handleGoBack = () =>{
    navigate('/stake')
  }

  const handleGoToMain = () =>{
    navigate('/gameWindow/5')
  }

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
     <Stack direction="row" spacing={2} style={{backgroundColor:'lavender', display:'flex',justifyContent:'space-around',padding:'20px'}}>
      <Button variant="contained" startIcon={<ReplyIcon />} onClick={handleGoBack}>
        ተመለስ
      </Button>
      <Button variant="contained" endIcon={<PlayArrowIcon />} onClick={handleGoToMain}>
        ጀምር
      </Button>
    </Stack>
    </>
    
  );
};

export default BoardSelector;