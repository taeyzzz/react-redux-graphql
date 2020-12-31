export const storage = {
  get(k) {
    return localStorage.getItem(k)
  },
  set(k, v) {
    localStorage.setItem(k, v)
  },
  remove(k) {
    localStorage.removeItem(k)
  },
}
