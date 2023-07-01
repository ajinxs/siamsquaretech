import React, { useState } from 'react'
import './Login.css';

function Login() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [ref, setRef] = useState('');

    const queryParams = new URLSearchParams(window.location.search)
    const re = queryParams.get("ref")
    const emailId = queryParams.get("email")
  

    return (

      <div className="App">
        <form className='login'> 
          <h1>Login</h1>
          <input
            type='text'
            value={name}
            placeholder='username'
            onChange={event => setName(event.target.value)}
            pattern="^[A-Za-z0-9]{3,16}$"
            required
          />
          <input
            type='password'
            value={surname}
            placeholder='password'
            onChange={event => setSurname(event.target.value)}
            pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"
            required
          />
          <input
            type='phone'
            value={phone}
            placeholder='phone'
            onChange={event => setPhone(event.target.value)}
          />
          <input
            type='email'
            value={email}
            placeholder='email'
            onChange={event => setEmail(event.target.value)}
            required
          />
          <input
            type='ref'
            value={ref}
            placeholder='ref'
            onChange={event => setRef(event.target.value)}
            required
            //onChange={event => setUserInput({...userInput, ref: event.target.value})}
          />
          <button>Login</button>
        </form>

        <div className="App">
          <p>Value of ref: {re}</p>
          <p>Value of email: {emailId}</p>
        </div>

      </div>
    );
  }

export default Login;
