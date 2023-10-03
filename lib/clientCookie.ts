// Function to get a cookie by name
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const cookies = document.cookie.split("; ")
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=")
    if (cookieName === name) {
      return decodeURIComponent(cookieValue)
    }
  }
  return null
}

export const cookie = {
  getCookie,
}
