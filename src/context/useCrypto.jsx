import { createContext, useContext, useState } from "react";

const CryptoContext = createContext({})

export const CryptoProvider = ({ children }) => {
  const [isFav, setIsFav] = useState([])

  const values = {
    isFav,
    setIsFav,
  }

  return (
    <CryptoContext.Provider value={values}>{children}</CryptoContext.Provider>
  )
}

export const useCrypto = () => useContext(CryptoContext)