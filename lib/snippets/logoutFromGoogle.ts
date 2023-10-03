export async function logoutFromGoogle() {
  const res = await fetch(`api/google/logout`, { method: "DELETE" })
  console.log(await res.json())
}
