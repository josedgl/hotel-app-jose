const SESSION_KEYS = ['token', 'uid', 'role']

/* Use an IIFE to export the persisted state in a variable */
export const persistedSession = (() => {
  try {
    const state = {}
    SESSION_KEYS.forEach(key => {
      state[key] = window.sessionStorage.getItem(key) || null
    })
    return state
  } catch (err) {
    return {}
  }
})()

/* Export a method to save state on each store update */
export const saveSession = (state) => {
  try {
    if (state.length <= 0) {
      SESSION_KEYS.forEach(key => {
        window.sessionStorage.removeItem(key)
      })
      return
    }
    SESSION_KEYS.forEach(key => {
      window.sessionStorage.setItem(key, state[key])
    })
  } catch (err) {
    // Ignore write errors.
  }
}
