import { Link } from "react-router-dom";

const AllBlogCard = ({ allBLog }) => {

    const { title, category, sortDescription, longDescription, photo } = allBLog

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="rounded-lg" src={photo} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <div className="text-lg">

                        <p className="font-semibold ">category: <span className="text-[#E67E22]">{category}</span></p>

                        <p> <span className="font-semibold">sort description:</span> <span className="text-gray-600">
                        {sortDescription}</span></p>

                        <p> <span className="font-semibold">long description:</span> <span className="text-gray-600">
                        {longDescription}</span></p>
                    </div>
                    <div className="card-actions font-semibold text-base justify-end mt-5">
                        <div className="badge badge-outline py-4 px-4 hover:bg-[#39ad04] bg-[#348b0c] hover:border-0 border-0 text-white">
                            <Link>Update</Link>
                        </div>
                        <div className="badge badge-outline py-4 px-4 hover:bg-[#ca630a] bg-[#E67E22] hover:border-0 border-0 text-white">
                            <Link to='/add_blog'>Add</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogCard;