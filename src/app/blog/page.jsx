import Card from "@/components/blogPost/Card";


const Blog = () => {  
    const posts = [
      { id: 1, title: "Graphic designer", content: "here is the conetent",img:"https://img.freepik.com/free-vector/colorful-graphic-concept-with-er-his-workplace-blue-3d_1284-26979.jpg?ga=GA1.1.1479244252.1736090081&semt=ais_hybrid" },
      { id: 2, title: "Designer-Tool", content: "Content of post 2" ,img:"https://www.unite.ai/wp-content/uploads/2023/05/AI-Graphic-design-tools.png"},
      { id: 3, title: "Branding", content: "Content of post 3",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5Z21AxM1ks7gMxCyZZZcihrcasv-iIHPYnavhsxADA1aRNvgnRB_zLzDxh2NJOiQUSA&usqp=CAU" },
      { id: 4, title: "Artifical Intelligence", content: "Content of post 4" ,img:"https://media.istockphoto.com/id/1345658982/photo/ai-microprocessor-on-motherboard-computer-circuit.jpg?s=612x612&w=0&k=20&c=Kah6k5RDjasNEzJMjr8kSuYNN5LJ3CKTz4ZGLiCW2Fs="},
      { id: 5, title: "Web development", content: "Content of post 5" ,img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ="},
      { id: 6, title: "Software Engineering", content: "Content of post 6",img:"https://static.vecteezy.com/system/resources/previews/015/486/113/non_2x/banner-of-software-development-free-vector.jpg" },
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
  