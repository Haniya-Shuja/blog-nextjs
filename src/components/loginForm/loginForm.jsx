// "use client"

// import React from 'react';
// import { useFormState } from "react-dom";
// import styles from "./login.module.css"
// import Link from 'next/link';


// const LoginForm = () => {
//     const [state, formAction] = useFormState(login,undefined);

//   return (
//     <form action={formAction} className={styles.form}>
//         <input type="text" name="username" id="username" placeholder='username' />
//         <input type="password" name="password" id="password" placeholder='password' />
//         <button>Login</button>
//         {state?.error}
//         <Link href="/register">
//             {"Don't have an account?"} <b>Register</b>
//         </Link>
//     </form>
//   )
// }

// export default LoginForm


"use client";

import React, { useState } from 'react';
import styles from "./login.module.css";
import Link from 'next/link';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Replace with your actual login API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Redirect to a different page on success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <p className={styles.error}>{error}</p>}
      <Link href="/register">
        {"Don't have an account? "} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;

