// "use client";

// import React, { useState } from "react";
// import styles from "./contact.module.css";
// import { useFormState } from "react-dom";

// import Image from "next/image";

// const ContactForm = () => {
 
//   const [state, formAction] = useFormState(contactForm, undefined);
  
  

//   return (
//     <div className={styles.container}>
//       <div className={styles.imgContainer}>
//         <Image src="/contact.png" alt="" fill className={styles.img} />
//       </div>
//       <div className={styles.formContainer}>
//         {/* <HydrationTestNoSSR/> */}
//         {/* <div suppressHydrationWarning>{a}</div> */}
//         <form action={formAction} className={styles.form}>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Name and Surname"
//           />
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Email Address"
//           />
//           <input
//             type="text"
//             name="phone"
//             id="phone"
//             placeholder="Phone Number (Optional)"
//           />
//           <textarea
//             name="message"
//             id="message"
//             cols="30"
//             rows="10"
//             placeholder="Message"
//           ></textarea>
//           <button>Send</button>
//           {state?.error && <p className="text-red-500">{state.error}</p>}
//           {state?.success && <p className="text-slate-50">Form Submitted successfully</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submissionState, setSubmissionState] = useState({
    error: null,
    success: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    const { name, email, message } = formState;

    if (!name || !email || !message) {
      setSubmissionState({ error: "All required fields must be filled!", success: null });
      return;
    }

    // Simulating a successful submission
    setSubmissionState({ error: null, success: "Form Submitted successfully!" });
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name and Surname"
            value={formState.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number (Optional)"
            value={formState.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            value={formState.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
          {submissionState.error && (
            <p className="text-red-500">{submissionState.error}</p>
          )}
          {submissionState.success && (
            <p className="text-slate-50">{submissionState.success}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
