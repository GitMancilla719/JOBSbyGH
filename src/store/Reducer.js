import { FETCH_ALL_DATA } from './Types'

const initialState = []
  
const Reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_ALL_DATA: 
            return action.payload
        default: 
            return state
    }
}

export default Reducer

