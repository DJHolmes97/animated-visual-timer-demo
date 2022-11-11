export const timePickerPopulator = () => {
  const timeArray: number[] = []
  for (let i = 0; i < 60; i++) {
    timeArray.push(i)
  }
  return timeArray
}
