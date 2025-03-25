const initialState = {
  users: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
    
}




export const selectUser = state => state.users.users;
export const selectLoggedIn = state => state.users.isLoggedIn;
