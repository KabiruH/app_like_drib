import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2"





function Homepage() {
  let navigate = useNavigate()

  //setting up the sign up function

  const [signupData, setSignupData] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    setUsers(storedUsers ? storedUsers : []);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit (e) {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      swal({
        icon: "error",
        text: "Your passwords do not match!",
      });
    } else {
      const userExists = users.find((u) => u.email === signupData.email);
      if (userExists) {
        swal({
          icon: "error",
          text: "User with this email alredy exists!",
        });
      } else {
        localStorage.setItem("users", JSON.stringify([...users, signupData]));
        navigate("/login");
      }
    }
  }
  
    

  return (
   <div> 
   <div className="App">
        <div className="card">
        <h1 className="card-header">Welcome to NewDrib</h1>
        <center style={{marginTop: 1 +'em', fontSize: 14 + 'px'}}>
                <h4>About Us</h4>
                <p>1,569 inspira  tional designs, illustrations, and graphic elements from the world’s best designers.
Want more inspiration? Browse our search results.</p>
            </center>
      <form onSubmit={handleSubmit}>
        <div className="signup-holder">
          Already have an account?
           <Link to="/login">Sign in here</Link>
        </div>
        <div className="form">
        <div className="form-group">
            <input type="text" className="form-control half" placeholder="First name" />
            <input type="text" className="form-control half" placeholder="Last name" />
        </div>
        <div className="form-group">
            <input type="email" onChange={handleInputChange} className="form-control half" placeholder="E-mail" required/>
        </div>
          <div className="form-group">
            <input type="password" onChange={handleInputChange} className="form-control half" placeholder="Password" required/>
          </div>
          <button onClick={() => navigate("/login")} className="submit-button">Sign up</button>
          <label className="terms">
            <input type="checkbox" required /> I have read and agreed to the <a href="/terms-n-conditions">Terms of Service</a>
          </label>
        </div>
        
        </form>
        
        <div>
            
        </div>
      </div>
      </div>
    
     
 </div>
  );
}

export default Homepage;



