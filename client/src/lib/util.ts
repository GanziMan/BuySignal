export const isPhoneNumberFormat = (phoneNumber: string) => {
  const removedHyphen = phoneNumber?.replaceAll("-", "");
  if (phoneNumber == null || phoneNumber.length <= 0) {
    return false;
  }

  const phoneNumberRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

  return phoneNumberRegex.test(removedHyphen);
};

export const isEmailFormat = (email: string) => {
  if (email == null || email.length <= 0) {
    return false;
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return emailRegex.test(email);
};
