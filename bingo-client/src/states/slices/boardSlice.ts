/*import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface Board{

}

interface BoardState{
    boards: Board[],
    localSelectedBoardId: number | null;
    globalSelectedBoardIds : number[]
}

const initialState : BoardState = {
    boards : [],
    localSelectedBoardId : null,
    globalSelectedBoardIds : []
}

const boardSlice = createSlice({
    name : 'boards',
    initialState,
    reducers:{
        selectBoard(state,action: PayloadAction<number>){
            state.localSelectedBoardId = action.payload;
        },
        deselectBoard(state,action: PayloadAction<null>){
            state.localSelectedBoardId = null;
        }
    }
})*/