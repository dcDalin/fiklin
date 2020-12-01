const validate = (
  // tslint:disable-next-line: variable-name
  user_name: string,
  email: string,
  password: string,
): any => {
  const err: any = {};

  if (user_name.trim() === '') {
    err.user_name = 'Username is required';
  } else if (user_name.trim().length < 3) {
    err.user_name = 'Username must be at least 3 characters long';
  } else if (user_name.trim().length > 30) {
    err.user_name = 'Username should be less than 30 character';
  }

  // Email regex
  const phoneRegEx = /\S+@\S+\.\S+/;

  if (email.trim() === '') {
    err.email = 'Email is required';
  } else if (!email.trim().match(phoneRegEx)) {
    err.email = 'Email is invalid';
  }

  // Password validations
  if (password.trim() === '') {
    err.password = 'Password is required';
  } else if (password.trim().length < 6) {
    err.password = 'Password must be at least 6 characters long';
  } else if (password.trim().length > 15) {
    err.password = 'Password should be less than 15 character';
  }

  return {
    err,
    valid: Object.keys(err).length < 1,
  };
};

export default validate;
