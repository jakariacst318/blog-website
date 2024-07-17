import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import './Comment.css'
import { AiOutlineComment } from "react-icons/ai";

const Comment = () => {

    const { user } = useContext(AuthContext)

    const [comments, setComment] = useState([])
    const url = `http://localhost:5000/comments`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    })


    return (
        <div className="ms-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center "><span className="mr-2 text-orange-500"><AiOutlineComment /></span> Comments: <span className="text-orange-500 ms-2">{comments.length}</span></h2>
            {comments.map((comment) => (
                <div key={comment._id}>
                    <div >
                        {
                            user &&
                            <div className="flex gap-5 mb-10 items-center">
                                <img className="rounded-full w-8 h-8 mr-2" src={user.photoURL} alt="img" />
                                <div>
                                    <p className="font-semibold">{user.displayName}</p>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Comment;