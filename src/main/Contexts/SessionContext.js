import React, { createContext, useEffect, useState } from 'react'
import { persistedSession, saveSession } from '../Constants/session'

export const SessionContext = createContext({})

export function SessionProvider ({ children }) {
  const [session, setSession] = useState(persistedSession)

  useEffect(() => {
    saveSession(session)
  }, [session])

  return <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>
}

