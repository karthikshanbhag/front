import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='login-container'>
     <div className='card login-card input-field'>
      <h2 className='brand-logo'>Instagram</h2>
      <input type="text" placeholder='Full name' />
      <input type="text" placeholder='Email' />
      <input type="password" placeholder='Password' />
      <button className="btn waves-effect waves-light btn-large #64b5f6 blue lighten-2">SIGNUP</button>
      <h6><Link to='/login'>Already have an account?</Link></h6>
     </div>
    </div>
  )
}

export default Signup
