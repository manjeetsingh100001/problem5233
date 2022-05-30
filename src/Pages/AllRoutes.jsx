import {Routes,Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import RegisterPageOne from "./RegisterPageOne" 
import RegisterPageTwo from "./RegisterPageTwo"
import PrivateRoute from "./PrivateRoute"


function AllRoutes(){
    return(
        <>
        <Routes>
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