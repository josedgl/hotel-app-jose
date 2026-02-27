import { createContext, useEffect, useState } from 'react'
import { persistedRoom, saveRoom } from '../Constants/room'

export const RoomContext = createContext();

export function RoomProvider ({ children }) {
  const [rooms, setRooms] = useState(persistedRoom || [])

  useEffect(() => {
    saveRoom(rooms)
  }, [rooms])   
  return <RoomContext.Provider value={{ rooms, setRooms }}>{children}</RoomContext.Provider>
}

