
const STORAGE_KEY = 'booking-hotel'

export const persistedBooking = (() => {
  try {
    const rawState = window.localStorage.getItem(STORAGE_KEY)
    if (rawState === null || (rawState && rawState.toString() === "{}")) return null
    const state = JSON.parse(rawState)
    return state
  } catch (err) {
    return null
  }
})()

export const saveBooking = (state) => {
  try {
    const stateFilter = JSON.parse(JSON.stringify(state)) 
    const rawState = JSON.stringify(stateFilter)
    window.localStorage.setItem(STORAGE_KEY, rawState)
  } catch (err) {
  }
}