const TokenKey = 'token'

export function getToken () {
  return localStorage.getItem(TokenKey)
}

export function setToken (token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken () {
  return localStorage.removeItem(TokenKey)
}

export function getUserInfo () {
  return JSON.parse(localStorage.getItem('user_info'))
}

export const headers = {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyMTM3MDc5LCJpYXQiOjE3MjA4NDEwNzksImp0aSI6Ijk4NTA2ZmQxOGM4YTRhZjM4MmUxOTkwZDk4ODA1ODIzIiwidXNlcl9pZCI6MX0.9u21yYShHDNwa1Gdw0XwSo__Kuv0w9PJZwBkmDkML1g'
}
