import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Comment from "./Comment";

const CardDetails = () => {
    const { user } = useContext(AuthContext)
    const blogs = useLoaderData();

    // comment box
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const comment = form.comment.value;
        
        // server site data save kora
        const commentBox = {
            comment,
            user,

        }
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentBox)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset()
                console.log(data)
            })
    }
    // comment box

    // const {userComment} = comment


    const { title, img, sort_description, description, category } = blogs
    return (
        <div>
            <h2 className="text-4xl"> details: </h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="space-y-3 text-lg">
                        <h1 className="text-3xl font-bold">Title: <span className="text-slate-600 hover:text-[#080808]">{title}</span></h1>

                        <p> <span className="font-bold">Category:</span> <span className="text-slate-600 hover:text-[#080808]">{category}</span></p>

                        <p> <span className="font-bold ">sort_description:</span> <span className=" text-slate-600 hover:text-[#080808]">{sort_description}</span></p>

                        <p> <span className="font-bold">Description:</span> <span className="text-slate-600 hover:text-[#080808] ">{description}</span></p>

                        {/* comment box */}
                        
                            
                            <form onSubmit={handleSubmit}>
                            <textarea name="comment" placeholder="Your comments" className="textarea textarea-bordered w-1/2" ></textarea> <br />

                            <input type="submit" value="submit" className="btn hover:bg-[#ca630a] bg-[#E67E22] text-white my-5" />
                        </form>
                    </div>
                </div>
            </div>
            <Comment></Comment>
        </div>
    );
}

export default CardDetails;