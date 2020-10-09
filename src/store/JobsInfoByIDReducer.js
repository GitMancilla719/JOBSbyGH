import { FETCH_DATA_BY_ID } from './Types'

const initialState = {}
  
const JobInfoReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DATA_BY_ID: 
            return action.payload
        default: 
            return state
    }
}

export default JobInfoReducer

