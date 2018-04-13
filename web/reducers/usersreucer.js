

import {AUTH,UNAUTH} from "../actions/index";

const initailState={
  isfetch:false,
  auth:false,
  error:false,
};

export default function (state=initailState,action) {
  switch (action.type){
    case
    AUTH:
      return {...state,auth:true,error:false};
    case
    UNAUTH:
    return {...state,error:true,message:action.payload}
    default:
      return state,initailState
  }
}