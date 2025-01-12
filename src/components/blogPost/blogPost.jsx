// import React from "react";
// import Card from "./Card";


// const BlogPost = async () => {
//   const posts = await getPosts();

//   const renderedPosts = posts.slice(0,6).map((post) => (
//     <Card key={post.id} post={post} />
//   ))
//   return (
//     <div>
//       <h1 className="text-left text-xl">Popular Posts</h1>
//       <span className="border-2 float-left w-32"></span>
//       <div className="flex flex-wrap gap-7 w-full justify-center lg:justify-between">
//         {renderedPosts}
//       </div>
//     </div>
//   );
// };

// export default BlogPost;


import React from "react";
import Card from "./Card";

const BlogPost = () => {
  // Example static posts data
  const posts = [
    { id: 1, title: "", content: "" },
    { id: 2, title: "Post 2", content: "Content of post 2" },
    { id: 3, title: "Post 3", content: "Content of post 3" },
    { id: 4, title: "Post 4", content: "Content of post 4" },
    { id: 5, title: "Post 5", content: "Content of post 5" },
    { id: 6, title: "Post 6", content: "Content of post 6" },
  ];

  const renderedPosts = posts.slice(0, 6).map((post) => (
    <Card key={post.id} post={post} />
  ));

  return (
    <div>
      <h1 className="text-left text-xl">Popular Posts</h1>
      <span className="border-2 float-left w-32"></span>
      <div className="flex flex-wrap gap-7 w-full justify-center lg:justify-between">
        {renderedPosts}
      </div>
    </div>
  );
};

export default BlogPost;
