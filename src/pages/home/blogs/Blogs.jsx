import { useEffect, useState } from "react";
import BlogKard from "./BlogKard";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })

    return (
        <div>
            <div className="mb-10 mt-20">
                <h2 className="text-orange-500  text-center font-semibold text-3xl ">Recent Blog  </h2>
                <p className="text-center text-slate-500 mt-2 text-lg">Certainly! Bangladesh is home to many remarkable places. <br /> Here are seven famous places that highlight the country cultural, historical, and natural beauty</p>
            </div>


            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 justify-center">
                {
                    blogs.map(blog => <BlogKard
                        key={blog._id} blog={blog}></BlogKard>)
                }

            </div>
            
        </div>
    );
};

export default Blogs;