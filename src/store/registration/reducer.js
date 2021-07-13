const initialState = {
    fields:{
      login: '',
      password: '',
      confirmPassword:""
    },
    errors:{
      login:"",
      password:"",
      confirmPassword:""
    }
  };


  export const registrationReducer = (state = initialState, action) => {
      switch (action.type) {
          default:
          return state
      }
  }