import { useState } from "react";

const Signup=()=>{
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[con_password,setcon_password]=useState('');
    const[name,setname]=useState('');
    const[City,setcity]=useState('');
    const[address,setaddress]=useState('');
    const[contect,setcontect]=useState('');

    const handleSignUp=()=>{
        console.log(email.password,con_password,name,City,address,contect)
    }

    
    return(
        <>
         <h3>Signup Component</h3> 
         <div>
           <div className="input-wapper">
           <input type ="text"placeholder="Enter the Email id"className="input-field"
           value={email}onChange={(event)=>setemail(event.target.value)}/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder=" Enter password"className="input-field"
           value={password}onChange={(event)=>setpassword(event.target.value)}/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder=" confirm password"className="input-field"
           value={con_password}onChange={(event)=>setcon_password(event.target.value)}/>
           </div>
           <div className="input-wapper"> 
           <input type ="text"placeholder="Enter restaurant name"className="input-field"
           value={name}onChange={(event)=>setname(event.target.value)}/>
           </div>
           <div className="input-wapper"> 
           <input type ="text"placeholder="Enter City"className="input-field"
           value={City}onChange={(event)=>setcity(event.target.value)}/>
           </div>
           <div className="input-wapper"> 
           <input type ="text"placeholder="Enter full address"className="input-field"
           value={address}onChange={(event)=>setaddress(event.target.value)}/>
           </div>
           <div className="input-wapper"> 
           <input type ="text"placeholder="Enter contect No."className="input-field"
           value={contect}onChange={(event)=>setcontect(event.target.value)}/>
           </div>

             <div className="input-wapper">
                <button className="button"onClick={handleSignUp}>
                    Signup
                </button>
             </div>
           
         </div>
        </>
    )
}
export default Signup;