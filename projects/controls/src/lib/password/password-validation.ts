export function containsLowerCase(value: string): boolean {
  const lowerCaseLetters = /[a-z]/g;
  return value.match(lowerCaseLetters)?.length > -1;
}

export function containsUpperCase(value: string): boolean {
  const upperCaseLetters = /[A-Z]/g;
  return value.match(upperCaseLetters)?.length > -1;
}

export function containsNumber(value: string): boolean {
  const numbers = /[0-9]/g;
  return value.match(numbers)?.length > -1;
}
