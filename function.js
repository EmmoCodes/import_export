export const sortNumbers = (arr) => {
  return console.log(arr.sort((a, b) => a - b))
}

export const sortChars = (arr) => {
  return console.log(arr.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
    console.log(arr)
  }))
}
