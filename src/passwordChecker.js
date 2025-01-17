export default function isValidPassword(password) {
  const minLength = 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (password.length < minLength) return false;
  if (!hasSpecialChar) return false;
  return true;
}