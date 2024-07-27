import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link,  } from "react-router-dom";
import Swal from "sweetalert2";
import { CiCircleRemove } from "react-icons/ci";

const Wishlist = () => {
    const { user, _id} = useContext(AuthContext)

    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`https://blog-website-server-beta.vercel.app/wishlist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user])

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://blog-website-server-beta.vercel.app/addBlog/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Blog has been deleted.",
                                icon: "success"
                            });
                            const remaining = item.filter(blog => blog._id !== _id);
                            setItem(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 justify-center my-20 ">

                {
                    item.map(p => (
                        <div key={p._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className=" rounded-md" src={p.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{p.title}</h2>
                                    <p className="font-semibold text-lg">Category: <span className="text-[#E67E22]">{p.category}</span> </p>

                                    <p className="font-semibold text-lg">Description: <span className="text-gray-600">{p.sortDescription}</span> </p>


                                    <div className="card-actions font-semibold text-base justify-end mt-5">
                                        <div className="badge badge-outline py-4 px-4 hover:bg-[#39ad04] bg-[#348b0c] hover:border-0 border-0 text-white">
                                            <Link to={`/update/${_id}`}>Details</Link>
                                        </div>

                                        <button onClick={() => handleDelete(p._id)}
                                            className="badge badge-outline py-4 px-4 hover:bg-[#ca630a] bg-[#E67E22] hover:border-0 border-0 text-white"><span className="mr-2 text-white text-2xl"><CiCircleRemove /> </span> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Wishlist;