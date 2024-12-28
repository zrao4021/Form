

 function Loginpage() {
  return (
    < div style={{backgroundColor : 'lightgray', }}>
        
    <div className="container-fluid d-flex justify-content-center align-item-center">
        
        <div className="row">
            <div className="col-sm-6 col-lg-6 col-md-6 col-12 " style={{marginTop : "10rem", marginBottom : '2rem', border : '2px solid white', borderRadius : '3rem' }}>       

                
            
              <h1 style={{marginBottom : "3rem", fontWeight : 'bold', paddingTop : '1rem'}}>Sign up</h1>

                  <span><p className="d-flex"> Already have an account? <a href="">loginhere</a></p></span>
                  <br />

               <label for="abc" style={{fontWeight: 'bold'}}>Name</label>
               <input type="text" id="abc" placeholder="enter your name" className="mx-5 rounded-pill text-center" />
                <br />
                <br />

               <label for="abc" style={{fontWeight: 'bold'}}>Email id</label>
               <input type="text" id="abc" placeholder="enter your Email " className="mx-5 rounded-pill text-center" />
              
               <br />
                <br />

               <label for="abc"style={{fontWeight: 'bold'}} >Password</label>
               <input type="text" id="abc" placeholder="enter your Password" className="mx-5 rounded-pill text-center" />
              

              <br />
              <br />
              <span className="d-flex">
                <input type="checkbox" />
                <p className="mx-3 mt-4">By signging up you agree to receive updates and special offers.</p>
              </span>
              
              <br />
              



              <center><p className="btn btn-primary rounded-pill w-50" style={{fontWeight: 'bold'}}>Submit</p></center>

            </div>
            <div className="col-sm-6 col-lg-6 col-md-6 col-12 ">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-illustration-download-in-svg-png-gif-file-formats--user-register-form-sign-create-account-pack-network-communication-illustrations-6381807.png" alt="" style={{height : '20rem', marginTop : '15rem'}} />
            </div>
          

        </div>
    </div>
    
    
    
    
    
    </div>
  )
}







export  default Loginpage
