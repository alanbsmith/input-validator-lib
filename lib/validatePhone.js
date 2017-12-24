function validatePhone(phoneNumber) {
  // validate there are no characters
  if (/[a-zA-Z]/.test(phoneNumber)) {
    return false;
  }
  // validate there are enough numbers
  const cleanNumber = phoneNumber.replace(/\s|\D/g, "");
  return cleanNumber.length === 10;
}

export default validatePhone;
