import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,



  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  
    
CLEAR_ERRORS} from "../constants/userConstant.jsx";
    import axios from "axios";
    export const login = (email, password) => async (dispatch) => {
        try{
dispatch({type:LOGIN_REQUEST});
const config={headers:{"Content-Type":"application/json"}}

            const {data}=await axios.post(
                `/api/users/login`,{email,password},
                config
            );
            dispatch({type:LOGIN_SUCCESS,payload:data.user});
        }catch(error){
dispatch({type:LOGIN_FAIL,payload:error.response.data.message})
        }
    };

    
    //Load User

    export const loadUser=()=>async (dispatch)=>{
        try{
            dispatch({type:LOAD_USER_REQUEST});
            const {data}=await axios.get(`/api/users/me`);
            dispatch({type:LOAD_USER_SUCCESS,payload:data.user});
            
        }catch(error){
            dispatch({type:LOAD_USER_FAIL,payload:error.response.data.message});
        }

    };

    //logout user
    export const logout=()=>async (dispatch)=>{
        try{
            await  axios.get(`/api/users/logout`);
            dispatch({type:LOGOUT_SUCCESS});
        }catch(error){
            dispatch({type:LOGOUT_FAIL,payload:error.response.data.message});
        }
    };

// Update Profile
export const updatePassword=(passwords)=>async (dispatch)=>{
    
    try{
        dispatch({type:UPDATE_PASSWORD_REQUEST});
const config={headers:{"Content-Type":"application/json"}}
const{data}=await axios.put(`/api/users/password/update`,passwords,config);
dispatch({type:UPDATE_PASSWORD_SUCCESS,payload:data.succees});

    }catch(error){
        dispatch({type:UPDATE_PASSWORD_FAIL,payload:error.response.data.message});
    }
}

// get All Users
export const getAllUsers = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_USERS_REQUEST });
      const { data } = await axios.get(`/api/users/admin/users`);
  
      dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
      dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
    }
  };



// get  User Details
export const getUserDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });
      const { data } = await axios.get(`/api/users/admin/user/${id}`);
  
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
    }
  };


// Update User
export const updateUser = (id, userData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(
        `/api/users/admin/user/${id}`,
        userData,
        config
      );
  
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  

// Delete User
export const deleteUser = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
  
      const { data } = await axios.delete(`/api/users/admin/user/${id}`);
  
      dispatch({
         type: DELETE_USER_SUCCESS, payload:{
         
         
            success: data.success, 
        
         
    }});
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload:   error.response.data.message,
        
      });
    }
  };
  









    export const clearErrors = () => async (dispatch) => {
        dispatch({ type: CLEAR_ERRORS });
      };