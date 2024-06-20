// utils/validation.js

export function validateName(name) {
  const minLength = name.trim().length > 2;
  const maxLength = name.trim().length < 60;
  const hasNumber = /\d/.test(name);
  return {
    rules: minLength && maxLength && !hasNumber,
    error: () => {
      if (!name) { return "Please enter your Name" }
      if (hasNumber) { return "Should contain only letters" }
      if (!minLength || !maxLength) { return "Name should contain 2-60 characters" }
    },
  };
}

export function validateEmail(email) {
  const minLength = email.trim().length > 2;
  const maxLength = email.trim().length < 100;
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const pattern = re.test(email)
  return {
    rules: minLength && maxLength && pattern,
    error: () => {
      if (!email) { return "Please enter your Email" }
      if (!pattern) { return "Email is not valid" }
      if (!minLength || !maxLength) { return "Email should contain 2-100 characters" }
    },
  }
}

export function validatePhone(phone) {
  const re = /^\+380\d{9}$/;
  const pattern = re.test(phone)
  return {
    rules: pattern,
    error: () => {
      if (!phone) { return "Please enter your Phone" }
      if (!pattern) { return "Phone is not valid" }
    },
  }
}

// export function validatePhone(phone) {
//   const re = /^\+?\d{1,4}?\d{7,11}$/;
//   return re.test(phone);
// }

export function validateFile(file) {
  return file && file.size > 0;
}
