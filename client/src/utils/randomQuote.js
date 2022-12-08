//get random qoute for category page

export const getRandomQuote = (obj) => {
  const keys = Object.keys(obj)
  const randomIndex = Math.floor(Math.random() * keys.length)
  const randomObject = obj[randomIndex]
  return randomObject
}
