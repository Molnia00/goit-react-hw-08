const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
    
}




export const selectUser = state => state.auth.user;
export const selectLoggedIn = state => state.auth.isLoggedIn;
