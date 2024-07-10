import { useEffect, useState } from "react";
import BlogKard from "./BlogKard";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })

    return (
        <div>
            <h2 className="text-red-600 font-semibold text-3xl"> this is blog section </h2>


            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 justify-center">
                {
                    blogs.map(blog => <BlogKard
                        key={blog.id} blog={blog}></BlogKard>)
                }
            </div>
        </div>
    );
};

export default Blogs;