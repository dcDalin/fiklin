const validate = (email: string, password: string): any => {
  const err: any = {};

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
