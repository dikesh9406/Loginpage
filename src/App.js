
import './App.css';
import Email from "./images/Email.png";
import Profile from "./images/Profile.png";
import Lock from "./images/Lock.png"
import Navbar from './Navbar.js';
function App()
{
  return(
    

    <div className="main_1">
      <Navbar/>
      <div className="main">
      
      <div className="sub_main">
        <div>
          <div className="imgs">
            <div className="image">
              <img className='profile' src={Profile} alt="profile" />
            </div>
            
          </div>
          <br />
         
         
          <div >
          <img className='email' src={Email} alt="Email" />
            <input className='name' type="text" placeholder='Email' />
          </div>
          <br />
          <div >
          <img className='pass' src={Lock} alt="Password" />
            <input  className='name' type="password" placeholder='Password' />
          </div>
          <br />
          <button className='button1' type='submit'>Login</button>
          <div className='space'>

          </div>
          <div >
            <a className='links' href="#">Forgot password?</a> Or <a className='links' href="#">Sign up</a>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
export default App;