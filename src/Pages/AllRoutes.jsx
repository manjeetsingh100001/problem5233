import {Routes,Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import RegisterPageOne from "./RegisterPageOne" 
import RegisterPageTwo from "./RegisterPageTwo"
import PrivateRoute from "./PrivateRoute"
import {Link} from "react-router-dom"

function AllRoutes(){
    return(
        <>
        <Routes>
        <Route path="/" element={<div><h1> select the respective route for navigation</h1>
        <button>  <Link to="/register/one">Register one </Link></button>
        </div>}/>
            <Route path="/dashboard" element={
            <PrivateRoute>
            <Dashboard/>
            </PrivateRoute>
            }/>
            <Route path="/register/one" element={<RegisterPageOne/>}/>
            
            <Route path="/register/two" element={<RegisterPageTwo/>}/>
            </Routes>
        
        </>
    )
} export default AllRoutes;