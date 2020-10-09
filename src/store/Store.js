import { createStore, applyMiddleware, combineReducers } from 'redux'
import Reducer from './Reducer'
import JobsInfoByIDReducer from './JobsInfoByIDReducer'
import thunk from 'redux-thunk'

import {fetchJobs} from './Actions'

const rootReducer = combineReducers({ Reducer, JobsInfoByIDReducer })

const Store = createStore(rootReducer, applyMiddleware(thunk))
window.store = Store

Store.dispatch( fetchJobs() )

export default Store