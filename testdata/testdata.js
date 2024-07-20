const LOGIN_USERS = {
    STANDARD_USER: {
      username: 'bob@example.com',
      password: '10203040',
    },
    INVALID_USER: {
      username: 'alex@example.com',
      password: '212122',
      message: 'Provided credentials do not match any user in this service.',
    },
    LOCKED_USER: {
      username: 'alice@example.com',
      password: '10203040',
      message: 'Sorry, this user has been locked out.',
    },
    NO_CREDENTIALS: {
      username: '',
      password: '',
      message: 'Username is required',
    },
    NO_PASSWORD: {
      username: 'bob@example.com',
      password: '',
      message: 'Password is required',
    },
  };
  
  module.exports = { LOGIN_USERS };
  