import { FETCH_ALL_DATA, FETCH_DATA_BY_ID } from './Types'
import axios from 'axios'


const apiUrl = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'


//[async] action
export const fetchJobs = (search) => {
    if(search){
        const apiUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${search}`
        return (dispatch) => {
            return axios.get(apiUrl)
            .then(res => {
                dispatch( fetchJobsSuccess(res.data) )
            })
            .catch(error => {
                throw (error);
            })
        }
    }
    else{
        return (dispatch) => {
            return axios.get(apiUrl)
            .then(res => {
                dispatch( fetchJobsSuccess(res.data) )
            })
            .catch(error => {
                throw (error);
            })
        }
    }
}
export default fetchJobs

//[sync] action creator : functions that create and return actions.
export const fetchJobsSuccess = (data) => {
    return {
        type : FETCH_ALL_DATA,
        payload : [data]
    }
}

export const fetchJobInfoByIDSuccess = (jobData) => {
    return (dispatch) => {
        dispatch({
            type : FETCH_DATA_BY_ID,
            payload : jobData
        })
    }
}














