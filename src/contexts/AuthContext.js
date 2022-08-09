import { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../api/firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'


const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function logOut() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    }
    )
    return () => {
      unsubscribe()
    }
  } , [])

  return (
    <userAuthContext.Provider value={{
      currentUser,
      logIn,
      signUp,
      logOut
    }}>
      {children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext)
}