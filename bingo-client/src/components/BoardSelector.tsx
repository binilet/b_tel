import React, { useState } from 'react';
import { Box, styled,Stack,Button,Grid,Typography,Paper } from '@mui/material';
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
  background-color: ${props => (props.selected ? 'green' : 'lavender')};
  color: ${props => (props.selected ? 'white' : 'black')};
  border: 1px solid gray;
  cursor: pointer;
  font-weight:bold;
  border-radius:4px;
   
`;

const BoardSelector: React.FC = () => {

  const navigate= useNavigate();

  const [numbers, setNumbers] = useState<number[]>([]);

  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  

  const handleCellClick = (index: number) => {
    
    setSelectedCell(index);

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
  };

  const handleGoBack = () =>{
    navigate('/stake')
  }

  const handleGoToMain = () =>{
    navigate('/gameWindow/5')
  }

  return (
    <div style={{backgroundColor:'red'}}>
      <StakeCard amount={45} games={5} />
      <GridBox>
        {Array.from({ length: 100 }, (_, index) => index + 1).map(
          (value, index) => (
            <CellBox
              key={index}
              onClick={() => handleCellClick(value)}
              selected={selectedCell === value}
            >
              {value}
            </CellBox>
          )
        )}
      </GridBox>

      {selectedCell && (
        <Stack style={{ backgroundColor: "lavender" }}>
          <h6>{selectedCell}</h6>
          <Grid container justifyContent="space-between">
            {["B", "I", "N", "G", "O"].map((letter, index) => (
              <Grid item xs={2.4} key={letter} sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bolder" }}
                  sx={{
                    color: ["red", "green", "brown", "dark", "blue"][index],
                  }}
                >
                  {letter}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={0} sx={{ mb: 2 }}>
            {numbers.map((num, idx) => (
              <Grid item xs={2.4} key={idx}>
                <Paper
                  style={{ padding: "10px" }}
                  sx={{
                    p: 5,
                    //textAlign: 'center',
                    //bgcolor: calledNumbers.includes(num.toString()) ? 'primary.main' : 'background.paper',
                    //color: calledNumbers.includes(num.toString()) ? 'common.white' : 'text.primary',
                    fontWeight: "bolder",
                    borderRadius: "0px",
                  }}
                >
                  {num}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}
      <Stack
        direction="row"
        spacing={2}
        style={{
          backgroundColor: "lavender",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <Button
          variant="contained"
          startIcon={<ReplyIcon />}
          onClick={handleGoBack}
        >
          ተመለስ
        </Button>
        <Button
          variant="contained"
          endIcon={<PlayArrowIcon />}
          onClick={handleGoToMain}
        >
          ጀምር
        </Button>
      </Stack>
    </div>
  );
};

export default BoardSelector;