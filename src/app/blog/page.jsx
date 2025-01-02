import Card from "@/components/blogPost/Card";


const Blog = () => {  //mjhe admin ki need ni h dlt krdy? mane kuch bhi delete nahi kia ok
    // Hello ??????  hi ab kia krna hay ??  images laga deti hun github pe dal diya h vercel pe dploy ni ho raha tha sbr
    const posts = [
      { id: 1, title: "Post 1", content: "Content of post 1",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswFQqUbiGtLPzmUE2dmwWeMAvwmVkVDcKlg&s" },
      { id: 2, title: "Post 2", content: "Content of post 2" ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9co_5Gg0Fm0jiO5RpFmIFYgD66aFokR-Yg&s"},
      { id: 3, title: "Post 3", content: "Content of post 3",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswFQqUbiGtLPzmUE2dmwWeMAvwmVkVDcKlg&s" },
      { id: 4, title: "Post 4", content: "Content of post 4" ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswFQqUbiGtLPzmUE2dmwWeMAvwmVkVDcKlg&s"},
      { id: 5, title: "Post 5", content: "Content of post 5" ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswFQqUbiGtLPzmUE2dmwWeMAvwmVkVDcKlg&s"},
      { id: 6, title: "Post 6", content: "Content of post 6",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswFQqUbiGtLPzmUE2dmwWeMAvwmVkVDcKlg&s" },
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
  
  export default Blog;
  