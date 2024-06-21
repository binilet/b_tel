/*import { configureStore,combineReducers,Middleware, UnknownAction, AnyAction } from "@reduxjs/toolkit";


const reducer = combineReducers({
    //your slices
});

type RootState = ReturnType<typeof reducer>

const reducerProxy = (state: RootState | undefined, action: AnyAction) : RootState =>{
    if(action.type == 'auth/logout'){
        return reducer(undefined,action);
    }
    return reducer(state,action);
}

export const store = configureStore({
    reducer
});*/