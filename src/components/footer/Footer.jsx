import React from "react";
import styles from "./footer.module.css";
// import { CiLocationOn } from "react-icons/ci";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdMarkEmailRead } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";

// const Footer = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.logo}>Blog</div>
//       <div className="md:mt-5">
//       <div className="flex items-center">
//           <CiLocationOn />
//           <address></address>
//         </div>
//         <div className="flex items-center gap-1">
//           <FaPhoneAlt />
//           <p></p>
//         </div>
//         <div className="flex items-center gap-1">
//           <MdMarkEmailRead />
//           <p>blog@gmail.com</p>
//         </div>
//       </div>
//       <div className={styles.text}>
//        © All rights reserved.
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blog</div>
      <div className="md:mt-5">
        <div className="flex items-center">
          <CiLocationOn />
          <address>1234 Blog Street, Blog City, BC 12345</address>
        </div>
        <div className="flex items-center gap-1">
          <FaPhoneAlt />
          <p>(123) 456-7890</p>
        </div>
        <div className="flex items-center gap-1">
          <MdMarkEmailRead />
          <p>blog@gmail.com</p>
        </div>
      </div>
      <div className={styles.text}>
        © 2025 Blog. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
