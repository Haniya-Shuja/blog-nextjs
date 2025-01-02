
// "use client"
// import React, { useEffect, useState } from 'react';
// import styles from './navbar.module.css';
// import Link from 'next/link';
// import Links from './links/Links';

// const Navbar = () => {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     const fetchSession = async () => {
//       const sessionData = await auth();
//       setSession(sessionData);
//     };
//     fetchSession();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <Link href="/" className={styles.logo}>
//         Blog
//       </Link>
//       <div className="">
//         <Links session={session} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;


"use client"
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Links from './links/Links';

const Navbar = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await auth();
      setSession(sessionData);
    };
    fetchSession();
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Blog
      </Link>
      <div className="">
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;

