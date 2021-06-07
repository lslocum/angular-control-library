export function stripPhoneNumberFormatting(value: string): string {
  let unformattedPhoneNumber = value;
  if (value) {
    // remove all mask characters (keep only numeric)
    unformattedPhoneNumber = value.replace(/\D/g, '');
  }

  return unformattedPhoneNumber;
}

export function formatPhoneNumber(value: string): string {
  let unformattedNumber = stripPhoneNumberFormatting(value);

  if (unformattedNumber) {
    if (unformattedNumber?.length == 0) {
      unformattedNumber = '';
    } else if (unformattedNumber.length <= 3) {
      unformattedNumber = unformattedNumber.replace(/^(\d{0,3})/, '$1');
    } else if (unformattedNumber.length <= 6) {
      unformattedNumber = unformattedNumber.replace(/^(\d{0,3})(\d{0,3})/, '$1-$2');
    } else {
      unformattedNumber = unformattedNumber.replace(/^(\d{0,3})(\d{0,3})(.*)/, '$1-$2-$3');
    }
  }

  return unformattedNumber;
}
