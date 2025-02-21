const Signup=()=>{
    return(
        <>
         <h3>Signup Component</h3> 
         <div>
           <div className="input-wapper">
           <input type ="text"placeholder="Enter the Email id"className="input-field"/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder=" Enter password"className="input-field"/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder=" confirm password"className="input-field"/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder="Enter restaurant name"className="input-field"/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder="Enter City"className="input-field"/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder="Enter full address"className="input-field"/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder="Enter contect No."className="input-field"/>
           </div>

             <div className="input-wapper">
                <button className="button">
                    Signup
                </button>
             </div>
           
         </div>
        </>
    )
}
export default Signup;