import BlogCard from './BlogCard';

interface Blog {
  image: string;
  title: string;
  description: string;
}

export default function BlogContent() {
  const blogs: Blog[] = [
    {
      image: "/default.png", // Path ke gambar di folder public
      title: "Blockchain Beyond Cryptocurrency: Securing the Digital World",
      description: "Discover how blockchain technology is being utilized beyond cryptocurrencies to secure data, streamline processes, and enhance transparency across industries."
    },
    {
      image: "/default.png", 
      title: "AI-Driven Healthcare: Revolutionizing Medical Diagnosis",
      description: "Discover how AI is transforming healthcare by enhancing medical diagnosis accuracy, reducing human error, and providing timely solutions."
    },
    {
      image: "/default.png",
      title: "Quantum Computing: The Next Frontier in Technology",
      description: "Quantum computing is poised to revolutionize industries by solving complex problems beyond the reach of classical computers."
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} image={blog.image} title={blog.title} description={blog.description} />
        ))}
      </div>
    </div>
  );
}
