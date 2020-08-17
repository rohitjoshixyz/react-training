export const initialState = {username: '', password: '', usernameError: '', passwordError: ''}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUsername':
      return {username: action.username};
    case 'setPassword':
      return {password: action.password};
    case 'setUsernameError':
      return {usernameError: action.message};
    case 'setPasswordError':
      return {passwordError: action.message};
    default:
      throw new Error();
  }
}

export default reducer