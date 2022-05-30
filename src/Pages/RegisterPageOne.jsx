
import {Link} from "react-router-dom"

function RegisterPageOne(){
    return(
        <>
        <input placeholder="username" type="text"></input>
        <input placeholder="password" type="password"></input>
      <button>  <Link to="/register/two">Submit </Link></button>
        
        
        </>
    )
}export default RegisterPageOne