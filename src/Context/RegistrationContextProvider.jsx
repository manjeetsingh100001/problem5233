// Write code for Registration context
import { createContext, useState } from "react";

const RegContext=createContext()

function RegContextProvider({children}){
    const [username,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const [mobile,setMob]=useState("")
    return(
        <RegContext.Provider value={[username,setUser,password,setPassword,address,setAddress,mobile,setMob]}>

            {children}
        </RegContext.Provider>
    )
}export default RegContextProvider
