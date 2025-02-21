const Longin=()=>{
    return(
        <>
        <h3>Login Component</h3> 
         <div>
           <div className="input-wapper">
           <input type ="text"placeholder="Enter the Email id"className="input-field"/>
           </div>
           <div className="input-wapper"> 
           <input type ="password"placeholder=" Enter password"className="input-field"/>
           </div>
             <div className="input-wapper">
                <button className="button">
                    login
                </button>
             </div>
           
         </div>
        </>
    )
}
export default Longin;