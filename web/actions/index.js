
import axios from 'axios'
export const AUTH = 'AUTH'
export const UNAUTH = 'UNAUTH'
export function Submit(payload) {
  return  async dispatch=>{
    try {
      const response = await   axios.post(` http://localhost:3000/api/login`,payload);
      dispatch({
        type:AUTH,
        payload:response.data
      })
    }catch (err){
      dispatch(authError("error"))
    }
    
  }
}
export function authError(error) {
  return {
    type: UNAUTH,
    payload: error
  }
  
}