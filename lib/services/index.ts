import { AuthCredentials } from "@types"

async function auth(values: AuthCredentials) {
  const res = await fetch("/api/iub", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    }),
  })

  const data = await res.json()
  return data
}

async function getToken(values: AuthCredentials) {
  const res = await fetch("https://iras.iub.edu.bd:8079//v2/account/token", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = res.json()
  return data
}

async function getDataWithToken(endpoint: string, token?: string) {
  if (token) {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })

    const data = res.json()
    return data
  }
}

async function getUniRules() {
  const res = await fetch(
    `https://iras.iub.edu.bd:8079//v1/commonsetting/UniversitySetting`,
    {
      method: "POST",
      body: JSON.stringify("01"),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  const data = res.json()
  return data
}

export const services = { auth, getToken, getUniRules, getDataWithToken }
