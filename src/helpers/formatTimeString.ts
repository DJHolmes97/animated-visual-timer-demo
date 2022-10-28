export const formatTimeString = (minutes: number, seconds: number) => {
  const minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`
  const secondString = seconds < 10 ? `0${seconds}` : `${seconds}`

  return `${minuteString}:${secondString}`
}
