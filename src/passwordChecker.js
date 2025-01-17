export default function isValidPassword(password) {
  const minLength = 8;
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (password.length < minLength) return false;
  if (!hasSpecialChar) return false;
  if (!hasNumber) return false;
  return true;
}