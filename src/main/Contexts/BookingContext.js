import React, { createContext, useEffect, useState } from 'react'
import { persistedBooking, saveBooking } from '../Constants/booking'

export const BookingContext = createContext();

export function BookingProvider ({ children }) {
  const [bookings, setBookings] = useState(persistedBooking)

  useEffect(() => {
    saveBooking(bookings)
  }, [bookings])

  return <BookingContext.Provider value={{ bookings, setBookings }}>{children}</BookingContext.Provider>
}

