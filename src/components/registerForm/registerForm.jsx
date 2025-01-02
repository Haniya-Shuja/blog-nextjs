// "use client";

// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";
// import styles from "./register.module.css";
// import { useFormState } from "react-dom";
// import Link from "next/link";

// const RegisterForm = () => {
//   const [state, formAction] = useFormState(register, undefined);
//   const router = useRouter();

//   useEffect(() => {
//     state?.success && router.push("/login");
//   }, [state?.success, router]);

//   return (
//     <form action={formAction} className={styles.form}>
//       <input type="text" name="username" id="username" placeholder="username" />
//       <input type="email" name="email" id="email" placeholder="email" />
//       <input type="password" name="password" id="password" placeholder="password" />
//       <input
//         type="password"
//         placeholder="password again"
//         name="passwordRepeat"
//       />
//       <button>Register</button>
//       {state?.error}
//       <Link href="/login">
//         Have an account? <b>Login</b>
//       </Link>
//     </form>
//   );
// };

// export default RegisterForm;
"use client"; // Ensures client-side rendering

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import styles from "./register.module.css";
import Link from "next/link";

const RegisterForm = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    error: null,
    success: false
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push("/login");
    }
  }, [state.success, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    if (state.password !== state.passwordRepeat) {
      setState((prevState) => ({ ...prevState, error: "Passwords do not match" }));
    } else {
      // If form is valid, handle success logic (e.g., API call)
      setState((prevState) => ({ ...prevState, success: true }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        value={state.username}
        onChange={(e) => setState({ ...state, username: e.target.value })}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        value={state.email}
        onChange={(e) => setState({ ...state, email: e.target.value })}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={state.password}
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        value={state.passwordRepeat}
        onChange={(e) => setState({ ...state, passwordRepeat: e.target.value })}
      />
      <button type="submit">Register</button>
      {state.error && <p>{state.error}</p>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
