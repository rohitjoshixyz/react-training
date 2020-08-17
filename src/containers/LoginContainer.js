import React, {useReducer} from 'react'
import LoginComponent from '../components/LoginComponent';
import apiHelper from '../apis/apiHelper'
import reducer, {initialState} from '../reducers/reducer'

const LoginContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const logValues = () => {
    // console.log(username, password)
    schema.validate({ username: state.username, password: state.password}, {abortEarly: false})
    .then(() => {
      apiHelper('post', 'https://api.taiga.io/api/v1/auth', {
        username: state.username,
        password: state.password,
        type: 'normal'})
        .then(
        (response) => {
          console.log(response)
        },console.log("User does not exist")
      )
    }).catch(function (err) {
      err.inner.forEach(element => {
        if (element.path === 'username'){
          dispatch({type: "setUsernameError", message: element.message})
        }
        if (element.path === 'password'){
          dispatch({type: "setPasswordError", message: element.message})
        }
        console.log(element.message)
      });
    });
  }

  let yup = require('yup');

  let schema = yup.object().shape({
    username: yup.string().required().email(),
    password: yup.string().required().min(6)
  });



  return (
    <LoginComponent logValues={logValues} state={state} dispatch={dispatch}/>
  );
}

export default LoginContainer
