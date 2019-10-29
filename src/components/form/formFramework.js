export function vadidate(value, validation = null) {
  if (!validation) {
    return true
  }

  let isVadid = true

  if (validation.required) {
    isValid = value.trim() !== '' && isValid
  }

  return isValid
}