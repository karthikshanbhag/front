import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
     <div className='card login-card'>
      <h2>Instagram</h2>
      <input type="text" placeholder='Email' />
      <input type="password" placeholder='Password' />
      <a href='/' className="waves-effect waves-light btn-large">Button</a>
     </div>
    </div>
  )
}

export default Login
