import { useLoaderData } from "react-router-dom";

const CardDetails = () => {

    const blogs = useLoaderData();
    console.log('blog details:', blogs)

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

                        <textarea className="textarea textarea-primary" placeholder="comment box"></textarea> <br />

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;