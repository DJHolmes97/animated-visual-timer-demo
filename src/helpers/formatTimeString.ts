export const formatTimeString = (minutes: number, seconds: number) => {
  const digitOne = minutes < 10 ? "0" : `${minutes}`.charAt(0)
  const digitTwo = minutes < 10 ? `${minutes}` : `${minutes}`.charAt(1)

  const digitThree = seconds < 10 ? "0" : `${seconds}`.charAt(0)
  const digitFour = seconds < 10 ? `${seconds}` : `${seconds}`.charAt(1)

  return { digitOne, digitTwo, digitThree, digitFour }
}
