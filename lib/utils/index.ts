// generate an uniqueID
function uniqueID(): string {
  return Math.random().toString(36).slice(2)
}

// get a random value from an array
function generateRandomValue(array: string[] = []): string {
  let rand = Math.random() * array.length
  rand = Math.floor(rand)

  return array[rand]
}

// camelize a text or word
function camelize(text: string): string {
  let _text = text
    .toLowerCase()
    .trim()
    .split(/[.\-_\s]/g) // removes all (- space _ .)
    .reduce(
      (str, nextWord) => str + nextWord[0].toUpperCase() + nextWord.slice(1)
    )

  return _text
}

function objEmpty(obj: {}): boolean {
  return Object.keys(obj).length === 0
}

// pixel GIF code
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

function rgbDataURL(r: number, g: number, b: number) {
  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
}

// Fisher-Yates shuffle algorithm.
function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// generate a non repeating random value from an array
function getRandomNonRepeatingValue(dict: string[]) {
  if (dict.length === 0) {
    return null
  }

  // pop and return the last element from the array.
  return dict.pop() || null
}

function convertTimeTo24Format(timeStr: string) {
  // Split the time string into hours and minutes, handling optional spaces
  const [hours, minutes] = timeStr.trim().split(":")

  const hoursNum = Number(hours)

  // check if it's AM or PM
  const meridiem = timeStr.includes("PM") ? 12 : 0

  // adjust hours for PM times
  const adjustedHours = (hoursNum + meridiem) % 24

  return `${adjustedHours.toString().padStart(2, "0")}:${minutes}`.split(" ")[0]
}

function linkify(text: string) {
  const urlRegex =
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi

  return text.replace(urlRegex, (url) => {
    return `<a class="f" href="${url}" target="_blank">${url}</a>`
  })
}

export const firey = {
  uniqueID,
  generateRandomValue,
  getRandomNonRepeatingValue,
  shuffleArray,
  camelize,
  objEmpty,
  rgbDataURL,
  convertTimeTo24Format,
  linkify,
}
