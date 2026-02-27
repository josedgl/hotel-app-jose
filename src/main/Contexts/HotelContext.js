import React, { createContext, useEffect, useState } from 'react'
import { persistedHotel, saveHotel } from '../Constants/hotel'

export const HotelContext = createContext();

export function HotelProvider ({ children }) {
  const [hotels, setHotels] = useState(persistedHotel)

  useEffect(() => {
    saveHotel(hotels)
  }, [hotels])

  return <HotelContext.Provider value={{ hotels, setHotels }}>{children}</HotelContext.Provider>
}

