'use client'
import { use, useState } from "react";
import Longin from "../_component/Login";
import Signup from "../_component/Signup";
import RestaurantHeader from "../_component/RestaurantHeader";
import './Style.css'
import Footer from "../_component/Footer";

const Restaurant=()=>{
    const[Login,setLogin]=useState(true)
    return(
        <>
        
        <div className="container">
         <RestaurantHeader />
        <h1>Restaurant Longin/Signup page</h1>
        {
              Login? <Longin/>:<Signup/>
        }
        <div>
        <button className="button-link" onClick={()=>setLogin(!Login)}>

         { Login ?"Do not have account?Signup":"Already have Account ?login"}

        </button>
        </div>
        </div>
        
       <Footer/>
        </>

    )
}
export default Restaurant;