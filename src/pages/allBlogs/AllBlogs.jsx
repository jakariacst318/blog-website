import { useLoaderData } from "react-router-dom";
import AllBlogCard from "../allBlogCard/AllBlogCard";

const AllBlogs = () => {
    const allBLogs = useLoaderData()
    return (
        <div >
            <h2 className="text-orange-500 mt-10 mb-16 text-center font-semibold text-3xl">all blog page {allBLogs.length}</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 justify-center">
                {
                    allBLogs.map(allBLog => <AllBlogCard
                        key={allBLog._id} allBLog={allBLog}></AllBlogCard>)
                }
            </div>


        </div>
    );
};

export default AllBlogs;