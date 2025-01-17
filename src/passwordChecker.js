export default function isValidPassword(password) {
  const minLength = 8;
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasIPL = /ipl/i.test(password);
  if (password.length < minLength) return false;
  if (!hasSpecialChar) return false;
  if (!hasNumber) return false;
  if (hasIPL) return false;
  return true;
}