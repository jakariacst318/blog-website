import { useLoaderData } from "react-router-dom";
import AllBlogCard from "../allBlogCard/AllBlogCard";
import { AiOutlineDown } from "react-icons/ai";

const AllBlogs = () => {
    const allBLogs = useLoaderData()
    return (
        <div >
            <h2 className=" mt-10 mb-16 flex items-center justify-center font-semibold text-3xl"> <span className="text-orange-500 mr-2"> <AiOutlineDown /></span> all blog page: <span className="text-orange-500 ms-2">{allBLogs.length}</span></h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 justify-center mb-20">
                {
                    allBLogs.map(allBLog => <AllBlogCard
                        key={allBLog._id} allBLog={allBLog}></AllBlogCard>)
                }
            </div>


        </div>
    );
};

export default AllBlogs;