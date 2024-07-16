import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import './Comment.css'

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
            <h2 className="text-xl font-semibold mb-4">Total Comments: {comments.length}</h2>
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