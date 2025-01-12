// import AdminContact from '@/components/adminContact/adminContact';
// import AdminPostForm from '@/components/adminPostForm/adminPostForm';
// import AdminPosts from '@/components/adminPosts/adminPosts';
// import AdminUserForm from '@/components/adminUserForm/adminUserForm';
// import AdminUsers from '@/components/adminUsers/adminUsers';
// // import { getSession } from 'next-auth/react';
// import { Suspense } from 'react';

// const AdminPage = async () => {
//     // const session = await getSession(); // Fetch the session

//     // if (!session) {
//     //     return <p>You need to be logged in to access this page.</p>;
//     // }

//     return (
//         <div className={styles.container}>
//             <div className={styles.row}>
//                 <div className={styles.col}>
//                     <Suspense fallback={<div>Loading...</div>}>
//                         <AdminPosts />
//                     </Suspense>
//                 </div>
//                 <div className={styles.col}>
//                     <AdminPostForm userId={1} />
//                 </div>
//             </div>
//             <div className={styles.row}>
//                 <div className={styles.col}>
//                     <Suspense fallback={<div>Loading...</div>}>
//                         <AdminUsers />
//                     </Suspense>
//                 </div>
//                 <div className={styles.col}>
//                     <AdminUserForm />
//                 </div>
//             </div>
//             <div>
//                 <h1 className="text-center text-xl">Contact information</h1>
//                 <AdminContact />
//             </div>
//         </div>
//     );wh
// };

// export default AdminPage;


export default function AdminPage(){
  return(
    <>
    </>
  )
}
