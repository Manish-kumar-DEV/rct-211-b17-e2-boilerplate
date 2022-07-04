//Create ActionCreator functions here
import * as types from "./actionTypes"

const getShoes=()=>(dispatch)=>{
  dispatch({type:types.GET_SHOES_DATA_REQUEST})  
}