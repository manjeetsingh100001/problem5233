import {Link} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
function RegisterPageTwo(){
    const [isAuth,setAuth]=useContext(AuthContext)
    return(
        <>
        <h1 >{isAuth}</h1>
        <input placeholder="phone number" type="number"></input>
        <input placeholder="address" type="text"></input>
        <button>  <Link to="/register/one">Prev </Link></button>
        <button onClick={()=>setAuth(true)}>  <Link to="/dashboard">Submit part 2</Link></button>
        </>
    )
}export default RegisterPageTwo